"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/login/route";
exports.ids = ["app/api/users/login/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.js&appDir=D%3A%5Cnext%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cnext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.js&appDir=D%3A%5Cnext%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cnext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_next_src_app_api_users_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/login/route.js */ \"(rsc)/./src/app/api/users/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/login/route\",\n        pathname: \"/api/users/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/login/route\"\n    },\n    resolvedPagePath: \"D:\\\\next\\\\src\\\\app\\\\api\\\\users\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: D_next_src_app_api_users_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/users/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRmxvZ2luJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VycyUyRmxvZ2luJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlcnMlMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDbmV4dCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q25leHQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS8/ZjE4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxuZXh0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXGxvZ2luXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2Vycy9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJzL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXG5leHRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxcbG9naW5cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdXNlcnMvbG9naW4vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.js&appDir=D%3A%5Cnext%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cnext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/login/route.js":
/*!******************************************!*\
  !*** ./src/app/api/users/login/route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/dbConfig/dbConfig */ \"(rsc)/./src/dbConfig/dbConfig.js\");\n/* harmony import */ var _models_Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Users */ \"(rsc)/./src/models/Users.js\");\n/* harmony import */ var next_dist_server_web_exports_next_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-request */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-request.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _models_userTimeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/models/userTimeline */ \"(rsc)/./src/models/userTimeline.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node-fetch */ \"(rsc)/./node_modules/node-fetch/lib/index.mjs\");\n/* harmony import */ var request_ip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! request-ip */ \"(rsc)/./node_modules/request-ip/lib/index.js\");\n/* harmony import */ var request_ip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(request_ip__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/headers.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_headers__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n(0,_dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nasync function POST(request) {\n    try {\n        const reqBody = await request.json();\n        const { email, password } = reqBody;\n        console.log(reqBody);\n        const user = await _models_Users__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (!user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json({\n                error: \"User does not exist\"\n            }, {\n                status: 404\n            });\n        }\n        const validPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compare(password, user.password);\n        if (!validPassword) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json({\n                error: \"Incorrect password\"\n            }, {\n                status: 401\n            });\n        }\n        const clientIp = (0,next_headers__WEBPACK_IMPORTED_MODULE_9__.headers)().get(\"x-forwarded-for\");\n        const locationResponse = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(`https://ipinfo.io/${clientIp}/json`);\n        const locationData = await locationResponse.json();\n        if (!locationResponse.ok || locationData.error) {\n            console.error(\"Failed to fetch location data:\", locationData.message);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json({\n                error: \"Failed to fetch location data\"\n            }, {\n                status: 500\n            });\n        }\n        const currentTime = new Date().toLocaleTimeString([], {\n            hour: \"2-digit\",\n            minute: \"2-digit\"\n        });\n        const currentDate = new Date().toLocaleDateString();\n        await _models_userTimeline__WEBPACK_IMPORTED_MODULE_6__[\"default\"].create({\n            userId: user._id,\n            loginTime: new Date(),\n            date: currentDate,\n            location: {\n                city: locationData.city,\n                country: locationData.country,\n                region: locationData.region,\n                zipCode: locationData.postal\n            }\n        });\n        const tokenData = {\n            id: user._id,\n            name: user.username,\n            role: user.Role,\n            email: user.email,\n            avatar: user.avatar ?? null\n        };\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default().sign(tokenData, process.env.JWT_SECRET_KEY, {\n            expiresIn: \"1d\"\n        });\n        const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json({\n            message: \"Login successful\",\n            success: true,\n            token: token\n        });\n        response.cookies.set(\"token\", token, {\n            httpOnly: true\n        });\n        return response;\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtLy4vc3JjL2FwcC9hcGkvdXNlcnMvbG9naW4vcm91dGUuanM/OGE4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdCBmcm9tIFwiQC9kYkNvbmZpZy9kYkNvbmZpZ1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL1VzZXJzXCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCBVc2VyVGltZWxpbmUgZnJvbSBcIkAvbW9kZWxzL3VzZXJUaW1lbGluZVwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5pbXBvcnQgcmVxdWVzdElwIGZyb20gJ3JlcXVlc3QtaXAnXG5pbXBvcnQgeyBoZWFkZXJzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuXG5jb25uZWN0KCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXFCb2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcUJvZHk7XG4gICAgY29uc29sZS5sb2cocmVxQm9keSk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVzZXIgZG9lcyBub3QgZXhpc3RcIiB9LCB7IHN0YXR1czogNDA0IH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHRqcy5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcblxuICAgIGlmICghdmFsaWRQYXNzd29yZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW5jb3JyZWN0IHBhc3N3b3JkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICB9XG4gICAgICBcbiAgIGNvbnN0IGNsaWVudElwID0gICBoZWFkZXJzKCkuZ2V0KFwieC1mb3J3YXJkZWQtZm9yXCIpO1xuICAgIGNvbnN0IGxvY2F0aW9uUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9pcGluZm8uaW8vJHtjbGllbnRJcH0vanNvbmApO1xuICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGxvY2F0aW9uUmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKCFsb2NhdGlvblJlc3BvbnNlLm9rIHx8IGxvY2F0aW9uRGF0YS5lcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBsb2NhdGlvbiBkYXRhOlwiLCBsb2NhdGlvbkRhdGEubWVzc2FnZSk7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggbG9jYXRpb24gZGF0YVwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgXG4gICAgYXdhaXQgVXNlclRpbWVsaW5lLmNyZWF0ZSh7XG4gICAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgICAgbG9naW5UaW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgZGF0ZTogY3VycmVudERhdGUsXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBjaXR5OiBsb2NhdGlvbkRhdGEuY2l0eSxcbiAgICAgICAgY291bnRyeTogbG9jYXRpb25EYXRhLmNvdW50cnksXG4gICAgICAgIHJlZ2lvbjogbG9jYXRpb25EYXRhLnJlZ2lvbixcbiAgICAgICAgemlwQ29kZTogbG9jYXRpb25EYXRhLnBvc3RhbFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdG9rZW5EYXRhID0ge1xuICAgICAgaWQ6IHVzZXIuX2lkLFxuICAgICAgbmFtZTogdXNlci51c2VybmFtZSxcbiAgICAgIHJvbGU6IHVzZXIuUm9sZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgYXZhdGFyOiB1c2VyLmF2YXRhciA/PyBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHRva2VuRGF0YSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVF9LRVksIHsgZXhwaXJlc0luOiBcIjFkXCIgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IFwiTG9naW4gc3VjY2Vzc2Z1bFwiLFxuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHRva2VuOnRva2VuXG4gICAgfSk7XG4gICAgcmVzcG9uc2UuY29va2llcy5zZXQoXCJ0b2tlblwiLCB0b2tlbiwge1xuICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb25uZWN0IiwiVXNlciIsIk5leHRSZXF1ZXN0IiwiTmV4dFJlc3BvbnNlIiwiYmNyeXB0anMiLCJqd3QiLCJVc2VyVGltZWxpbmUiLCJmZXRjaCIsInJlcXVlc3RJcCIsImhlYWRlcnMiLCJQT1NUIiwicmVxdWVzdCIsInJlcUJvZHkiLCJqc29uIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZmluZE9uZSIsImVycm9yIiwic3RhdHVzIiwidmFsaWRQYXNzd29yZCIsImNvbXBhcmUiLCJjbGllbnRJcCIsImdldCIsImxvY2F0aW9uUmVzcG9uc2UiLCJsb2NhdGlvbkRhdGEiLCJvayIsIm1lc3NhZ2UiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwiY3VycmVudERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjcmVhdGUiLCJ1c2VySWQiLCJfaWQiLCJsb2dpblRpbWUiLCJkYXRlIiwibG9jYXRpb24iLCJjaXR5IiwiY291bnRyeSIsInJlZ2lvbiIsInppcENvZGUiLCJwb3N0YWwiLCJ0b2tlbkRhdGEiLCJpZCIsIm5hbWUiLCJ1c2VybmFtZSIsInJvbGUiLCJSb2xlIiwiYXZhdGFyIiwidG9rZW4iLCJzaWduIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVRfS0VZIiwiZXhwaXJlc0luIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiY29va2llcyIsInNldCIsImh0dHBPbmx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/login/route.js\n");

/***/ }),

/***/ "(rsc)/./src/dbConfig/dbConfig.js":
/*!**********************************!*\
  !*** ./src/dbConfig/dbConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.mongo_url);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.setMaxListeners(15);\n        connection.on(\"connected\", ()=>{\n            console.log(\"connected\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.log(err);\n            process.exit(1);\n        });\n    } catch (e) {\n        console.log(e);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25maWcvZGJDb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRzlCLGVBQWVDO0lBRWIsSUFBRztRQUNDRCx1REFBZ0IsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1FBQ3RDLE1BQU1DLGFBQWFMLDREQUFtQjtRQUN0Q0ssV0FBV0MsZUFBZSxDQUFDO1FBQzNCRCxXQUFXRSxFQUFFLENBQUMsYUFBWTtZQUN0QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO1FBQ0FKLFdBQVdFLEVBQUUsQ0FBQyxTQUFRLENBQUNHO1lBQ25CRixRQUFRQyxHQUFHLENBQUNDO1lBQ1pSLFFBQVFTLElBQUksQ0FBQztRQUNqQjtJQUVKLEVBQ0EsT0FBTUMsR0FBRTtRQUNKSixRQUFRQyxHQUFHLENBQUNHO0lBQ2hCO0FBQ0g7QUFFQSxpRUFBZVgsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS8uL3NyYy9kYkNvbmZpZy9kYkNvbmZpZy5qcz84ZDFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKXtcblxuICAgIHRyeXtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5tb25nb191cmwpO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICAgICAgY29ubmVjdGlvbi5zZXRNYXhMaXN0ZW5lcnMoMTUpO1xuICAgICAgICBjb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkXCIpO1xuICAgICAgICB9KVxuICAgICAgICBjb25uZWN0aW9uLm9uKCdlcnJvcicsKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuIH1cblxuIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIm1vbmdvX3VybCIsImNvbm5lY3Rpb24iLCJzZXRNYXhMaXN0ZW5lcnMiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJleGl0IiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConfig/dbConfig.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Users.js":
/*!*****************************!*\
  !*** ./src/models/Users.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UsersSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a username\"\n        ],\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an email\"\n        ],\n        unique: true\n    },\n    personalemail: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an personalemail\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    isAdmin: {\n        type: Boolean,\n        default: false\n    },\n    Phone: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a Phone\"\n        ]\n    },\n    Role: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a Role\"\n        ]\n    },\n    PrentStaff: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a PrentStaff\"\n        ]\n    },\n    Avatar: String,\n    documents: String,\n    onesignalPlayerId: {\n        type: String\n    },\n    forgotPasswordToken: String,\n    forgotPasswordTokenExpiry: Date,\n    verifyToken: String,\n    verifyTokenExpiry: Date\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Users || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Users\", UsersSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjLElBQUlELHdEQUFlLENBQUM7SUFDdENHLFVBQVU7UUFDUkMsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNEI7UUFDN0NDLFFBQVE7SUFDVjtJQUNBQyxPQUFPO1FBQ0xKLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQTBCO1FBQzNDQyxRQUFRO0lBQ1Y7SUFDQUUsZUFBZTtRQUNiTCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUFrQztRQUNuREMsUUFBUTtJQUNWO0lBQ0FHLFVBQVU7UUFDUk4sTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNEI7SUFDL0M7SUFDQUssWUFBWTtRQUNWUCxNQUFNUTtRQUNOQyxTQUFTO0lBQ1g7SUFDQUMsU0FBUztRQUNQVixNQUFNUTtRQUNOQyxTQUFTO0lBQ1g7SUFDQUUsT0FBTztRQUNMWCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF5QjtJQUM1QztJQUNBVSxNQUFNO1FBQ0paLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXdCO0lBQzNDO0lBQ0FXLFlBQVk7UUFDVmIsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBOEI7SUFDakQ7SUFFQVksUUFBUWI7SUFDUmMsV0FBV2Q7SUFDWGUsbUJBQW1CO1FBQ2pCaEIsTUFBTUM7SUFDUjtJQUNBZ0IscUJBQXFCaEI7SUFDckJpQiwyQkFBMkJDO0lBQzNCQyxhQUFhbkI7SUFDYm9CLG1CQUFtQkY7QUFDckI7QUFFQSxNQUFNRyxPQUFPMUIsd0RBQWUsQ0FBQzRCLEtBQUssSUFBSTVCLHFEQUFjLENBQUMsU0FBU0M7QUFFOUQsaUVBQWV5QixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtLy4vc3JjL21vZGVscy9Vc2Vycy5qcz9lYWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgVXNlcnNTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdXNlcm5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgdXNlcm5hbWVcIl0sXG4gICAgdW5pcXVlOiB0cnVlLFxuICB9LFxuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYW4gZW1haWxcIl0sXG4gICAgdW5pcXVlOiB0cnVlLFxuICB9LFxuICBwZXJzb25hbGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSBhbiBwZXJzb25hbGVtYWlsXCJdLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgcGFzc3dvcmRcIl0sXG4gIH0sXG4gIGlzVmVyaWZpZWQ6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBpc0FkbWluOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgUGhvbmU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgUGhvbmVcIl0sXG4gIH0sXG4gIFJvbGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgUm9sZVwiXSxcbiAgfSxcbiAgUHJlbnRTdGFmZjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYSBQcmVudFN0YWZmXCJdLFxuICB9LFxuXG4gIEF2YXRhcjogU3RyaW5nLFxuICBkb2N1bWVudHM6IFN0cmluZyxcbiAgb25lc2lnbmFsUGxheWVySWQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gIH0sXG4gIGZvcmdvdFBhc3N3b3JkVG9rZW46IFN0cmluZyxcbiAgZm9yZ290UGFzc3dvcmRUb2tlbkV4cGlyeTogRGF0ZSxcbiAgdmVyaWZ5VG9rZW46IFN0cmluZyxcbiAgdmVyaWZ5VG9rZW5FeHBpcnk6IERhdGUsXG59KTtcblxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VycyB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJzXCIsIFVzZXJzU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJVc2Vyc1NjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwiZW1haWwiLCJwZXJzb25hbGVtYWlsIiwicGFzc3dvcmQiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJpc0FkbWluIiwiUGhvbmUiLCJSb2xlIiwiUHJlbnRTdGFmZiIsIkF2YXRhciIsImRvY3VtZW50cyIsIm9uZXNpZ25hbFBsYXllcklkIiwiZm9yZ290UGFzc3dvcmRUb2tlbiIsImZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnkiLCJEYXRlIiwidmVyaWZ5VG9rZW4iLCJ2ZXJpZnlUb2tlbkV4cGlyeSIsIlVzZXIiLCJtb2RlbHMiLCJVc2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Users.js\n");

/***/ }),

/***/ "(rsc)/./src/models/userTimeline.js":
/*!************************************!*\
  !*** ./src/models/userTimeline.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userTimelineSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userId: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"Users\"\n    },\n    loginTime: {\n        type: String,\n        required: true\n    },\n    logoutTime: {\n        type: String\n    },\n    date: {\n        type: String,\n        required: true\n    },\n    location: {\n        city: {\n            type: String,\n            required: false\n        },\n        country: {\n            type: String,\n            required: false\n        },\n        region: {\n            type: String,\n            required: false\n        },\n        zipCode: {\n            type: String,\n            required: false\n        }\n    },\n    timestamp: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst UserTimeline = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).UserTimeline || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"UserTimeline\", userTimelineSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserTimeline);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXJUaW1lbGluZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTUMscUJBQXFCLElBQUlELHdEQUFlLENBQUM7SUFDM0NHLFFBQVE7UUFBRUMsTUFBTUosd0RBQWUsQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRO1FBQUVDLEtBQUs7SUFBUTtJQUU3REMsV0FBVztRQUNQSixNQUFNSztRQUNOQyxVQUFVO0lBQ2Q7SUFDQUMsWUFBWTtRQUNSUCxNQUFNSztJQUNWO0lBQ0FHLE1BQU07UUFDRlIsTUFBTUs7UUFDTkMsVUFBVTtJQUNkO0lBQ0FHLFVBQVU7UUFDTkMsTUFBTTtZQUNGVixNQUFNSztZQUNOQyxVQUFVO1FBQ2Q7UUFDQUssU0FBUztZQUNMWCxNQUFNSztZQUNOQyxVQUFVO1FBQ2Q7UUFDQU0sUUFBUTtZQUNKWixNQUFNSztZQUNOQyxVQUFVO1FBQ2Q7UUFDQU8sU0FBUztZQUNMYixNQUFNSztZQUNOQyxVQUFVO1FBQ2Q7SUFDSjtJQUNBUSxXQUFXO1FBQUVkLE1BQU1lO1FBQU1DLFNBQVNELEtBQUtFLEdBQUc7SUFBQztBQUUvQztBQUVBLE1BQU1DLGVBQWV0Qix3REFBZSxDQUFDc0IsWUFBWSxJQUFJdEIscURBQWMsQ0FBQyxnQkFBZ0JDO0FBRXBGLGlFQUFlcUIsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS8uL3NyYy9tb2RlbHMvdXNlclRpbWVsaW5lLmpzPzQzZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuY29uc3QgdXNlclRpbWVsaW5lU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdXNlcklkOiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnVXNlcnMnIH0sXG5cbiAgICBsb2dpblRpbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgbG9nb3V0VGltZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGNpdHk6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBjb3VudHJ5OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgemlwQ29kZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRpbWVzdGFtcDogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9LFxuXG59KTtcblxuY29uc3QgVXNlclRpbWVsaW5lID0gbW9uZ29vc2UubW9kZWxzLlVzZXJUaW1lbGluZSB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJUaW1lbGluZVwiLCB1c2VyVGltZWxpbmVTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyVGltZWxpbmU7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyVGltZWxpbmVTY2hlbWEiLCJTY2hlbWEiLCJ1c2VySWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImxvZ2luVGltZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibG9nb3V0VGltZSIsImRhdGUiLCJsb2NhdGlvbiIsImNpdHkiLCJjb3VudHJ5IiwicmVnaW9uIiwiemlwQ29kZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiVXNlclRpbWVsaW5lIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/userTimeline.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/node-fetch","vendor-chunks/request-ip","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.js&appDir=D%3A%5Cnext%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cnext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();