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
	// Aborts a catchpoint catchup.
	// (DELETE /v2/catchup/{catchpoint})
	AbortCatchup(ctx echo.Context, catchpoint string) error
	// Starts a catchpoint catchup.
	// (POST /v2/catchup/{catchpoint})
	StartCatchup(ctx echo.Context, catchpoint string, params StartCatchupParams) error

	// (POST /v2/shutdown)
	ShutdownNode(ctx echo.Context, params ShutdownNodeParams) error
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

	// Parameter object where we will unmarshal all parameters from the context
	var params StartCatchupParams
	// ------------- Optional query parameter "min" -------------

	err = runtime.BindQueryParameter("form", true, false, "min", ctx.QueryParams(), &params.Min)
	if err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, fmt.Sprintf("Invalid format for parameter min: %s", err))
	}

	// Invoke the callback with all the unmarshalled arguments
	err = w.Handler.StartCatchup(ctx, catchpoint, params)
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

	router.GET(baseURL+"/debug/settings/config", wrapper.GetConfig, m...)
	router.GET(baseURL+"/debug/settings/pprof", wrapper.GetDebugSettingsProf, m...)
	router.PUT(baseURL+"/debug/settings/pprof", wrapper.PutDebugSettingsProf, m...)
	router.DELETE(baseURL+"/v2/catchup/:catchpoint", wrapper.AbortCatchup, m...)
	router.POST(baseURL+"/v2/catchup/:catchpoint", wrapper.StartCatchup, m...)
	router.POST(baseURL+"/v2/shutdown", wrapper.ShutdownNode, m...)

}

// Base64 encoded, gzipped, json marshaled Swagger object
var swaggerSpec = []string{

	"H4sIAAAAAAAC/+y9e5PbtpI4+lVQ2q3yY8UZ23GyJ751au/ETnLmxklcHid7d23fE4hsSThDATwAOCPF",
	"19/9V+gGSJAEJWpm4iS1+5c9Ih6NRqPR6OeHWa42lZIgrZk9+zCruOYbsKDxL57nqpY2E4X7qwCTa1FZ",
	"oeTsWfjGjNVCrmbzmXC/VtyuZ/OZ5Bto27j+85mGf9ZCQzF7ZnUN85nJ17DhbmC7q1zrZqRttlKZH+KM",
	"hjh/Mfu45wMvCg3GDKH8UZY7JmRe1gUwq7k0PHefDLsWds3sWhjmOzMhmZLA1JLZdacxWwooC3MSFvnP",
	"GvQuWqWffHxJH1sQM61KGML5XG0WQkKAChqgmg1hVrEClthozS1zMzhYQ0OrmAGu8zVbKn0AVAIihhdk",
	"vZk9ezszIAvQuFs5iCv871ID/AqZ5XoFdvZ+nlrc0oLOrNgklnbusa/B1KU1DNviGlfiCiRzvU7Y97Wx",
	"bAGMS/b6m+fss88++9ItZMOthcIT2eiq2tnjNVH32bNZwS2Ez0Na4+VKaS6LrGn/+pvnOP+FX+DUVtwY",
	"SB+WM/eFnb8YW0DomCAhIS2scB861O96JA5F+/MClkrDxD2hxne6KfH8v+uu5Nzm60oJaRP7wvAro89J",
	"HhZ138fDGgA67SuHKe0Gffso+/L9h8fzx48+/svbs+y//Z+ff/Zx4vKfN+MewECyYV5rDTLfZSsNHE/L",
	"msshPl57ejBrVZcFW/Mr3Hy+QVbv+zLXl1jnFS9rRyci1+qsXCnDuCejApa8Li0LE7Nalo5NudE8tTNh",
	"WKXVlSigmDvue70W+Zrl3NAQ2I5di7J0NFgbKMZoLb26PYfpY4wSB9eN8IEL+uMio13XAUzAFrlBlpfK",
	"QGbVgesp3DhcFiy+UNq7yhx3WbE3a2A4uftAly3iTjqaLssds7ivBeOGcRaupjkTS7ZTNbvGzSnFJfb3",
	"q3FY2zCHNNyczj3qDu8Y+gbISCBvoVQJXCLywrkbokwuxarWYNj1Guza33kaTKWkAaYW/4Dcum3/fy5+",
	"/IEpzb4HY/gKXvH8koHMVQHFCTtfMqlsRBqelhCHrufYOjxcqUv+H0Y5mtiYVcXzy/SNXoqNSKzqe74V",
	"m3rDZL1ZgHZbGq4Qq5gGW2s5BhCNeIAUN3w7nPSNrmWO+99O25HlHLUJU5V8hwjb8O1fH809OIbxsmQV",
	"yELIFbNbOSrHubkPg5dpVctigphj3Z5GF6upIBdLAQVrRtkDiZ/mEDxCHgdPK3xF4IRBRsFpZjkAjoRt",
	"gmbc6XZfWMVXEJHMCfvJMzf8atUlyIbQ2WKHnyoNV0LVpuk0AiNOvV8Cl8pCVmlYigSNXXh0OAZDbTwH",
	"3ngZKFfSciGhcMwZgVYWiFmNwhRNuP+9M7zFF9zAF0/H7vj268TdX6r+ru/d8Um7jY0yOpKJq9N99Qc2",
	"LVl1+k94H8ZzG7HK6OfBRorVG3fbLEWJN9E/3P4FNNQGmUAHEeFuMmIlua01PHsnH7q/WMYuLJcF14X7",
	"ZUM/fV+XVlyIlfuppJ9eqpXIL8RqBJkNrMkHF3bb0D9uvDQ7ttvku+KlUpd1FS8o7zxcFzt2/mJsk2nM",
	"YwnzrHntxg+PN9vwGDm2h902GzkC5CjuKu4aXsJOg4OW50v8Z7tEeuJL/av7p6pK19tWyxRqHR37KxnV",
	"B16tcFZVpci5Q+Jr/9l9dUwA6CHB2xaneKE++xCBWGlVgbaCBuVVlZUq52VmLLc40r9qWM6ezf7ltNW/",
	"nFJ3cxpN/tL1usBOTmQlMSjjVXXEGK+c6GP2MAvHoPETsglieyg0CUmb6EhJOBZcwhWX9qR9snT4QXOA",
	"3/qZWnyTtEP47j3BRhHOqOECDEnA1PCeYRHqGaKVIVpRIF2VatH8cP+sqloM4vezqiJ8oPQIAgUz2Apj",
	"zQNcPm9PUjzP+YsT9m08NoriSpY7dzmQqOHuhqW/tfwt1uiW/BraEe8Zhtup9InbmoAGJ+bfBcXhs2Kt",
	"Sif1HKQV1/hvvm1MZu73SZ3/HCQW43acuPCh5TFHbxz8JXrc3O9RzpBwvLrnhJ31+96MbNwoewjGnLdY",
	"vGviwV+EhY05SAkRRBE1+e3hWvPdzAuJGQp7QzL5yQBRSMVXQiK0c/d8kmzDL2k/FOLdEQKY5l1EtEQS",
	"ZKNC9TKnR/3JQM/yJ6DW1MYGSdRJqqUwFt/V2JitoUTBmctA0DGp3IgyJmz4nkU0MF9rXhEt+y8kdgmJ",
	"73lqRLDe8uKdeCcmYY7YfbTRCNWN2fJB1pmEBLlGD4avSpVf/o2b9R2c8EUYa0j7OA1bAy9AszU368TB",
	"6dF2O9oU+nYNkWbZIprqpF0i/n1ni8TRDiyz4JZHy/Swp6XZFIxphNDMU1DyVRIRL9XK3AEaSnUMD6+q",
	"57ws3dRD3t1bJQ48iaOVJXONGWwEWg78C5pMDfQQZV/zfO3kI5bzspy3OjNVZSVcQcmUZkJK0HNm19y2",
	"XBBHDg88ZCgGHNe3wKLVeH0b6hp1o5TRwDYcr+KNe9ZVZbdPc5UYvoGeOIiigapRnRK9uM5fhNXBFUhk",
	"zs3QCH6zRlRbxYOfuLn9J5xZKlocqUJtsGM2+GsYZwdo17oVLGQ7hdIFKe+t+01olitNQ5Co4yd3/wGu",
	"2850TO9XGjI/hOZXoA0v3ep6i3rQkO9dneDf5uyinAs6oa76Ef/DS+Y+O3HOUVJLPQKlMhXZlQuSUByq",
	"aCbXABXPim1Ip8sqnl8eBeXzdvI0e5l08r4mNbLfQr+IZofebEVh7mqbcLCxveqeEFLiBXY0EMr2Mp1o",
	"rikIeKMqRuyjBwJxChyNEKK2d36/f6W2SW6vtoO7XW3hTnbCjTOZ2X+lti88ZEofxjyOPek6U1sm+QYM",
	"XvMyZpxultZAebZQ+mZiVe+Ckaw1uzLuRo2kynkPSdi0rjJ/NhOmG2rQG6j1dNkvDfWHT2Gsg4ULy38D",
	"LBg36l1goTvQXWNBbSpRwh2Q/jopzS64gc+esIu/nX3++Mnfn3z+hSPJSquV5hu22Fkw7L7XTzJjdyU8",
	"SD4TUbpIj/7F02Cs646bGseoWuew4dVwKDICkhqAmjHXboi1Lppx1Q2AkzgiuKuN0M7Ivu1AewGLenUB",
	"1ron/yutlnfODQczpKDDRq8q7QQL0zWYemnptHBNTmFrNT+tsCXIghwu3DqEcY/hzeJOiGps44t2loJ5",
	"jBZw8FAcu03tNLt4q/RO13eh5wGtlU5ewZVWVuWqzJycJ1RCU/PKt2C+Rdiuqv87QcuuuWFubjTj1rIY",
	"UcjYrZx+f9HQb7ayxc3eG4zWm1idn3fKvnSR375CKtCZ3UqG1NnREy212jDOCuyIssa3YEn+Ehu4sHxT",
	"/bhc3o3aV+FACYWW2IBxMzFq4aQfA7mS5NV4QHflR52Cnj5igrnNjgPgMXKxkznaDO/i2I6r9TZCogOD",
	"2ck80vE5GEsoVh2yvL0ubwwdNNU9kwDHoeMlfkajxQsoLf9G6Tet+PqtVnV15+y5P+fU5XC/GG8WKVzf",
	"oA8XclV2PWlXDvaT1Bp/lwU9b5QItAaEHinypVitbfRefKXVb3AnJmdJAYofSGtWuj5D3dkPqnDMxNbm",
	"DkTJdrCWwzm6jfkaX6jaMs6kKgA3vzZpIXPE9xKdvtBXzcZyK+onhGELcNSV89qttq4YemIN7ou2Y8Zz",
	"OqEZosaM+KE0DkTUiqYjv75SAy92bAEgmVp4Zw/vhoKL5OhGZoOY5kXcBL/owFVplYMxUGReJ38QtNCO",
	"rg67B08IOALczMKMYkuubw3s5dVBOC9hl6HTo2H3v/vZPPgd4LXK8vIAYrFNCr19fdoQ6mnT7yO4/uQx",
	"2ZGmjqjWibeOQZRgYQyFR+FkdP/6EA128fZouQKNvjW/KcWHSW5HQA2ovzG93xbauhpx5ffPdCfhuQ2T",
	"XKogWKUGK7mx2SG27Bp1dAluBREnTHFiHHhE8HrJjSV/MCEL1GnSdYLzkBDmphgHePQZ4kb+ObxAhmPn",
	"7h6UpjbNc8TUVaW0hSK1BjRNj871A2ybudQyGrt581jFagOHRh7DUjS+R5Z/AeMf3DaGaG/aHi4OnQvc",
	"Pb9LorIDRIuIfYBchFYRdmN35hFAhGkRTYQjTI9yGh/q+cxYVVWOW9islk2/MTRdUOsz+1PbdkhcZOSg",
	"e7tQYNCA4tt7yK8Js+TIvuaGeTiCrwGqc8hxbQizO4yZETKHbB/l4xPPtYqPwMFDWlcrzQvICij5LuEl",
	"QZ8Zfd43AO54+9xVFjLySE5vekvJwQF0z9AKxzMp4ZHhF5a7I+ieAi2B+N4HRi4Ax04xJ09H95qhcK7k",
	"FoXxcNm01YkR8Ta8UtbtuKcHBNlz9CkAj+ChGfrmqMDOWfv27E/xX2D8BI0ccfwkOzBjS2jHP2oBI7pg",
	"H+wVnZcee+9x4CTbHGVjB/jI2JEdUUy/4tqKXFT41vkOdnf+9OtPkDScswIsFyUULPpAz8Aq7s/Il7Y/",
	"5s2egpN0b0PwB8q3xHKCv1IX+EvY4Zv7FQVpRKqOu3jLJkZ19xOXDAENrt9OBI+bwJbnttw5Qc2uYceu",
	"QQMz9YJcGIb2FKuqLB4gaZ/ZM6O3ziZto3vNxRc4VLS8lNMdvQn2w/em9zDooMO/BSqlygkasgEykhBM",
	"8h1hlXK7LnwcWIgECpTUAdIzbTTNN9f/PdNBM66A/ZeqWc4lPrlqC41MozQKCihAuhmcCNbM6b00WwxB",
	"CRuglyR+efiwv/CHD/2eC8OWcB2CJ13DPjoePkQ9zitlbOdw3YE+1B2388T1gYYrd/H5V0ifpxx2/fIj",
	"T9nJV73BG2uXO1PGeMJ1y781A+idzO2Utcc0Ms3tDcedZMvp+gcN1o37fiE2dcntXVit4IqXmboCrUUB",
	"Bzm5n1go+fUVL39sumFgKOSORnPIcgxnnDgWvHF9KALSjSOkcAeYoh+mAgTn1OuCOh14YrYuu2KzgUJw",
	"C+WOVRpyoMA/JzmaZqknjEIC8jWXK3wwaFWvvJcvjYMMvzakmtG1HAyRFKrsVmao5E5dAN5NLcR+OnEK",
	"uHvS9TXk9IC55s18Ptx3ys0c7UHfYpA0ks1noy9eh9Sr9sVLyOkGsE64DDryXoSfduKJphREnZN9hviK",
	"t8UdJre5v43Kvh06BeVw4sj1uf045v3sntvl7g6EHhqIaag0GLyiYjWVoa9qGQerB1fBnbGwGWryqevf",
	"R47f69H3opKlkJBtlIRdMj+LkPA9fkweJ7wmRzqjwDLWt/8G6cDfA6s7zxRqvC1+cbf7J7RvsTLfKH1X",
	"JlEacLJ4P8ECedDc7qe8qZ2Ul2XCtOhDWfsMwMwbZ12hGTdG5QJltvPCzL1XMFkjfdxrF/2vmgCdOzh7",
	"/XF7NrQ4SwLqiKGsGGd5KVCDrKSxus7tO8lRRxUtNeHEFR7j41rL56FJWk2a0GL6od5Jjg58jeYq6bCx",
	"hISa5huAoLw09WoFxvbeOkuAd9K3EpLVUlica+OOS0bnpQKNnlQn1HLDd2zpaMIq9itoxRa17Ur/GKlt",
	"rChLb9Bz0zC1fCe5ZSVwY9n3Qr7Z4nDB6B+OrAR7rfRlg4X07b4CCUaYLO1s9i19xQAHv/y1D3ZAd3f6",
	"HJxO29QRM7fMTraY/+/+fzx7e5b9N89+fZR9+W+n7z88/fjg4eDHJx//+tf/v/vTZx//+uA//jW1UwH2",
	"VByxh/z8hX8Zn7/A50/kqt+H/ZPp/zdCZkkii705erTF7mPODE9AD7rKMbuGd9JupSOkK16KwvGWm5BD",
	"/4YZnEU6HT2q6WxETxkW1nrko+IWXIYlmEyPNd5Yihr6Z6Yj9tEo6YPw8bwsa0lbGaRvCkgN/mVqOW+y",
	"MlDCtmcMQ/bXPDh5+j+ffP7FbN6G2jffZ/OZ//o+Qcmi2KYSKhSwTb0V4yCJe4ZVfGfAprkHwp50pSPf",
	"jnjYDWwWoM1aVJ+eUxgrFmkOF2K3vM5pK88lOfi784Mmzp23nKjlp4fbaoACKrtOJXLqCGrYqt1NgJ7b",
	"SaXVFcg5Eydw0tf5FO696J36SuDL4JiqlZryGmrOARFaoIoI6/FCJilWUvTTC2/wl7+58+eQHzgFV3/O",
	"lEfvvW+/fsNOPcM09yi3Bw0dZWNIPKV9FGnHIclxszim7J18J1/AErUPSj57Jwtu+emCG5Gb09qA/oqX",
	"XOZwslLsWQhMfcEtfycHktZohskoepxV9aIUObuMHyQteVLWsOEI79695eVKvXv3fuCbMXw++KmS/IUm",
	"yJwgrGqb+ZxHmYZrrlO2L9PkvMGRKanZvllJyFY1KUhDTiU/fprn8aoy/dwXw+VXVemWH5Gh8Zkd3JYx",
	"Y1UTj+YEFB/b7Pb3B+UvBs2vg16lNmDYLxtevRXSvmfZu/rRo88wsq9NBvGLv/IdTe4qmKxdGc3N0Veq",
	"4MLpWYm+6lnFVykT27t3by3wCncf5eUN6jjKkmG3TtRhCDDAodoFNLHeoxtAcBwdJY2Lu6BeIb9legn4",
	"CbewG4l+q/2KEgnceLsOJCPgtV1n7mwnV2UciYedadLerZyQFbwxjFjha9VnCFwAy9eQX/rUbbCp7G7e",
	"6R4cfrygGViHMJTUjyIMMa0UGigWwOqq4F4U53LXz+9jKKICB30Nl7B7o9qsVMck9OnmlzFjBxUpNZIu",
	"HbHGx9aP0d9871UWAk19mhYM3gxk8ayhi9Bn/CCTyHsHhzhFFJ38J2OI4DqBCCL+ERTcYKFuvFuRfmp5",
	"QuYgrbiCDEqxEotUPuL/HNrDAqyOKn0KRu+F3AxomFgy95Rf0MXqn/eayxW469ldqcrwktLLJp028D20",
	"Bq7tArjdq+eXcWaOAB0+Ka8x8ho1fHO3BNi6/RYWNXYSrt2rAhVF1MZ7L5+M+58R4FDcEJ7QvX0pnIy+",
	"dT3qEqkXw63cYLd51nrXvJjOEC76vgHM3aqu3b44KJRPO0rZbaL7pTZ8BSNvl9h6NzExSMfih4MckkiS",
	"Moha9kWNgSSQBJkaZ27NyTMM7os7xPjM7DlkhpnIQOxtRphN3CNsUaIA23iu0t5z3bGiUnrkMdDSrAW0",
	"bEXBAEYXI/FxXHMTjiMmjg1cdpJ09hvmv9mXo+888iWMssM2GfjCbdjnoIN3v8/UF9LzhZx88aN/Qn49",
	"9/bC8IXUdiiJomkBJaxo4dQ4EEqbOardIAfHj8sl8pYs5ZYYKagjAcDPAe7l8pAxso2wySOkyDgCGx0f",
	"cGD2g4rPplwdA6T0ma94GBuviOhvSAf2kaO+E0ZV5S5XMWJvzAMH8KkoWsmi51GNwzAh58yxuSteOjbn",
	"3+LtIINUcfig6CWG8643D8YeGntMU3TlH7UmEhJusppYmg1Ap0XtPRAv1DajCOXkW2SxXTh6T8YuYLx0",
	"6mBSUr57hi3UFt258GohX/kDsIzDEcCIdC9bYZBesd+YnEXA7Jt2v5ybokKDJOMVrQ25jAl6U6YekS3H",
	"yOV+lGfvRgD01FBt0QqvljioPuiKJ8PLvL3V5m3+2BAWljr+Y0couUsj+Bvqx7qZ8f7WZkAcz7IWTtQn",
	"SQk41CzdJlUjda4o/eIxmRr75NABYg9WX/XlwCRau75eXbxGWEuxEsd8h0bJIdoMlICP4KwjmmaXKU8B",
	"95YHvMcvQrdIWYe7x+XuQeRAqGEljIXWaBT8gn4PdTzHPNJKLcdXZyu9dOt7rVRz+ZPZHDt2lvnJV4Ae",
	"+Euhjc3Q4pZcgmv0jUEl0jeuaVoC7booUtUFUaQ5Lk57CbusEGWdplc/73cv3LQ/NBeNqRd4iwlJDloL",
	"rBKSdFzeMzX5tu9d8Eta8Et+Z+uddhpcUzexduTSneNPci56DGwfO0gQYIo4hrs2itI9DDIKOB9yx0ga",
	"jXxaTvZZGwaHqQhjH/RSC2HvYzc/jZRcS5QGMB0hqFYrKEJ6s2APk1ESuVLJVVTOqqr25cw7YZS6DjPP",
	"7Ula593wYcwJPxL3MyEL2Kahj18FCHkbWYcJ93CSFUhKV5JWCyVRE7v4Y4tIV/eJbaH9AICkE/SbnjG7",
	"9U6mXWq2EzegBF74N4mBsL79x3K4IR518zH36U4K2P1HCAdEmhI2qvAyTEMwwoB5VYli2zM80aijSjB+",
	"lHZ5RNpC1uIHO4CBrhN0kuA6OcW9q7VXsJ/im/fUvcrI99o7Fjv65rkPwC9qjRaMjmfzMIF981abuPbv",
	"fr6wSvMVeCtURiDdaghczjFoiNLDG2YFuZMUYrmE2PpibmI56AA30LEXE0g3QWRpE00tpP3iaYqMDlBP",
	"C+NhlKUpJkELYzb5N0MrV5DpI1VScyVEW3MDU1UyXP872GU/87J2jwyhTeue681O3cv3iF2/2nwHOxz5",
	"oNerA+zArqDm6TUgDaY0/c0nE2Xyvmc6tQ7wednZwiN26iy9S3e0Nb46xTjxt7dMp3pDdym3ORitk4SD",
	"ZcpuXKR9E9zpgS7i+6R8aBNEcVgGieT9eCphQi3P4VXU5KI4RLtvgJeBeHE5s4/z2e08AVK3mR/xAK5f",
	"NRdoEs/oaUqW4Y5jz5Eo51Wl1RUvM+8vMXb5a3XlL39sHtwrPvFLJk3Zb74+e/nKg/9xPstL4DprNAGj",
	"q8J21Z9mVVTPYv9VQtm+vaKTNEXR5jcZmWMfi2vM7N1TNg2qw7T+M9FR9D4Xy7TD+0He5119aIl7XH6g",
	"ajx+WpsnOfx0nXz4FRdlMDYGaEec03Fx00oMJblCPMCtnYUin6/sTtnN4HSnT0dLXQd4Es71I6amTL84",
	"pE9ciazIO//wO5eevlG6w/x9ZGLSeei3E6uckE14HPHVDoU8+8LUCSPB65fVL+40PnwYH7WHD+fsl9J/",
	"iADE3xf+d3xfPHyYtB4m1ViOSaCWSvINPGiiLEY34tM+wCVcT7ugz642jWSpxsmwoVDyAgrovvbYu9bC",
	"47PwvxRQgvvpZMojPd50QncMzJQTdDEWidg4mW6odqhhSvZ9qjEI1pEWMntfkoGMscMjJOsNGjAzU4o8",
	"7dohF8axV0nOlK4xw8Yj2lo3Yi1GfHNlLaKxXLMpOVN7QEZzJJFpkmlbW9wtlD/etRT/rIGJwr1qlgI0",
	"3mu9qy48DnDUgUCa1ov5gclO1Q5/Gz3IHntT0AXtU4Lstd+9aGxKYaGp6kdHeoDHMw4Y9x7vbU8fnpop",
	"mm3ddcGc9o6ZUkM+MDpvrBuZI1kTXphsqdWvkDaEoP0okQgjGD4Fqnl/BZny3OuzlMao3Ja2b2c/tN3T",
	"38ZjG3/rt3BYdFN+7SaXafpUH7eRN3n0mnS6Zo/ksUdY7GHQDQ0YYS14vCJnWCyDEryPuKTzRFkgOhFm",
	"6VMZx3Ke0vjtqfQwD+JfS3694KkaMe4t5GCKtrfjJ2UVC53DBpgmxwHNziIP7qatoExyFejWBjHMSnvD",
	"dw1NO/lF0z5gkKLip8uc3BRKoxLD1PKaSyqn7voRv/K9DZAJ3vW6VhrzQJq0S1cBudgk1bHv3r0t8qH7",
	"TiFWgiqF1waiUtR+IEbJJpGKfDnvJnOHR835kj2aR/Xw/W4U4koYsSgBWzymFgtu8LpszOFNF7c8kHZt",
	"sPmTCc3XtSw0FHZtCLFGsebtiUJe45i4AHsNINkjbPf4S3YfXTKNuIIHDoteCJo9e/wlOtTQH49St6yv",
	"9L6PZRfIs4OzdpqO0SeVxnBM0o+a9r5eaoBfYfx22HOaqOuUs4Qt/YVy+CxtuOQrSMdnbA7ARH1xN9Gc",
	"38OLJGsAGKvVjgmbnh8sd/xpJObbsT8Cg+VqsxF24x33jNo4emrrTNOkYTgsRBbqRQW4wkf0f62C+19P",
	"1/WJnzF8MxKzhV7KP6CNNkbrnHFK/lmK1jM9FC5l5yG3MBbQaupmEW7cXG7pKEuio/qSVVpIi/qP2i6z",
	"v7hnsea5Y38nY+Bmiy+eJgpRdWu1yOMA/+R412BAX6VRr0fIPsgsvi+7L5XMNo6jFA/aHAvRqRx11E27",
	"ZI75he4feqrk60bJRsmt7pAbjzj1rQhP7hnwlqTYrOcoejx6ZZ+cMmudJg9eux366fVLL2VslE4VDGiP",
	"u5c4NFgt4Aoj5tKb5Ma85V7octIu3Ab639f/KYickVgWznLyIRBZNPcFyzsp/ufv28znaFilSMSeDlDp",
	"hLbT6+0+sbfhcVq3vv2WHMbw2wjmJqMNRxliZcT7ntzrmz6/h79QHyTa847C8fEvTLs3OMrxDx8i0A8f",
	"zr0Y/MuT7mdi7w8fphMQJ1Vu7tcWC7d5EWPf1B5+pRIKsFC1sHEo8vkREgrIsUvKfXBMcOGHmrNuhbhP",
	"L0XcTXxX2ts0fQrevXuLXwIe8I8+In5nZokb2EYpjB/2boXMJMkUzffIz52zr9R2KuH07qBAPH8AFI2g",
	"ZKJ6DlcyqACaNNcf9BeJaNSNuoBSuUdmXBQo1uf/efDsFj/fg+1alMXPbW633kWiuczXSS/hhev4d5LR",
	"O1cwscpknZE1lxLK5HD0tv17eAMnXun/UFPn2Qg5sW2/Ai0tt7e4FvAumAGoMKFDr7ClmyDGajdtVpOW",
	"oVypguE8bVGLljkOSzmnSmgm4ptx2E1tvd8qxoL7hENLUaIbZtpujC0zze1IAi2sdx7qC7lxsPy4ITUD",
	"jQ6acbHBi9nwTVUCnswr0HyFXZWEXndMoYYjRxUrmKncJ2yJCSsUs7WWTC2X0TJAWqGh3M1ZxY2hQR65",
	"ZcEW5549e/zoUVLthdiZsFLCYljmj+1SHp9iE/riiyxRKYCjgD0M68eWoo7Z2CHh+JqS/6zB2BRPxQ8U",
	"uYpWUndrUz3JpvbpCfsWMx85Iu6kukd1ZUgi3E2oWVel4sUckxu/+frsJaNZqQ+VkKd6livU1nXJP2le",
	"mZ5gNGR2GsmcM32c/ak83KqNzZryk6nchK5FWyBT9HxuUI8XY+eEvSAValPAnyZhmCJbb6CIql3SIx6J",
	"w/3HWp6vUTfZkYDGeeX0QqyBnbWWmyj6sKl+hAzbwe1rsVIp1jlTdg36WhjAiHy4gm46xCY3qNeNh/SI",
	"3eXpWkqilJMjhNGm1tGxaA/AkSQbnAqSkPUQf6RmiuoxH1uX9gJ7pWMxekVue1b/kFwvpNhm33vjQs6l",
	"kiLHUggpSRpTt00zU06oGpG2L5qZP6GJw5UsrdvEAnssjhbbDYzQI25o8o++uk0l6qA/LWx9ybUVWOM5",
	"GxTzUOnaG8SENOCrWTkiivmk0gmnpmQgRONAcSQZYVamEQ3nN+7bD17/jUkxLoVETZdHm3+fkcmqNAIt",
	"05IJy1YKjF9PN5rHvHV9TjBLYwHb9ycv1UrkF2KFY5AbnVs2+YwOhzoLHqTeY9O1fe7a+tz5zc8ddzCa",
	"9Kyq/KTjddCTgqTdylEEp/yWgiNJhNxm/Hi0PeS21/Ub71NHaHCFXmtQ4T08IIymlnZ3lK/d25IoClsw",
	"iqhMJtAVMgHGSyGDCTV9QeTJKwE3Bs/rSD+Ta27p7TCJp70BXo4EQGCEMtngbztUv3KAQwmuMcwxvo1t",
	"GfARxtE0aCV+LncsHApH3ZEw8ZyXjet0oqg3SlVeiCowuKhX5jvFOBzjzkLIZAddB8P3mu5YjePYm2gs",
	"R+GiLlZgM14UqdRWX+FXhl9DkBhsIa+bIlRNdGA3R/mQ2vxEuZKm3uyZKzS45XRR3fwENcS1+8MOY6ad",
	"xQ7/TVVgGt8Z7zR9dFRu8JAujkvMP4wyTkm9jqYzI1bZdEzgnXJ7dLRT34zQ2/53SukhXPcPEY3b43Lx",
	"HqX429fu4ogT9w780+lqafLqoi+4wu8h4VGTEbLLlfAqG9QZQ68H3LzElvWADw2TgF/xciQSPraV0P1K",
	"9oOxePh8NH0Dtz49l+VsLwsaTXlEvsI968vQhDjmH0zuwXdntfBr3YvQcdvddx1LHfmItcxi1EJ3MyNa",
	"u8HHWtG+uxpLkRDqdOD3uB6I9+KZ+zTwcCVUHbyvgg90eBLSrz4FT6fux8j6k5EFv7fVYtTG8sbXr6Vl",
	"+jf5dz+TFZaBtHr3B7C4DDa9X1QmIe2SeqptwprSh5NKIXZuxSk1bFLlUrxsGHRlxFo6tDQoPzMgqxdT",
	"xIEBPj7OZ+fFURdmquTOjEZJHbuXYrW2mLH/b8AL0K8OVCRoqxDgEauUEW0F0tIN5lPArnG4k6nBBo6A",
	"RVxRYThWcEK9gtxi2dnWuU4DHFNfwU0WjD7/W5lg/DndxGT4ggT7qhAMa80euOMHiZOi5F9Up/Nkes79",
	"s8aFmiLArrlp07X0YqYnR24ul5BjVuS9iar+cw0ySoI0D3oZhGUZ5a0STRwT5vU+XuvYArQvj9ReeKL6",
	"OrcGZyyO/RJ29wzrUEOycGgTxHeTxMGIATKBhRzSY4pk7zUmTEMZiIXgEuxTMbfFMUZzPkdp1244VyBJ",
	"d3G0qdj2TJkuej5pLtf1qLSPGJIzlstqWDN5/P3xAktUG+8gx5vEw/ErnZ0PC+dc+8TFmFassZ2EFMZg",
	"wm8hhyDNUopLXz8AsUKWqmuui9DiTpJC0d0k0kAvm5lFG8AxdHJIlGLAWKi8VE6MyMYCyroxE43D4T1D",
	"nqFtAh+EawlaQ9GYREplILMqBHzsg2MfKsj99UZIMKPljwi40dTXr9vc3lgGjmOqa+69XuMFMg0b7qDT",
	"UQbu8Tn3Ifs5fQ9B+KEM2EENU0Ovh+vRhtAdYQZIjKl+yfxteTi4/ybKJiEl6CxYnvrpuGU3Ixvm3Szq",
	"nC7o+GA0CrnJuXP2sJKkniYfrrL3RoiC5C9hd0qPoFDIN+xgDDRJTgR6lHC0t8l3qn4zKbhXdwLe75tH",
	"rlKqzEaMHefDHOJ9ir8U+SVgDsDGxX2kRju7jzr2xpp9vd6FnNlVBRKKByeMnUkKKgqG7W55wd7k8p7d",
	"N/8WZy1qSuvvlWon72Q6OgMT7utbcrMwzH4eZsCxultORYMcyFC9lWMuN9eYnL9bxfNk6qt8aGruV5Fv",
	"iYqgSMkkF2Sxeo4HPaU4whQIUa4ONGRy5i1dzJQq5ct7kzQNbqg0puLJECALckq2gAYKP3gSAcm66IlT",
	"SKnvfNI7tWQaWiPyTbP/DUu4p170/ZmbWbr8bqk0dIqxu96U6bMJfME0mvifhbCa691NcvQNSsgPtCej",
	"WD7ojtV4YrULab2xhjgsS3WdIbPKmjoXqaeta2e6l3Eoutb2c6d6AZFfFzdeUNuxNS9YrrSGPO6Rjvck",
	"qDZKQ1YqdPNKWaCX1sndGwzykqxUK6aqXBVA9WLSFDQ2Vy0lR7EJIq+aJAqIdjBamPpEdDxxSnenkh0p",
	"Q1FrdUTt/Bwocr3N6kSLzsiWOeKxDMZncfIYosZDePfU/k/z5qXYIt2ATh35JbO6hjnzLfo1sv3B5xrY",
	"RhhDoDS0dC3KEgPHxTayvDaOC2nUjoi95+hWeSXQ96abRICk4crdeU1mhZgHXMRpj5hda1Wv1lGC6QbO",
	"8OTVtX8Qx6P8ZGp0j8IIMjfFU7ZRxvqXJo3ULrl1ObufK2m1KsuuUopE9JXXtH/Pt2d5bl8qdbng+eUD",
	"fNdKZZuVFvMQX913Dmxn0r3UYt0LOKNy5odT9VI7dJXzRDuZQfZY3NGF3SMw3x/moId17mfDhfXX1WWm",
	"6WfMmWTcqo3I02fqz+VtN+ojl2JRyZxlVFuRskxgMzzs8WXVOFcgixyiGSRPFoc7Y54ReCMzshv3X5TA",
	"++OyJXhGM3JRDpmLl6KyfFTW6wGAkFLos601FWSMJbGGq6gVpUpAE3kf0Im3Cnoi3Q42N8KdA2XhVkAN",
	"vB8bAO+T8mFOueXIk3KhtuH7gzb53I2A/7ifyjvMY8zF66IlLU1OXiFRzQhHSKe43usP9QbD3hdTvaKa",
	"4rkTb/gIgHE/qQ4Mk7yljgVjyUUJRZaqvXje6Kjm0Uvbh2b1S6IL4zl5zutQ+tCNXWvwiVNIxNdd+1fF",
	"HSmppvlQkywL2ALFdfwKWlFNw3lkf4GSSh72lAGqykq4go77mM/mUqOoKa4g9DVNZ1YAVGiN7OvIUn5R",
	"8V3eU5z4tWeRZ80U7CY1KYRY2il2QE2SVOpsZUbHxEw9Sg6iK1HUvIM/c6zI0VUDuqOcQNXgjZCFd+TU",
	"aX6iEV6HAc5C/5QoEzDxfhofOpoFpVG3jwEd9JOszdipl2k3yThVUWNgwdmKxhBLJN7yDVPxazmukByS",
	"fPvcmrhPQskIsV9vIUepxr93oPAvnhEjhc96gtQuAQp6FbguCW37GiSTKioxec1N81RpcyiGH2hibCSk",
	"f03fwKjcejPefmcZDsZML5na6ENCN3R6c/X873IS9x7E0fFSNGLAh//t0X8F6vbPDmyApbyl208n+2OR",
	"Rn+LeS4+Z4s6DFSW6ppqRsbv0BcQ7KBEfcEE5MVy0VzLwWtz7tN79lUdIvJX3/AdUxr/ca/Of9a8FMsd",
	"8hkCP3RjZs0dCXnDK3kEeC9QN/F+8WoeAAvaFhWmonWLqWNGw+3cKBHQ7iIPxX0U2/BLiLcBnR2If+bW",
	"MU5TL1Bz4a7s3nYOseAXH1K0bHgRv/QxUWS3jHpIHex6/19tLFw8VcjvVpU8DxVCfYmiLp/BKsCBuOwa",
	"NvuDJYd8LZBAU1m4JVodouuLG6hMj2RdqQiEsfIrHbAHFVcHlWdutYyJmt9ejY09YaaTlnLXuzDV62YA",
	"dFyn8RD4cdnKT4P/ZA7XsWVMAf+PgveRQrUxvFST9hNguZOBIwEraasXaptpWJpDDiakrnbPed3m7ggq",
	"ViFzDdyQx835j/7h2aYoFdI9hMkntLFpNqMUsBSyZZZCVrVNvGMwU6ncRQiLlf6I1hET2piU4ITJK17+",
	"eAVai2Js49zpoJKOcYmIYOjwfRMqjOZOHQ4gTPuGw/jMVo0eN3MXOBWhIndNY7ksuC7i5kKyHLS799k1",
	"35mbW5Qa48AhmxKPpJlu1oDIuoSkTYCUO28UvqW9pwGQ36HhZ4LBBv2CE8YaUu1YNWKfGcLwpzDYbPg2",
	"K9UKowhHDoTPTYsWPnoCKolqcJLPpq07zGPEr7B/GkzL7xmRVTjrlCn2n/sfcSvxGfmTFHbvyScdZT+s",
	"k/xu6WAGpMpV6/xPxDI8j6lIXJ98JY7GDcJmCFUJtAfRJsKIfairFx/ZRXSD8GHcsRJ8ermzrqdFKt6X",
	"NAMZagzMHvd+MK0rO8+9e9ZQlTZQNRBS5j5a+khNG+nnw700Ah7VpvdnvTtt4zLjxjmmRtz++OisUlWW",
	"T/H5pModhTcTeEi7MI7QR2QEGFl34x5jmlo2nbxHnaI2x5bJGy2qc8jaVeX7Hv1jaqIRjt41Qagl8jKq",
	"3I7aLYzkaZQp836MWVcN1jAJxpmGvNaoJr7mu8Nlx0YyRl/87ezzx0/+/uTzL5hrwAqxAtNmHe+V7Wr9",
	"AoXs630+rSfgYHk2vQkh+wAhLtgfQ1BVsyn+rBG3NW1K0UHRsmP0y4kLIHEcE+WibrRXOE7r2v/H2q7U",
	"Iu98x1Io+O33TKuyTFd9aOSqhAEltVuRCcW9QCrQRhjrGGHXAips6xFt1qgexNy/V5RNRskcgv7YU4Gw",
	"Iy5XqYWMOdQiP8PYbm81YrCtSs+ryNKzb13+nUYaOhQa0StmAaxSlRftxZKlIMIIIh1F1nrFJ2rEIx/Z",
	"htmSt2yKEL3neZr04oLZ+7l9t5irTXN6t4kJ8SIcyhuQ5ph9YjxvwU04Sava/8Pwj0QihjvjGs1yfwte",
	"kXwf3Kwo/yTQhkH5CfJAAEaibTtxklGgWJSIWJOVAO0JwYDcFz++bw3LB8NCEJLQ4QB4cfhs266JZPDg",
	"/M4Zfb9vkBIt5f0YJXSWfygiN7De5iKJtsgrTawFQ2xJDcXCKNzaPG+imEdeJYNgZ62UZe5lWpaJIGnS",
	"4+CZignHPQn0FS8/Pdf4RmhjzxAfULweD42KI2VjJBMqzc3y9L3kk+aOomLvbmr5CgOz/xPcHiXvOT+U",
	"N8IPbjNU7mDF+lW4FSjWm13jmORk9fgLtvDFNioNuTB94/51EE6awFDQYukdWmFrD0SiHlrnz8regoyX",
	"wROH/RCZtxqbvYewPaK/M1MZOblJKk9R34AsEvhL8ai4OO+B6+KWhRlulvYlSuB2ZNqXYdnhqcuj1Cbu",
	"0qkNDNc5+bbu4DZxUbdrm5qzaHJ9h3fv3trFlFRD6VoMrjvmOrqTogxHlWT4DbIcEY78GH7eFMX8PJb3",
	"lnK7juTm7u1HLcqDDiudTOsf57MVSDDCYC7xv/vaMZ/2Lg0QUOaF4VElWG+TLoYQk1hrZ/JoqiiH+oT0",
	"6b5bIuc1RjXmtRZ2h3WDgwJN/D2Zj+nbJreHzw3T2NL83WfVJTS129tMILUJt+u3ipd4H5GJT7pbSJUn",
	"7GvK8O0Pyl/vLf4dPvvL0+LRZ4//ffGXR58/yuHp518+esS/fMoff/nZY3jyl8+fPoLHyy++XDwpnjx9",
	"snj65OkXn3+Zf/b08eLpF1/++z3HhxzIBGhI7f9s9v9mZ+VKZWevzrM3DtgWJ7wS34HbG3wrLxXWtXRI",
	"zfEkwoaLcvYs/PR/hxN2kqtNO3z4debrM83W1lbm2enp9fX1SdzldIWh/5lVdb4+DfNgtcGOvPLqvPHR",
	"Jz8c3NFWe4yb6knhDL+9/vriDTt7dX7SEszs2ezRyaOTx760teSVmD2bfYY/4elZ476fYn7NU+NT55+2",
	"sVpJu91rdFkPwrleQcHuN1E3/9ZYbs2DELyzFCVeGf8wRIzNKs4LJC5fo3SGVdfQGQvBevLoUdgLL+lE",
	"F84pRn88+zBra9v3hYkBUt+0ACcha2s+Dhf9k7yU6loyTAZIB6jebLje0Qo62IgGx23iK4NKdi2uuIXZ",
	"e9e7j/Oq8gULxlCOVa66pzx0RgJpMt67E0aJ8H3ZAZNC+bBYwi2xvzc55GCyxO5go1cO5pA+p0mo6A1C",
	"HmdoMyaENWeE1A4DRM9nVZ1A59cYWGP24WweJeEnaFRZNBgfYPRV/T8Eo450/d00e/bB/bUGXmJiLffH",
	"xhFqHj5p4MXO/99c89UK9Ilfp/vp6slpeIWcfvAZUz7u+3Yae4SdfugklikO9AweT4eanH4IJbP3D9gp",
	"l+x9TaMOEwHd1+x0gWWypjaFeHXjS0GaN6cf8AE++vup16KOfKTLdewz6kmozWnI3zTSkjJ1pD92MPzB",
	"bt069w/n2kTj5dzm67o6/YD/Qar+SMyghFSiJ6rgwVnbfM6EZXyhNBZotvnaMYtQGVaYqOWAI5y5Xs8J",
	"glBoH72PZs/eDsPDcCAWRkIJxl3PrYDRmamVIdHaEvGMRkLutG/l5LePsi/ff3g8f/zo4784Odj/+fln",
	"Hyc61z9vxmUXjZA7seH7WzLEgUqnXSRtUsPfhm8QTwvj4T9+q3oDsQYZB8o/9oYfPqWQPz+9wyugm5Y4",
	"wf6/4gULWRRw7sefbu5zSS7kTo4lefvjfPb5p1z9uXQkz8sgsd1Qtjujwx8zBeY3OyXbzWdSySjXolyR",
	"FKJSmSxG+I2x/Ab85sL1+l9+02k4MAJimB4pY33t98jthy6TptQdhAS0IfSAF1dc5iFWqw2ewP0iwdwT",
	"RuOfWxtY1mXIUlKVYkkl9ZUqw0SmrirHcZbcNJTlIzbce5qSLDRDs1rmSpJnFQbHBPswJktAG7O5FFWn",
	"i1g6qvLF3ilQ6yRs+j9r0Lt21zfCPYwHT6rW9++3ZOGExztg4d2B7piFPzmSjf75V/w/+9J6+ugvnw6C",
	"kNvojdiAqu2f9dK8oBvsVpeml+GpPMep3cpT9P4+/dB5zfjPg9dM9/e2e9ziaqMKCE8ItVwa1Lzs+3z6",
	"gf6NJoJtBVpsQFLVfv8r3RynWDN+N/x5J/Pkj8N1dNI2j/x8GhSuqUd0t+WHzp/dh6FZ17ZQ11TmNCmv",
	"4PXJS7bhkq8oxr/RUbp70A/QZpRmP1bNReVDexnH6nyqtq0SmSJdfLx/Y+bHG61x9loJiROgvRZn4UvX",
	"lUcXuC+QOVQxXnjIflAFDGWj1EXoYexchs1RSJWifH83ysuI8X487qCgXZmcIoZk5D7Wpv/36TUX1klQ",
	"PrUzYnTY2QIvT30dt96vbemUwResBxP9GCctSP56yrvnoqtgcVs21nGgfUl99RqEkUYh1iZ8bm07sa0E",
	"yaWxkrx973bdgL4KlNSq/p+dnmLw5VoZe4qSaNcsEH9832x0qFDdbLj7ts2UFisheZl5HVpbjHL25OTR",
	"7OP/CQAA//8Ahi3BRRABAA==",
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
