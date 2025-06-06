// Copyright (C) 2019-2025 Algorand, Inc.
// This file is part of go-algorand
//
// go-algorand is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// go-algorand is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with go-algorand.  If not, see <https://www.gnu.org/licenses/>.

package main

import (
	"bufio"
	"context"
	"fmt"
	"net"
	"os"
	"regexp"
	"slices"
	"sort"
	"strings"

	"github.com/spf13/cobra"

	"github.com/algorand/go-algorand/tools/network"
	"github.com/algorand/go-algorand/tools/network/cloudflare"
)

var (
	addFromName    string
	addToAddress   string
	deleteNetwork  string
	listNetwork    string
	recordType     string
	noPrompt       bool
	excludePattern string
	includePattern string
	exportNetwork  string
	outputFilename string
)

func init() {
	dnsCmd.AddCommand(checkCmd)
	dnsCmd.AddCommand(addCmd)
	dnsCmd.AddCommand(deleteCmd)
	dnsCmd.AddCommand(listCmd)
	dnsCmd.AddCommand(exportCmd)

	listCmd.AddCommand(listRecordsCmd)
	listCmd.AddCommand(listZonesCmd)

	addCmd.Flags().StringVarP(&addFromName, "from", "f", "", "From name to add new DNS entry")
	addCmd.MarkFlagRequired("from")
	addCmd.Flags().StringVarP(&addToAddress, "to", "t", "", "To address to map new DNS entry to")
	addCmd.MarkFlagRequired("to")

	deleteCmd.Flags().StringVarP(&deleteNetwork, "network", "n", "", "Network name for records to delete")
	deleteCmd.Flags().BoolVarP(&noPrompt, "no-prompt", "y", false, "No prompting for records deletion")
	deleteCmd.Flags().StringVarP(&excludePattern, "exclude", "e", "", "name records exclude pattern")
	deleteCmd.Flags().StringVarP(&includePattern, "include", "i", "", "name records include pattern, any matches are added to network records")

	listRecordsCmd.Flags().StringVarP(&listNetwork, "network", "n", "", "Domain name for records to list")
	listRecordsCmd.Flags().StringVarP(&recordType, "recordType", "t", "", "DNS record type to list (A, CNAME, SRV)")
	listRecordsCmd.MarkFlagRequired("network")

	exportCmd.Flags().StringVarP(&exportNetwork, "network", "n", "", "Domain name to export")
	exportCmd.MarkFlagRequired("network")
	exportCmd.Flags().StringVarP(&outputFilename, "zonefile", "z", "", "Output file for backup ( intead of outputing it to stdout ) ")
}

type byIP []net.IP

func (a byIP) Len() int           { return len(a) }
func (a byIP) Less(i, j int) bool { return a[i].String() < a[j].String() }
func (a byIP) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }

var dnsCmd = &cobra.Command{
	Use:   "dns",
	Short: "Check status of required DNS entries",
	Long:  "Check status of required DNS entries",
	Run: func(cmd *cobra.Command, args []string) {
		// Fall back
		cmd.HelpFunc()(cmd, args)
	},
}

var listCmd = &cobra.Command{
	Use:   "list",
	Short: "List the A/SRV/Zones entries of the given network",
	Long:  "List the A/SRV/Zones entries of the given network",
	Run: func(cmd *cobra.Command, args []string) {
		cmd.HelpFunc()(cmd, args)
	},
}

var listRecordsCmd = &cobra.Command{
	Use:   "records",
	Short: "List the A/SRV entries of the given network",
	Long:  "List the A/SRV entries of the given network",
	Run: func(cmd *cobra.Command, args []string) {
		recordType = strings.ToUpper(recordType)
		err := listEntries(listNetwork, recordType)
		if err != nil {
			fmt.Fprintf(os.Stderr, "%v\n", err)
			os.Exit(1)
		}
	},
}

var listZonesCmd = &cobra.Command{
	Use:   "zones",
	Short: "List the zones",
	Long:  "List the zones",
	Run: func(cmd *cobra.Command, args []string) {
		if !doListZones() {
			os.Exit(1)
		}
	},
}

var checkCmd = &cobra.Command{
	Use:   "check",
	Short: "Check the status",
	Long:  "Check the status",
	Run: func(cmd *cobra.Command, args []string) {
		checkDNSRecord("relay-us-ea-1.algorand.network")
		checkDNSRecord("relay-us-ea-2.algorand.network")
		checkDNSRecord("relay-us-ea-3.algorand.network")
		checkDNSRecord("relay-us-ea-4.algorand.network")
		checkDNSRecord("relay-us-ea-99876.algorand.network")

		fmt.Printf("------------------------\n")
		checkSrvRecord("devnet.algorand.network")
		checkSrvRecord("testnet.algorand.network")
		checkSrvRecord("bogus.algorand.network")
		fmt.Printf("------------------------\n")
	},
}

var addCmd = &cobra.Command{
	Use:   "add",
	Short: "Add a DNS record",
	Long:  "Adds a DNS record to map --from to --to, using A if to == IP or CNAME otherwise\n",
	Example: "algons dns add -f a.test.algodev.network -t r1.algodev.network\n" +
		"algons dns add -f a.test.algodev.network -t 192.168.100.10",
	Run: func(cmd *cobra.Command, args []string) {
		err := doAddDNS(addFromName, addToAddress)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error adding DNS entry: %v\n", err)
			os.Exit(1)
		} else {
			fmt.Printf("DNS Entry Added\n")
		}
	},
}

var deleteCmd = &cobra.Command{
	Use:   "delete",
	Short: "Delete DNS and SRV records for a specified network",
	Run: func(cmd *cobra.Command, args []string) {
		if !doDeleteDNS(deleteNetwork, noPrompt, excludePattern, includePattern) {
			os.Exit(1)
		}
	},
}

var exportCmd = &cobra.Command{
	Use:   "export",
	Short: "Export DNS record entries for a specified network",
	Run: func(cmd *cobra.Command, args []string) {
		if !doExportZone(exportNetwork, outputFilename) {
			os.Exit(1)
		}
	},
}

func doAddTXT(from string, to string) error {
	cfZoneID, cfToken, err := getClouldflareCredentials()
	if err != nil {
		return fmt.Errorf("error getting DNS credentials: %v", err)
	}

	cloudflareDNS := cloudflare.NewDNS(cfZoneID, cfToken)

	const priority = 1
	const proxied = false
	return cloudflareDNS.CreateDNSRecord(context.Background(), "TXT", from, to, cloudflare.AutomaticTTL, priority, proxied)
}

func doAddDNS(from string, to string) (err error) {
	cfZoneID, cfToken, err := getClouldflareCredentials()
	if err != nil {
		return fmt.Errorf("error getting DNS credentials: %v", err)
	}

	cloudflareDNS := cloudflare.NewDNS(cfZoneID, cfToken)

	const priority = 1
	const proxied = false

	// If we need to register anything, first register a DNS entry
	// to map our network DNS name to our public name (or IP) provided to nodecfg
	// Network HostName = eg r1.testnet.algorand.network
	isIP := net.ParseIP(to) != nil
	var recordType string
	if isIP {
		recordType = "A"
	} else {
		recordType = "CNAME"
	}
	err = cloudflareDNS.SetDNSRecord(context.Background(), recordType, from, to, cloudflare.AutomaticTTL, priority, proxied)

	return
}

func getClouldflareAuthCredentials() (token string, err error) {
	token = os.Getenv("CLOUDFLARE_API_TOKEN")
	if token == "" {
		err = fmt.Errorf("CLOUDFLARE_API_TOKEN credential missing from ENV")
	}
	return
}

func getClouldflareCredentials() (zoneID string, token string, err error) {
	token, err = getClouldflareAuthCredentials()
	if err != nil {
		return
	}

	zoneID = os.Getenv("CLOUDFLARE_ZONE_ID")
	if zoneID == "" {
		err = fmt.Errorf("one or more credentials missing from ENV")
	}
	return
}

func checkDNSRecord(dnsName string) {
	fmt.Printf("------------------------\nDNS Lookup: %s\n", dnsName)
	ips, err := net.LookupIP(dnsName)
	if err != nil {
		fmt.Printf("Cannot resolve %s: %v\n", dnsName, err)
	} else {
		sort.Sort(byIP(ips))
		for _, ip := range ips {
			fmt.Printf("-> %s\n", ip.String())
		}
	}
}

func checkSrvRecord(dnsBootstrap string) {
	fmt.Printf("------------------------\nSRV Lookup: %s\n", dnsBootstrap)

	_, addrs, err := net.LookupSRV("algobootstrap", "tcp", dnsBootstrap)
	if err != nil {
		if !strings.HasSuffix(err.Error(), "cannot unmarshal DNS message") {
			// we weren't able to get the SRV records.
			fmt.Printf("Cannot lookup SRV record for %s: %v\n", dnsBootstrap, err)
			return
		}

		var resolver network.Resolver
		_, addrs, err = resolver.LookupSRV(context.Background(), "algobootstrap", "tcp", dnsBootstrap)
		if err != nil {
			fmt.Printf("Cannot lookup SRV record for %s via neither default resolver nor via %s: %v\n", dnsBootstrap, resolver.EffectiveResolverDNS(), err)
			return
		}
	}

	for _, srv := range addrs {
		fmt.Printf("%s:%d\n", srv.Target, srv.Port)
	}
}

func doDeleteDNS(network string, noPrompt bool, excludePattern string, includePattern string) bool {

	restrictedNetworks := map[string]bool{"mainnet": true, "testnet": true, "devnet": true, "betanet": true}
	if restrictedNetworks[network] {
		fmt.Fprintf(os.Stderr, "Deletion of network '%s' using this tool is not allowed\n", network)
		return false
	}

	var excludeRegex *regexp.Regexp
	if excludePattern != "" {
		var err error
		excludeRegex, err = regexp.Compile(excludePattern)
		if err != nil {
			fmt.Fprintf(os.Stderr, "specified regular expression exclude pattern ('%s') is not a valid regular expression : %v", excludePattern, err)
			return false
		}
	}

	var includeRegex *regexp.Regexp
	if includePattern != "" {
		var err error
		includeRegex, err = regexp.Compile(includePattern)
		if err != nil {
			fmt.Fprintf(os.Stderr, "specified regular expression include pattern ('%s') is not a valid regular expression : %v", includePattern, err)
			return false
		}

		for k := range restrictedNetworks {
			if includeRegex != nil {
				if includeRegex.MatchString(k) {
					fmt.Fprintf(os.Stderr, "specified include pattern ('%s') matches a restricted network: %s", includePattern, k)
					return false
				}
			}
		}
	}

	if network == "" && includeRegex == nil {
		fmt.Fprintf(os.Stderr, "\"network\" or \"include\" required.\n")
		return false
	}

	cfZoneID, cfToken, err := getClouldflareCredentials()
	if err != nil {
		fmt.Fprintf(os.Stderr, "error getting DNS credentials: %v", err)
		return false
	}

	cloudflareDNS := cloudflare.NewDNS(cfZoneID, cfToken)

	var idsToDelete []cloudflare.DNSRecordResponseEntry
	services := []string{"_algobootstrap", "_metrics"}
	servicesRegexp, err := regexp.Compile(`^(_algobootstrap|_metrics)\._tcp\..*algodev.network$`)

	if err != nil {
		fmt.Fprintf(os.Stderr, "failed to create services expression: %v", err)
	}

	if includeRegex != nil {
		services = []string{"N/A when using an include pattern"}
	}

	for _, service := range services {
		var name string
		if includeRegex != nil && network == "" {
			name = ""
		} else {
			name = service + "._tcp." + network + ".algodev.network"
		}

		records, err1 := cloudflareDNS.ListDNSRecord(context.Background(), "SRV", name, "", "", "", "")

		if err1 != nil {
			if name != "" {
				fmt.Fprintf(os.Stderr, "Error listing SRV '%s' entries: %v\n", service, err1)
			} else {
				fmt.Fprintf(os.Stderr, "Error listing SRV entries: %v\n", err1)
			}
			os.Exit(1)
		}
		for _, r := range records {
			if excludeRegex != nil {
				if excludeRegex.MatchString(r.Name) {
					fmt.Printf("Excluding SRV record: %s\n", r.Name)
					continue
				}
			}

			if includeRegex == nil || (includeRegex.MatchString(r.Name) && servicesRegexp.MatchString(r.Name)) {
				fmt.Printf("Found SRV record: %s\n", r.Name)
				idsToDelete = append(idsToDelete, r)
			}
		}
	}

	var networkSuffix string
	if network == "" {
		networkSuffix = ".algodev.network"
	} else {
		networkSuffix = "." + network + ".algodev.network"
	}

	for _, recordType := range []string{"A", "CNAME", "TXT"} {
		records, err1 := cloudflareDNS.ListDNSRecord(context.Background(), recordType, "", "", "", "", "")
		if err1 != nil {
			fmt.Fprintf(os.Stderr, "Error listing DNS '%s' entries: %v\n", recordType, err1)
			os.Exit(1)
		}
		for _, r := range records {
			if strings.Index(r.Name, networkSuffix) > 0 {
				if excludeRegex != nil {
					if excludeRegex.MatchString(r.Name) {
						fmt.Printf("Excluding DNS '%s' record: %s\n", recordType, r.Name)
						continue
					}
				}

				if includeRegex == nil || includeRegex.MatchString(r.Name) {
					fmt.Printf("Found DNS '%s' record: %s\n", recordType, r.Name)
					idsToDelete = append(idsToDelete, r)
				}
			}
		}
	}

	err = checkedDelete(idsToDelete, cloudflareDNS)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error deleting: %s\n", err)
	}
	return true
}

func checkedDelete(toDelete []cloudflare.DNSRecordResponseEntry, cloudflareDNS *cloudflare.DNS) error {
	if len(toDelete) == 0 {
		fmt.Printf("No DNS/SRV records found\n")
		return nil
	}

	var text string
	if !noPrompt {
		reader := bufio.NewReader(os.Stdin)
		fmt.Printf("Delete these %d entries (type 'yes' to delete)? ", len(toDelete))
		text, _ = reader.ReadString('\n')
		text = strings.Replace(text, "\n", "", -1)
	} else {
		text = "yes"
	}

	if text == "yes" {
		for _, entry := range toDelete {
			fmt.Fprintf(os.Stdout, "Deleting %s\n", entry.Name)
			err := cloudflareDNS.DeleteDNSRecord(context.Background(), entry.ID)
			if err != nil {
				return fmt.Errorf(" !! error deleting %s: %v", entry.Name, err)
			}
		}
	}
	return nil
}

func getEntries(getNetwork string, recordType string) ([]cloudflare.DNSRecordResponseEntry, error) {
	recordTypes := []string{"A", "CNAME", "SRV", "TXT"}
	isKnown := slices.Contains(recordTypes, recordType) || recordType == ""
	if !isKnown {
		return nil, fmt.Errorf("invalid recordType specified %s", recordType)
	}
	cfZoneID, cfToken, err := getClouldflareCredentials()
	if err != nil {
		return nil, fmt.Errorf("error getting DNS credentials: %v", err)
	}

	cloudflareDNS := cloudflare.NewDNS(cfZoneID, cfToken)
	if recordType != "" {
		recordTypes = []string{recordType}
	}
	var records []cloudflare.DNSRecordResponseEntry
	for _, recType := range recordTypes {
		records, err = cloudflareDNS.ListDNSRecord(context.Background(), recType, getNetwork, "", "", "", "")
		if err != nil {
			return nil, fmt.Errorf("error listing DNS entries %w", err)
		}
	}
	return records, nil
}

func listEntries(listNetwork string, recordType string) error {
	records, err := getEntries("", recordType)
	if err != nil {
		return err
	}
	for _, record := range records {
		if strings.HasSuffix(record.Name, listNetwork) {
			fmt.Printf("%v\n", record.Name)
		}
	}
	return nil
}

func doExportZone(network string, outputFilename string) bool {
	cfToken, err := getClouldflareAuthCredentials()
	if err != nil {
		fmt.Fprintf(os.Stderr, "error getting DNS credentials: %v", err)
		return false
	}
	cloudflareCred := cloudflare.NewCred(cfToken)
	zones, err := cloudflareCred.GetZones(context.Background())
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error retrieving zones entries: %v\n", err)
		return false
	}
	zoneID := ""
	// find a zone that matches the requested network name.
	for _, z := range zones {
		if z.DomainName == network {
			zoneID = z.ZoneID
			break
		}
		fmt.Printf("%s : %s\n", z.DomainName, z.ZoneID)
	}
	if zoneID == "" {
		fmt.Fprintf(os.Stderr, "No matching zoneID was found for %s\n", network)
		return false
	}
	cloudflareDNS := cloudflare.NewDNS(zoneID, cfToken)
	exportedZone, err := cloudflareDNS.ExportZone(context.Background())
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to export zone : %v\n", err)
		return false
	}
	if outputFilename != "" {
		err = os.WriteFile(outputFilename, exportedZone, 0666)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Unable to write exported zone file : %v\n", err)
			return false
		}
	} else {
		fmt.Fprint(os.Stdout, string(exportedZone))
	}
	return true
}

func doListZones() bool {
	cfToken, err := getClouldflareAuthCredentials()
	if err != nil {
		fmt.Fprintf(os.Stderr, "error getting DNS credentials: %v", err)
		return false
	}
	cloudflareCred := cloudflare.NewCred(cfToken)
	zones, err := cloudflareCred.GetZones(context.Background())
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error listing zones entries: %v\n", err)
		return false
	}
	for _, z := range zones {
		fmt.Printf("%s : %s\n", z.DomainName, z.ZoneID)
	}
	return true
}
