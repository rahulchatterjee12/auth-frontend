"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./utils/token.js":
/*!************************!*\
  !*** ./utils/token.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearTokens: function() { return /* binding */ clearTokens; },\n/* harmony export */   getTokens: function() { return /* binding */ getTokens; },\n/* harmony export */   setTokens: function() { return /* binding */ setTokens; }\n/* harmony export */ });\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ \"(app-pages-browser)/./node_modules/universal-cookie/esm/index.mjs\");\n\nconst cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nfunction setTokens(token1) {\n    const options = {\n        path: \"/\",\n        maxAge: 2592000\n    };\n    if (token1) {\n        cookies.set(\"token\", token1, options);\n    }\n    return getTokens();\n}\nfunction getTokens() {\n    const tokens = {\n        token: cookies.get(\"token\") || null\n    };\n    return tokens;\n}\nfunction clearTokens() {\n    const options = {\n        path: \"/\",\n        maxAge: 2592000\n    };\n    if (token) {\n        cookies.set(\"token\", token, options);\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL3Rva2VuLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFFdkMsTUFBTUMsVUFBVSxJQUFJRCx3REFBT0E7QUFFM0IsU0FBU0UsVUFBVUMsTUFBSztJQUN0QixNQUFNQyxVQUFVO1FBQUVDLE1BQU07UUFBS0MsUUFBUTtJQUFRO0lBQzdDLElBQUlILFFBQU87UUFDVEYsUUFBUU0sR0FBRyxDQUFDLFNBQVNKLFFBQU9DO0lBQzlCO0lBRUEsT0FBT0k7QUFDVDtBQUVBLFNBQVNBO0lBQ1AsTUFBTUMsU0FBUztRQUNiTixPQUFPRixRQUFRUyxHQUFHLENBQUMsWUFBWTtJQUNqQztJQUNBLE9BQU9EO0FBQ1Q7QUFFQSxTQUFTRTtJQUNQLE1BQU1QLFVBQVU7UUFBRUMsTUFBTTtRQUFLQyxRQUFRO0lBQVE7SUFDN0MsSUFBSUgsT0FBTztRQUNURixRQUFRTSxHQUFHLENBQUMsU0FBU0osT0FBT0M7SUFDOUI7QUFDRjtBQUU2QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy90b2tlbi5qcz9kMTIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XG5cbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuXG5mdW5jdGlvbiBzZXRUb2tlbnModG9rZW4pIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHsgcGF0aDogXCIvXCIsIG1heEFnZTogMjU5MjAwMCB9O1xuICBpZiAodG9rZW4pIHtcbiAgICBjb29raWVzLnNldChcInRva2VuXCIsIHRva2VuLCBvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBnZXRUb2tlbnMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9rZW5zKCkge1xuICBjb25zdCB0b2tlbnMgPSB7XG4gICAgdG9rZW46IGNvb2tpZXMuZ2V0KFwidG9rZW5cIikgfHwgbnVsbCxcbiAgfTtcbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gY2xlYXJUb2tlbnMoKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7IHBhdGg6IFwiL1wiLCBtYXhBZ2U6IDI1OTIwMDAgfTtcbiAgaWYgKHRva2VuKSB7XG4gICAgY29va2llcy5zZXQoXCJ0b2tlblwiLCB0b2tlbiwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IHsgc2V0VG9rZW5zLCBnZXRUb2tlbnMsIGNsZWFyVG9rZW5zIH07XG4iXSwibmFtZXMiOlsiQ29va2llcyIsImNvb2tpZXMiLCJzZXRUb2tlbnMiLCJ0b2tlbiIsIm9wdGlvbnMiLCJwYXRoIiwibWF4QWdlIiwic2V0IiwiZ2V0VG9rZW5zIiwidG9rZW5zIiwiZ2V0IiwiY2xlYXJUb2tlbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/token.js\n"));

/***/ })

});