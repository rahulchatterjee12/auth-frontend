"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./utils/token.js":
/*!************************!*\
  !*** ./utils/token.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearTokens: function() { return /* binding */ clearTokens; },\n/* harmony export */   getTokens: function() { return /* binding */ getTokens; },\n/* harmony export */   setTokens: function() { return /* binding */ setTokens; }\n/* harmony export */ });\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ \"(app-pages-browser)/./node_modules/universal-cookie/esm/index.mjs\");\n\nconst cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nfunction setTokens(token) {\n    const options = {\n        path: \"/\",\n        maxAge: 2592000\n    };\n    if (token) {\n        cookies.set(\"token\", token, options);\n    }\n    return getTokens();\n}\nfunction getTokens() {\n    const tokens = {\n        token: cookies.get(\"token\") || null\n    };\n    return tokens;\n}\nfunction clearTokens() {\n    const options = {\n        path: \"/\",\n        maxAge: 2592000\n    };\n    cookies.set(\"token\", \"aksjdfkajsdf;jaskljdf;\", options);\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL3Rva2VuLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFFdkMsTUFBTUMsVUFBVSxJQUFJRCx3REFBT0E7QUFFM0IsU0FBU0UsVUFBVUMsS0FBSztJQUN0QixNQUFNQyxVQUFVO1FBQUVDLE1BQU07UUFBS0MsUUFBUTtJQUFRO0lBQzdDLElBQUlILE9BQU87UUFDVEYsUUFBUU0sR0FBRyxDQUFDLFNBQVNKLE9BQU9DO0lBQzlCO0lBRUEsT0FBT0k7QUFDVDtBQUVBLFNBQVNBO0lBQ1AsTUFBTUMsU0FBUztRQUNiTixPQUFPRixRQUFRUyxHQUFHLENBQUMsWUFBWTtJQUNqQztJQUNBLE9BQU9EO0FBQ1Q7QUFFQSxTQUFTRTtJQUNQLE1BQU1QLFVBQVU7UUFBRUMsTUFBTTtRQUFLQyxRQUFRO0lBQVE7SUFDN0NMLFFBQVFNLEdBQUcsQ0FBQyxTQUFTLDBCQUEwQkg7QUFDakQ7QUFFNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdG9rZW4uanM/ZDEyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xuXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcblxuZnVuY3Rpb24gc2V0VG9rZW5zKHRva2VuKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7IHBhdGg6IFwiL1wiLCBtYXhBZ2U6IDI1OTIwMDAgfTtcbiAgaWYgKHRva2VuKSB7XG4gICAgY29va2llcy5zZXQoXCJ0b2tlblwiLCB0b2tlbiwgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gZ2V0VG9rZW5zKCk7XG59XG5cbmZ1bmN0aW9uIGdldFRva2VucygpIHtcbiAgY29uc3QgdG9rZW5zID0ge1xuICAgIHRva2VuOiBjb29raWVzLmdldChcInRva2VuXCIpIHx8IG51bGwsXG4gIH07XG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVG9rZW5zKCkge1xuICBjb25zdCBvcHRpb25zID0geyBwYXRoOiBcIi9cIiwgbWF4QWdlOiAyNTkyMDAwIH07XG4gIGNvb2tpZXMuc2V0KFwidG9rZW5cIiwgXCJha3NqZGZrYWpzZGY7amFza2xqZGY7XCIsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgeyBzZXRUb2tlbnMsIGdldFRva2VucywgY2xlYXJUb2tlbnMgfTtcbiJdLCJuYW1lcyI6WyJDb29raWVzIiwiY29va2llcyIsInNldFRva2VucyIsInRva2VuIiwib3B0aW9ucyIsInBhdGgiLCJtYXhBZ2UiLCJzZXQiLCJnZXRUb2tlbnMiLCJ0b2tlbnMiLCJnZXQiLCJjbGVhclRva2VucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/token.js\n"));

/***/ })

});