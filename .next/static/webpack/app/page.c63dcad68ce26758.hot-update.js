"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Home/index.js":
/*!**********************************!*\
  !*** ./components/Home/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _helper_auth_getUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/auth/getUsers */ \"(app-pages-browser)/./helper/auth/getUsers.js\");\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst index = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (0,_helper_auth_getUsers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((res)=>{\n            setUsers(res.data.data);\n        }).catch((err)=>{\n            router.push(\"/login\");\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            gap: 2,\n            flexWrap: \"wrap\",\n            marginX: 2\n        },\n        children: users ? users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    border: \"1px solid gray\",\n                    borderRadius: \"5px\",\n                    padding: 2,\n                    boxShadow: 1\n                },\n                children: user.firstname + \" \" + user.lastname\n            }, user._id, false, {\n                fileName: \"/home/runway/Desktop/Current Projects/my_projects/aurh-application-fullstack/frontend/components/Home/index.js\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"/home/runway/Desktop/Current Projects/my_projects/aurh-application-fullstack/frontend/components/Home/index.js\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/runway/Desktop/Current Projects/my_projects/aurh-application-fullstack/frontend/components/Home/index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"fEHSTaOKU7eHRpxQHEqt+P9gRSU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSG9tZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDOEM7QUFDVjtBQUNRO0FBQ087QUFFbkQsTUFBTU0sUUFBUTs7SUFDWixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBO0lBQ2xDLE1BQU1JLFNBQVNQLDBEQUFTQTtJQUV4QkUsZ0RBQVNBLENBQUM7UUFDUkosaUVBQVFBLEdBQ0xVLElBQUksQ0FBQyxDQUFDQztZQUNMSCxTQUFTRyxJQUFJQyxJQUFJLENBQUNBLElBQUk7UUFDeEIsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1lBQ05MLE9BQU9NLElBQUksQ0FBQztRQUNkO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNkLCtFQUFHQTtRQUNGZSxJQUFJO1lBQ0ZDLFNBQVM7WUFDVEMsS0FBSztZQUNMQyxVQUFVO1lBQ1ZDLFNBQVM7UUFDWDtrQkFFQ2IsUUFDQ0EsTUFBTWMsR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDckIsK0VBQUdBO2dCQUNGZSxJQUFJO29CQUNGTyxRQUFRO29CQUNSQyxjQUFjO29CQUNkQyxTQUFTO29CQUNUQyxXQUFXO2dCQUNiOzBCQUdDSixLQUFLSyxTQUFTLEdBQUcsTUFBTUwsS0FBS00sUUFBUTtlQUZoQ04sS0FBS08sR0FBRzs7OzsyQ0FNakIsOERBQUNDO3NCQUFFOzs7Ozs7Ozs7OztBQUlYO0dBMUNNeEI7O1FBRVdKLHNEQUFTQTs7O0FBMEMxQiwrREFBZUksS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUvaW5kZXguanM/MmRkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBnZXRVc2VycyBmcm9tIFwiQC9oZWxwZXIvYXV0aC9nZXRVc2Vyc1wiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXNlcnMoKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRVc2VycyhyZXMuZGF0YS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZ2FwOiAyLFxuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgICAgIG1hcmdpblg6IDIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHt1c2VycyA/IChcbiAgICAgICAgdXNlcnMubWFwKCh1c2VyKSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogMixcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAxLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGtleT17dXNlci5faWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3VzZXIuZmlyc3RuYW1lICsgXCIgXCIgKyB1c2VyLmxhc3RuYW1lfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKVxuICAgICAgKSA6IChcbiAgICAgICAgPHA+bG9hZGluZy4uLjwvcD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJuYW1lcyI6WyJnZXRVc2VycyIsIkJveCIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbmRleCIsInVzZXJzIiwic2V0VXNlcnMiLCJyb3V0ZXIiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwicHVzaCIsInN4IiwiZGlzcGxheSIsImdhcCIsImZsZXhXcmFwIiwibWFyZ2luWCIsIm1hcCIsInVzZXIiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiYm94U2hhZG93IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJfaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Home/index.js\n"));

/***/ })

});