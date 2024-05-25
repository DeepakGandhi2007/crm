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
exports.id = "app/api/tags/get/route";
exports.ids = ["app/api/tags/get/route"];
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

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftags%2Fget%2Froute&page=%2Fapi%2Ftags%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftags%2Fget%2Froute.js&appDir=D%3A%5Cnext%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cnext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftags%2Fget%2Froute&page=%2Fapi%2Ftags%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftags%2Fget%2Froute.js&appDir=D%3A%5Cnext%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cnext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_next_src_app_api_tags_get_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/tags/get/route.js */ \"(rsc)/./src/app/api/tags/get/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tags/get/route\",\n        pathname: \"/api/tags/get\",\n        filename: \"route\",\n        bundlePath: \"app/api/tags/get/route\"\n    },\n    resolvedPagePath: \"D:\\\\next\\\\src\\\\app\\\\api\\\\tags\\\\get\\\\route.js\",\n    nextConfigOutput,\n    userland: D_next_src_app_api_tags_get_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/tags/get/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0YWdzJTJGZ2V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZ0YWdzJTJGZ2V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdGFncyUyRmdldCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDbmV4dCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q25leHQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDSjtBQUN6RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS8/ZGE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxuZXh0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHRhZ3NcXFxcZ2V0XFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90YWdzL2dldC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3RhZ3MvZ2V0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90YWdzL2dldC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXG5leHRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdGFnc1xcXFxnZXRcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdGFncy9nZXQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftags%2Fget%2Froute&page=%2Fapi%2Ftags%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftags%2Fget%2Froute.js&appDir=D%3A%5Cnext%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cnext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/tags/get/route.js":
/*!***************************************!*\
  !*** ./src/app/api/tags/get/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _helpers_getDataFromtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/getDataFromtoken */ \"(rsc)/./src/helpers/getDataFromtoken.js\");\n/* harmony import */ var next_dist_server_web_exports_next_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-request */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-request.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _models_Tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/Tags */ \"(rsc)/./src/models/Tags.js\");\n/* harmony import */ var _dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/dbConfig/dbConfig */ \"(rsc)/./src/dbConfig/dbConfig.js\");\n\n\n\n\n\n(0,_dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nasync function GET(request) {\n    try {\n        const Tags = await _models_Tags__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find();\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            mesaaage: \"Tags found\",\n            data: Tags\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            error: error.message\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90YWdzL2dldC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEQ7QUFDRjtBQUFBO0FBQ2xCO0FBQ0k7QUFFMUNJLDhEQUFPQTtBQUVBLGVBQWVDLElBQUlDLE9BQU87SUFDN0IsSUFBSTtRQUNBLE1BQU1DLE9BQU8sTUFBTUosb0RBQVNBLENBQUNLLElBQUk7UUFDakMsT0FBT04sa0ZBQVlBLENBQUNPLElBQUksQ0FBQztZQUNyQkMsVUFBVTtZQUNWQyxNQUFNSjtRQUNWO0lBRUosRUFDQSxPQUFPSyxPQUFPO1FBQ1YsT0FBT1Ysa0ZBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFRyxPQUFPQSxNQUFNQyxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDckU7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS8uL3NyYy9hcHAvYXBpL3RhZ3MvZ2V0L3JvdXRlLmpzP2M3Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldERhdGFGcm9tVG9rZW4gZnJvbSBcIkAvaGVscGVycy9nZXREYXRhRnJvbXRva2VuXCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgVGFnc01vZGVsIGZyb20gXCJAL21vZGVscy9UYWdzXCI7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiQC9kYkNvbmZpZy9kYkNvbmZpZ1wiO1xuXG5jb25uZWN0KCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IFRhZ3MgPSBhd2FpdCBUYWdzTW9kZWwuZmluZCgpO1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgbWVzYWFhZ2U6IFwiVGFncyBmb3VuZFwiLFxuICAgICAgICAgICAgZGF0YTogVGFnc1xuICAgICAgICB9KVxuXG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNDAwIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJnZXREYXRhRnJvbVRva2VuIiwiTmV4dFJlcXVlc3QiLCJOZXh0UmVzcG9uc2UiLCJUYWdzTW9kZWwiLCJjb25uZWN0IiwiR0VUIiwicmVxdWVzdCIsIlRhZ3MiLCJmaW5kIiwianNvbiIsIm1lc2FhYWdlIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/tags/get/route.js\n");

/***/ }),

/***/ "(rsc)/./src/dbConfig/dbConfig.js":
/*!**********************************!*\
  !*** ./src/dbConfig/dbConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.mongo_url);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.setMaxListeners(15);\n        connection.on(\"connected\", ()=>{\n            console.log(\"connected\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.log(err);\n            process.exit(1);\n        });\n    } catch (e) {\n        console.log(e);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25maWcvZGJDb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRzlCLGVBQWVDO0lBRWIsSUFBRztRQUNDRCx1REFBZ0IsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1FBQ3RDLE1BQU1DLGFBQWFMLDREQUFtQjtRQUN0Q0ssV0FBV0MsZUFBZSxDQUFDO1FBQzNCRCxXQUFXRSxFQUFFLENBQUMsYUFBWTtZQUN0QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO1FBQ0FKLFdBQVdFLEVBQUUsQ0FBQyxTQUFRLENBQUNHO1lBQ25CRixRQUFRQyxHQUFHLENBQUNDO1lBQ1pSLFFBQVFTLElBQUksQ0FBQztRQUNqQjtJQUVKLEVBQ0EsT0FBTUMsR0FBRTtRQUNKSixRQUFRQyxHQUFHLENBQUNHO0lBQ2hCO0FBQ0g7QUFFQSxpRUFBZVgsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS8uL3NyYy9kYkNvbmZpZy9kYkNvbmZpZy5qcz84ZDFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKXtcblxuICAgIHRyeXtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5tb25nb191cmwpO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgICAgICAgY29ubmVjdGlvbi5zZXRNYXhMaXN0ZW5lcnMoMTUpO1xuICAgICAgICBjb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkXCIpO1xuICAgICAgICB9KVxuICAgICAgICBjb25uZWN0aW9uLm9uKCdlcnJvcicsKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuIH1cblxuIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIm1vbmdvX3VybCIsImNvbm5lY3Rpb24iLCJzZXRNYXhMaXN0ZW5lcnMiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJleGl0IiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConfig/dbConfig.js\n");

/***/ }),

/***/ "(rsc)/./src/helpers/getDataFromtoken.js":
/*!*****************************************!*\
  !*** ./src/helpers/getDataFromtoken.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-request */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-request.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getDataFromToken = (request)=>{\n    try {\n        const token = request.cookies.get(\"token\")?.value || \"\";\n        const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, process.env.JWT_SECRET_KEY);\n        console.log(\"decoed\", decodedToken);\n        return decodedToken.id;\n    } catch (error) {\n        console.log(error.message);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataFromToken);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVycy9nZXREYXRhRnJvbXRva2VuLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEM7QUFDWDtBQUU5QixNQUFNRSxtQkFBbUIsQ0FBQ0M7SUFDdkIsSUFBRztRQUNDLE1BQU1DLFFBQVFELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVdDLFNBQVM7UUFDdkQsTUFBTUMsZUFBZVAsMERBQVUsQ0FBQ0csT0FBT00sUUFBUUMsR0FBRyxDQUFDQyxjQUFjO1FBQ2pFQyxRQUFRQyxHQUFHLENBQUMsVUFBU047UUFDckIsT0FBT0EsYUFBYU8sRUFBRTtJQUN6QixFQUNBLE9BQU1DLE9BQU07UUFDUkgsUUFBUUMsR0FBRyxDQUFDRSxNQUFNQyxPQUFPO0lBQzdCO0FBQ0o7QUFDQSxpRUFBZWYsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtLy4vc3JjL2hlbHBlcnMvZ2V0RGF0YUZyb210b2tlbi5qcz83NmZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuIGNvbnN0IGdldERhdGFGcm9tVG9rZW4gPSAocmVxdWVzdCkgPT57XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoXCJ0b2tlblwiKT8uIHZhbHVlIHx8ICcnO1xuICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVRfS0VZKTtcbiAgICAgICBjb25zb2xlLmxvZyhcImRlY29lZFwiLGRlY29kZWRUb2tlbik7XG4gICAgICAgcmV0dXJuIGRlY29kZWRUb2tlbi5pZDtcbiAgICB9XG4gICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBnZXREYXRhRnJvbVRva2VuXG5cblxuIl0sIm5hbWVzIjpbIk5leHRSZXF1ZXN0Iiwiand0IiwiZ2V0RGF0YUZyb21Ub2tlbiIsInJlcXVlc3QiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsImRlY29kZWRUb2tlbiIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/helpers/getDataFromtoken.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Tags.js":
/*!****************************!*\
  !*** ./src/models/Tags.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TagsSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    AddBy: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"Users\"\n    },\n    Tag: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a Tag\"\n        ]\n    },\n    timestamp: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst TagsModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Tags || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Tags\", TagsSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagsModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1RhZ3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FBQztJQUVuQ0csT0FBTztRQUFFQyxNQUFNSix3REFBZSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7UUFBRUMsS0FBSztJQUFRO0lBRTVEQyxLQUFLO1FBQ0RKLE1BQU1LO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO0lBQzVDO0lBQ0FDLFdBQVc7UUFBRVAsTUFBTVE7UUFBTUMsU0FBU0QsS0FBS0UsR0FBRztJQUFDO0FBQy9DO0FBRUEsTUFBTUMsWUFBWWYsd0RBQWUsQ0FBQ2lCLElBQUksSUFBSWpCLHFEQUFjLENBQUMsUUFBUUM7QUFFakUsaUVBQWVjLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcm0vLi9zcmMvbW9kZWxzL1RhZ3MuanM/YmVlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFRhZ3NTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcblxuICAgIEFkZEJ5OiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnVXNlcnMnIH0sXG5cbiAgICBUYWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYSBUYWdcIl0sXG4gICAgfSxcbiAgICB0aW1lc3RhbXA6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcbn0pO1xuXG5jb25zdCBUYWdzTW9kZWwgPSBtb25nb29zZS5tb2RlbHMuVGFncyB8fCBtb25nb29zZS5tb2RlbChcIlRhZ3NcIiwgVGFnc1NjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ3NNb2RlbDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlRhZ3NTY2hlbWEiLCJTY2hlbWEiLCJBZGRCeSIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiVGFnIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsIlRhZ3NNb2RlbCIsIm1vZGVscyIsIlRhZ3MiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Tags.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftags%2Fget%2Froute&page=%2Fapi%2Ftags%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftags%2Fget%2Froute.js&appDir=D%3A%5Cnext%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cnext&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();