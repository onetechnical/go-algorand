// Package private provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/algorand/oapi-codegen DO NOT EDIT.
package private

import (
	"bytes"
	"compress/gzip"
	"encoding/base64"
	"fmt"
	"net/http"
	"net/url"
	"path"
	"strings"

	. "github.com/algorand/go-algorand/daemon/algod/api/server/v2/generated/model"
	"github.com/algorand/oapi-codegen/pkg/runtime"
	"github.com/getkin/kin-openapi/openapi3"
	"github.com/labstack/echo/v4"
)

// ServerInterface represents all server handlers.
type ServerInterface interface {
	// Aborts a catchpoint catchup.
	// (DELETE /v2/catchup/{catchpoint})
	AbortCatchup(ctx echo.Context, catchpoint string) error
	// Starts a catchpoint catchup.
	// (POST /v2/catchup/{catchpoint})
	StartCatchup(ctx echo.Context, catchpoint string) error

	// (POST /v2/shutdown)
	ShutdownNode(ctx echo.Context, params ShutdownNodeParams) error
}

// ServerInterfaceWrapper converts echo contexts to parameters.
type ServerInterfaceWrapper struct {
	Handler ServerInterface
}

// AbortCatchup converts echo context to params.
func (w *ServerInterfaceWrapper) AbortCatchup(ctx echo.Context) error {
	var err error
	// ------------- Path parameter "catchpoint" -------------
	var catchpoint string

	err = runtime.BindStyledParameterWithLocation("simple", false, "catchpoint", runtime.ParamLocationPath, ctx.Param("catchpoint"), &catchpoint)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, fmt.Sprintf("Invalid format for parameter catchpoint: %s", err))
	}

	ctx.Set(Api_keyScopes, []string{""})

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.AbortCatchup(ctx, catchpoint)
	return err
}

// StartCatchup converts echo context to params.
func (w *ServerInterfaceWrapper) StartCatchup(ctx echo.Context) error {
	var err error
	// ------------- Path parameter "catchpoint" -------------
	var catchpoint string

	err = runtime.BindStyledParameterWithLocation("simple", false, "catchpoint", runtime.ParamLocationPath, ctx.Param("catchpoint"), &catchpoint)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, fmt.Sprintf("Invalid format for parameter catchpoint: %s", err))
	}

	ctx.Set(Api_keyScopes, []string{""})

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.StartCatchup(ctx, catchpoint)
	return err
}

// ShutdownNode converts echo context to params.
func (w *ServerInterfaceWrapper) ShutdownNode(ctx echo.Context) error {
	var err error

	ctx.Set(Api_keyScopes, []string{""})

	// Parameter object where we will unmarshal all parameters from the context
	var params ShutdownNodeParams
	// ------------- Optional query parameter "timeout" -------------

	err = runtime.BindQueryParameter("form", true, false, "timeout", ctx.QueryParams(), &params.Timeout)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, fmt.Sprintf("Invalid format for parameter timeout: %s", err))
	}

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.ShutdownNode(ctx, params)
	return err
}

// This is a simple interface which specifies echo.Route addition functions which
// are present on both echo.Echo and echo.Group, since we want to allow using
// either of them for path registration
type EchoRouter interface {
	CONNECT(path string, h echo.HandlerFunc, m ...echo.MiddlewareFunc) *echo.Route
	DELETE(path string, h echo.HandlerFunc, m ...echo.MiddlewareFunc) *echo.Route
	GET(path string, h echo.HandlerFunc, m ...echo.MiddlewareFunc) *echo.Route
	HEAD(path string, h echo.HandlerFunc, m ...echo.MiddlewareFunc) *echo.Route
	OPTIONS(path string, h echo.HandlerFunc, m ...echo.MiddlewareFunc) *echo.Route
	PATCH(path string, h echo.HandlerFunc, m ...echo.MiddlewareFunc) *echo.Route
	POST(path string, h echo.HandlerFunc, m ...echo.MiddlewareFunc) *echo.Route
	PUT(path string, h echo.HandlerFunc, m ...echo.MiddlewareFunc) *echo.Route
	TRACE(path string, h echo.HandlerFunc, m ...echo.MiddlewareFunc) *echo.Route
}

// RegisterHandlers adds each server route to the EchoRouter.
func RegisterHandlers(router EchoRouter, si ServerInterface, m ...echo.MiddlewareFunc) {
	RegisterHandlersWithBaseURL(router, si, "", m...)
}

// Registers handlers, and prepends BaseURL to the paths, so that the paths
// can be served under a prefix.
func RegisterHandlersWithBaseURL(router EchoRouter, si ServerInterface, baseURL string, m ...echo.MiddlewareFunc) {

	wrapper := ServerInterfaceWrapper{
		Handler: si,
	}

	router.DELETE(baseURL+"/v2/catchup/:catchpoint", wrapper.AbortCatchup, m...)
	router.POST(baseURL+"/v2/catchup/:catchpoint", wrapper.StartCatchup, m...)
	router.POST(baseURL+"/v2/shutdown", wrapper.ShutdownNode, m...)

}

// Base64 encoded, gzipped, json marshaled Swagger object
var swaggerSpec = []string{

	"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",
	"EwAA//8f+8KPlsAAAA==",
}

// GetSwagger returns the content of the embedded swagger specification file
// or error if failed to decode
func decodeSpec() ([]byte, error) {
	zipped, err := base64.StdEncoding.DecodeString(strings.Join(swaggerSpec, ""))
	if err != nil {
		return nil, fmt.Errorf("error base64 decoding spec: %s", err)
	}
	zr, err := gzip.NewReader(bytes.NewReader(zipped))
	if err != nil {
		return nil, fmt.Errorf("error decompressing spec: %s", err)
	}
	var buf bytes.Buffer
	_, err = buf.ReadFrom(zr)
	if err != nil {
		return nil, fmt.Errorf("error decompressing spec: %s", err)
	}

	return buf.Bytes(), nil
}

var rawSpec = decodeSpecCached()

// a naive cached of a decoded swagger spec
func decodeSpecCached() func() ([]byte, error) {
	data, err := decodeSpec()
	return func() ([]byte, error) {
		return data, err
	}
}

// Constructs a synthetic filesystem for resolving external references when loading openapi specifications.
func PathToRawSpec(pathToFile string) map[string]func() ([]byte, error) {
	var res = make(map[string]func() ([]byte, error))
	if len(pathToFile) > 0 {
		res[pathToFile] = rawSpec
	}

	return res
}

// GetSwagger returns the Swagger specification corresponding to the generated code
// in this file. The external references of Swagger specification are resolved.
// The logic of resolving external references is tightly connected to "import-mapping" feature.
// Externally referenced files must be embedded in the corresponding golang packages.
// Urls can be supported but this task was out of the scope.
func GetSwagger() (swagger *openapi3.T, err error) {
	var resolvePath = PathToRawSpec("")

	loader := openapi3.NewLoader()
	loader.IsExternalRefsAllowed = true
	loader.ReadFromURIFunc = func(loader *openapi3.Loader, url *url.URL) ([]byte, error) {
		var pathToFile = url.String()
		pathToFile = path.Clean(pathToFile)
		getSpec, ok := resolvePath[pathToFile]
		if !ok {
			err1 := fmt.Errorf("path not found: %s", pathToFile)
			return nil, err1
		}
		return getSpec()
	}
	var specData []byte
	specData, err = rawSpec()
	if err != nil {
		return
	}
	swagger, err = loader.LoadFromData(specData)
	if err != nil {
		return
	}
	return
}
