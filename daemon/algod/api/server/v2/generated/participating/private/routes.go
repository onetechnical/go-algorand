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
	// Gets the merged config file.
	// (GET /debug/settings/config)
	GetConfig(ctx echo.Context) error

	// (GET /debug/settings/pprof)
	GetDebugSettingsProf(ctx echo.Context) error

	// (PUT /debug/settings/pprof)
	PutDebugSettingsProf(ctx echo.Context) error
	// Return a list of participation keys
	// (GET /v2/participation)
	GetParticipationKeys(ctx echo.Context) error
	// Add a participation key to the node
	// (POST /v2/participation)
	AddParticipationKey(ctx echo.Context) error
	// Generate and install participation keys to the node.
	// (POST /v2/participation/generate/{address})
	GenerateParticipationKeys(ctx echo.Context, address string, params GenerateParticipationKeysParams) error
	// Delete a given participation key by ID
	// (DELETE /v2/participation/{participation-id})
	DeleteParticipationKeyByID(ctx echo.Context, participationId string) error
	// Get participation key info given a participation ID
	// (GET /v2/participation/{participation-id})
	GetParticipationKeyByID(ctx echo.Context, participationId string) error
	// Append state proof keys to a participation key
	// (POST /v2/participation/{participation-id})
	AppendKeys(ctx echo.Context, participationId string) error
}

// ServerInterfaceWrapper converts echo contexts to parameters.
type ServerInterfaceWrapper struct {
	Handler ServerInterface
}

// GetConfig converts echo context to params.
func (w *ServerInterfaceWrapper) GetConfig(ctx echo.Context) error {
	var err error

	ctx.Set(Api_keyScopes, []string{""})

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.GetConfig(ctx)
	return err
}

// GetDebugSettingsProf converts echo context to params.
func (w *ServerInterfaceWrapper) GetDebugSettingsProf(ctx echo.Context) error {
	var err error

	ctx.Set(Api_keyScopes, []string{""})

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.GetDebugSettingsProf(ctx)
	return err
}

// PutDebugSettingsProf converts echo context to params.
func (w *ServerInterfaceWrapper) PutDebugSettingsProf(ctx echo.Context) error {
	var err error

	ctx.Set(Api_keyScopes, []string{""})

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.PutDebugSettingsProf(ctx)
	return err
}

// GetParticipationKeys converts echo context to params.
func (w *ServerInterfaceWrapper) GetParticipationKeys(ctx echo.Context) error {
	var err error

	ctx.Set(Api_keyScopes, []string{""})

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.GetParticipationKeys(ctx)
	return err
}

// AddParticipationKey converts echo context to params.
func (w *ServerInterfaceWrapper) AddParticipationKey(ctx echo.Context) error {
	var err error

	ctx.Set(Api_keyScopes, []string{""})

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.AddParticipationKey(ctx)
	return err
}

// GenerateParticipationKeys converts echo context to params.
func (w *ServerInterfaceWrapper) GenerateParticipationKeys(ctx echo.Context) error {
	var err error
	// ------------- Path parameter "address" -------------
	var address string

	err = runtime.BindStyledParameterWithLocation("simple", false, "address", runtime.ParamLocationPath, ctx.Param("address"), &address)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, fmt.Sprintf("Invalid format for parameter address: %s", err))
	}

	ctx.Set(Api_keyScopes, []string{""})

	// Parameter object where we will unmarshal all parameters from the context
	var params GenerateParticipationKeysParams
	// ------------- Optional query parameter "dilution" -------------

	err = runtime.BindQueryParameter("form", true, false, "dilution", ctx.QueryParams(), &params.Dilution)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, fmt.Sprintf("Invalid format for parameter dilution: %s", err))
	}

	// ------------- Required query parameter "first" -------------

	err = runtime.BindQueryParameter("form", true, true, "first", ctx.QueryParams(), &params.First)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, fmt.Sprintf("Invalid format for parameter first: %s", err))
	}

	// ------------- Required query parameter "last" -------------

	err = runtime.BindQueryParameter("form", true, true, "last", ctx.QueryParams(), &params.Last)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, fmt.Sprintf("Invalid format for parameter last: %s", err))
	}

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.GenerateParticipationKeys(ctx, address, params)
	return err
}

// DeleteParticipationKeyByID converts echo context to params.
func (w *ServerInterfaceWrapper) DeleteParticipationKeyByID(ctx echo.Context) error {
	var err error
	// ------------- Path parameter "participation-id" -------------
	var participationId string

	err = runtime.BindStyledParameterWithLocation("simple", false, "participation-id", runtime.ParamLocationPath, ctx.Param("participation-id"), &participationId)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, fmt.Sprintf("Invalid format for parameter participation-id: %s", err))
	}

	ctx.Set(Api_keyScopes, []string{""})

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.DeleteParticipationKeyByID(ctx, participationId)
	return err
}

// GetParticipationKeyByID converts echo context to params.
func (w *ServerInterfaceWrapper) GetParticipationKeyByID(ctx echo.Context) error {
	var err error
	// ------------- Path parameter "participation-id" -------------
	var participationId string

	err = runtime.BindStyledParameterWithLocation("simple", false, "participation-id", runtime.ParamLocationPath, ctx.Param("participation-id"), &participationId)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, fmt.Sprintf("Invalid format for parameter participation-id: %s", err))
	}

	ctx.Set(Api_keyScopes, []string{""})

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.GetParticipationKeyByID(ctx, participationId)
	return err
}

// AppendKeys converts echo context to params.
func (w *ServerInterfaceWrapper) AppendKeys(ctx echo.Context) error {
	var err error
	// ------------- Path parameter "participation-id" -------------
	var participationId string

	err = runtime.BindStyledParameterWithLocation("simple", false, "participation-id", runtime.ParamLocationPath, ctx.Param("participation-id"), &participationId)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, fmt.Sprintf("Invalid format for parameter participation-id: %s", err))
	}

	ctx.Set(Api_keyScopes, []string{""})

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.AppendKeys(ctx, participationId)
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

	router.GET(baseURL+"/debug/settings/config", wrapper.GetConfig, m...)
	router.GET(baseURL+"/debug/settings/pprof", wrapper.GetDebugSettingsProf, m...)
	router.PUT(baseURL+"/debug/settings/pprof", wrapper.PutDebugSettingsProf, m...)
	router.GET(baseURL+"/v2/participation", wrapper.GetParticipationKeys, m...)
	router.POST(baseURL+"/v2/participation", wrapper.AddParticipationKey, m...)
	router.POST(baseURL+"/v2/participation/generate/:address", wrapper.GenerateParticipationKeys, m...)
	router.DELETE(baseURL+"/v2/participation/:participation-id", wrapper.DeleteParticipationKeyByID, m...)
	router.GET(baseURL+"/v2/participation/:participation-id", wrapper.GetParticipationKeyByID, m...)
	router.POST(baseURL+"/v2/participation/:participation-id", wrapper.AppendKeys, m...)

}

// Base64 encoded, gzipped, json marshaled Swagger object
var swaggerSpec = []string{

	"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",
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
