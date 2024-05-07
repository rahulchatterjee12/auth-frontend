"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/universal-cookie";
exports.ids = ["vendor-chunks/universal-cookie"];
exports.modules = {

/***/ "(ssr)/./node_modules/universal-cookie/esm/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/universal-cookie/esm/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cookies)\n/* harmony export */ });\n/*!\n * cookie\n * Copyright(c) 2012-2014 Roman Shtylman\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n/**\n * Module exports.\n * @public\n */\n\nvar parse_1 = parse;\nvar serialize_1 = serialize;\n\n/**\n * Module variables.\n * @private\n */\n\nvar __toString = Object.prototype.toString;\n\n/**\n * RegExp to match field-content in RFC 7230 sec 3.2\n *\n * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]\n * field-vchar   = VCHAR / obs-text\n * obs-text      = %x80-FF\n */\n\nvar fieldContentRegExp = /^[\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+$/;\n\n/**\n * Parse a cookie header.\n *\n * Parse the given cookie header string into an object\n * The object has the various cookies as keys(names) => values\n *\n * @param {string} str\n * @param {object} [options]\n * @return {object}\n * @public\n */\n\nfunction parse(str, options) {\n  if (typeof str !== 'string') {\n    throw new TypeError('argument str must be a string');\n  }\n\n  var obj = {};\n  var opt = options || {};\n  var dec = opt.decode || decode;\n\n  var index = 0;\n  while (index < str.length) {\n    var eqIdx = str.indexOf('=', index);\n\n    // no more cookie pairs\n    if (eqIdx === -1) {\n      break\n    }\n\n    var endIdx = str.indexOf(';', index);\n\n    if (endIdx === -1) {\n      endIdx = str.length;\n    } else if (endIdx < eqIdx) {\n      // backtrack on prior semicolon\n      index = str.lastIndexOf(';', eqIdx - 1) + 1;\n      continue\n    }\n\n    var key = str.slice(index, eqIdx).trim();\n\n    // only assign once\n    if (undefined === obj[key]) {\n      var val = str.slice(eqIdx + 1, endIdx).trim();\n\n      // quoted values\n      if (val.charCodeAt(0) === 0x22) {\n        val = val.slice(1, -1);\n      }\n\n      obj[key] = tryDecode(val, dec);\n    }\n\n    index = endIdx + 1;\n  }\n\n  return obj;\n}\n\n/**\n * Serialize data into a cookie header.\n *\n * Serialize the a name value pair into a cookie string suitable for\n * http headers. An optional options object specified cookie parameters.\n *\n * serialize('foo', 'bar', { httpOnly: true })\n *   => \"foo=bar; httpOnly\"\n *\n * @param {string} name\n * @param {string} val\n * @param {object} [options]\n * @return {string}\n * @public\n */\n\nfunction serialize(name, val, options) {\n  var opt = options || {};\n  var enc = opt.encode || encode;\n\n  if (typeof enc !== 'function') {\n    throw new TypeError('option encode is invalid');\n  }\n\n  if (!fieldContentRegExp.test(name)) {\n    throw new TypeError('argument name is invalid');\n  }\n\n  var value = enc(val);\n\n  if (value && !fieldContentRegExp.test(value)) {\n    throw new TypeError('argument val is invalid');\n  }\n\n  var str = name + '=' + value;\n\n  if (null != opt.maxAge) {\n    var maxAge = opt.maxAge - 0;\n\n    if (isNaN(maxAge) || !isFinite(maxAge)) {\n      throw new TypeError('option maxAge is invalid')\n    }\n\n    str += '; Max-Age=' + Math.floor(maxAge);\n  }\n\n  if (opt.domain) {\n    if (!fieldContentRegExp.test(opt.domain)) {\n      throw new TypeError('option domain is invalid');\n    }\n\n    str += '; Domain=' + opt.domain;\n  }\n\n  if (opt.path) {\n    if (!fieldContentRegExp.test(opt.path)) {\n      throw new TypeError('option path is invalid');\n    }\n\n    str += '; Path=' + opt.path;\n  }\n\n  if (opt.expires) {\n    var expires = opt.expires;\n\n    if (!isDate(expires) || isNaN(expires.valueOf())) {\n      throw new TypeError('option expires is invalid');\n    }\n\n    str += '; Expires=' + expires.toUTCString();\n  }\n\n  if (opt.httpOnly) {\n    str += '; HttpOnly';\n  }\n\n  if (opt.secure) {\n    str += '; Secure';\n  }\n\n  if (opt.partitioned) {\n    str += '; Partitioned';\n  }\n\n  if (opt.priority) {\n    var priority = typeof opt.priority === 'string'\n      ? opt.priority.toLowerCase()\n      : opt.priority;\n\n    switch (priority) {\n      case 'low':\n        str += '; Priority=Low';\n        break\n      case 'medium':\n        str += '; Priority=Medium';\n        break\n      case 'high':\n        str += '; Priority=High';\n        break\n      default:\n        throw new TypeError('option priority is invalid')\n    }\n  }\n\n  if (opt.sameSite) {\n    var sameSite = typeof opt.sameSite === 'string'\n      ? opt.sameSite.toLowerCase() : opt.sameSite;\n\n    switch (sameSite) {\n      case true:\n        str += '; SameSite=Strict';\n        break;\n      case 'lax':\n        str += '; SameSite=Lax';\n        break;\n      case 'strict':\n        str += '; SameSite=Strict';\n        break;\n      case 'none':\n        str += '; SameSite=None';\n        break;\n      default:\n        throw new TypeError('option sameSite is invalid');\n    }\n  }\n\n  return str;\n}\n\n/**\n * URL-decode string value. Optimized to skip native call when no %.\n *\n * @param {string} str\n * @returns {string}\n */\n\nfunction decode (str) {\n  return str.indexOf('%') !== -1\n    ? decodeURIComponent(str)\n    : str\n}\n\n/**\n * URL-encode value.\n *\n * @param {string} val\n * @returns {string}\n */\n\nfunction encode (val) {\n  return encodeURIComponent(val)\n}\n\n/**\n * Determine if value is a Date.\n *\n * @param {*} val\n * @private\n */\n\nfunction isDate (val) {\n  return __toString.call(val) === '[object Date]' ||\n    val instanceof Date\n}\n\n/**\n * Try decoding a string using a decoding function.\n *\n * @param {string} str\n * @param {function} decode\n * @private\n */\n\nfunction tryDecode(str, decode) {\n  try {\n    return decode(str);\n  } catch (e) {\n    return str;\n  }\n}\n\nfunction hasDocumentCookie() {\n    const testingValue = typeof global === 'undefined'\n        ? undefined\n        : global.TEST_HAS_DOCUMENT_COOKIE;\n    if (typeof testingValue === 'boolean') {\n        return testingValue;\n    }\n    // Can we get/set cookies on document.cookie?\n    return typeof document === 'object' && typeof document.cookie === 'string';\n}\nfunction parseCookies(cookies) {\n    if (typeof cookies === 'string') {\n        return parse_1(cookies);\n    }\n    else if (typeof cookies === 'object' && cookies !== null) {\n        return cookies;\n    }\n    else {\n        return {};\n    }\n}\nfunction readCookie(value, options = {}) {\n    const cleanValue = cleanupCookieValue(value);\n    if (!options.doNotParse) {\n        try {\n            return JSON.parse(cleanValue);\n        }\n        catch (e) {\n            // At least we tried\n        }\n    }\n    // Ignore clean value if we failed the deserialization\n    // It is not relevant anymore to trim those values\n    return value;\n}\nfunction cleanupCookieValue(value) {\n    // express prepend j: before serializing a cookie\n    if (value && value[0] === 'j' && value[1] === ':') {\n        return value.substr(2);\n    }\n    return value;\n}\n\nclass Cookies {\n    constructor(cookies, defaultSetOptions = {}) {\n        this.changeListeners = [];\n        this.HAS_DOCUMENT_COOKIE = false;\n        this.update = () => {\n            if (!this.HAS_DOCUMENT_COOKIE) {\n                return;\n            }\n            const previousCookies = this.cookies;\n            this.cookies = parse_1(document.cookie);\n            this._checkChanges(previousCookies);\n        };\n        const domCookies = typeof document === 'undefined' ? '' : document.cookie;\n        this.cookies = parseCookies(cookies || domCookies);\n        this.defaultSetOptions = defaultSetOptions;\n        this.HAS_DOCUMENT_COOKIE = hasDocumentCookie();\n    }\n    _emitChange(params) {\n        for (let i = 0; i < this.changeListeners.length; ++i) {\n            this.changeListeners[i](params);\n        }\n    }\n    _checkChanges(previousCookies) {\n        const names = new Set(Object.keys(previousCookies).concat(Object.keys(this.cookies)));\n        names.forEach((name) => {\n            if (previousCookies[name] !== this.cookies[name]) {\n                this._emitChange({\n                    name,\n                    value: readCookie(this.cookies[name]),\n                });\n            }\n        });\n    }\n    _startPolling() {\n        this.pollingInterval = setInterval(this.update, 300);\n    }\n    _stopPolling() {\n        if (this.pollingInterval) {\n            clearInterval(this.pollingInterval);\n        }\n    }\n    get(name, options = {}) {\n        if (!options.doNotUpdate) {\n            this.update();\n        }\n        return readCookie(this.cookies[name], options);\n    }\n    getAll(options = {}) {\n        if (!options.doNotUpdate) {\n            this.update();\n        }\n        const result = {};\n        for (let name in this.cookies) {\n            result[name] = readCookie(this.cookies[name], options);\n        }\n        return result;\n    }\n    set(name, value, options) {\n        if (options) {\n            options = Object.assign(Object.assign({}, this.defaultSetOptions), options);\n        }\n        else {\n            options = this.defaultSetOptions;\n        }\n        const stringValue = typeof value === 'string' ? value : JSON.stringify(value);\n        this.cookies = Object.assign(Object.assign({}, this.cookies), { [name]: stringValue });\n        if (this.HAS_DOCUMENT_COOKIE) {\n            document.cookie = serialize_1(name, stringValue, options);\n        }\n        this._emitChange({ name, value, options });\n    }\n    remove(name, options) {\n        const finalOptions = (options = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), options), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 }));\n        this.cookies = Object.assign({}, this.cookies);\n        delete this.cookies[name];\n        if (this.HAS_DOCUMENT_COOKIE) {\n            document.cookie = serialize_1(name, '', finalOptions);\n        }\n        this._emitChange({ name, value: undefined, options });\n    }\n    addChangeListener(callback) {\n        this.changeListeners.push(callback);\n        if (this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 1) {\n            if (typeof window === 'object' && 'cookieStore' in window) {\n                window.cookieStore.addEventListener('change', this.update);\n            }\n            else {\n                this._startPolling();\n            }\n        }\n    }\n    removeChangeListener(callback) {\n        const idx = this.changeListeners.indexOf(callback);\n        if (idx >= 0) {\n            this.changeListeners.splice(idx, 1);\n        }\n        if (this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 0) {\n            if (typeof window === 'object' && 'cookieStore' in window) {\n                window.cookieStore.removeEventListener('change', this.update);\n            }\n            else {\n                this._stopPolling();\n            }\n        }\n    }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsLWNvb2tpZS9lc20vaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0Msa0JBQWtCO0FBQ2xCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELG1CQUFtQixxQkFBcUI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0Esb0ZBQW9GLHVDQUF1QyxtREFBbUQ7QUFDOUssdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlDQUFpQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXV0aC8uL25vZGVfbW9kdWxlcy91bml2ZXJzYWwtY29va2llL2VzbS9pbmRleC5tanM/ZGE1NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGNvb2tpZVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBSb21hbiBTaHR5bG1hblxuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxudmFyIHBhcnNlXzEgPSBwYXJzZTtcbnZhciBzZXJpYWxpemVfMSA9IHNlcmlhbGl6ZTtcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgX190b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIGZpZWxkLWNvbnRlbnQgaW4gUkZDIDcyMzAgc2VjIDMuMlxuICpcbiAqIGZpZWxkLWNvbnRlbnQgPSBmaWVsZC12Y2hhciBbIDEqKCBTUCAvIEhUQUIgKSBmaWVsZC12Y2hhciBdXG4gKiBmaWVsZC12Y2hhciAgID0gVkNIQVIgLyBvYnMtdGV4dFxuICogb2JzLXRleHQgICAgICA9ICV4ODAtRkZcbiAqL1xuXG52YXIgZmllbGRDb250ZW50UmVnRXhwID0gL15bXFx1MDAwOVxcdTAwMjAtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl0rJC87XG5cbi8qKlxuICogUGFyc2UgYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFBhcnNlIHRoZSBnaXZlbiBjb29raWUgaGVhZGVyIHN0cmluZyBpbnRvIGFuIG9iamVjdFxuICogVGhlIG9iamVjdCBoYXMgdGhlIHZhcmlvdXMgY29va2llcyBhcyBrZXlzKG5hbWVzKSA9PiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICB2YXIgb2JqID0ge307XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgZGVjID0gb3B0LmRlY29kZSB8fCBkZWNvZGU7XG5cbiAgdmFyIGluZGV4ID0gMDtcbiAgd2hpbGUgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIHZhciBlcUlkeCA9IHN0ci5pbmRleE9mKCc9JywgaW5kZXgpO1xuXG4gICAgLy8gbm8gbW9yZSBjb29raWUgcGFpcnNcbiAgICBpZiAoZXFJZHggPT09IC0xKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHZhciBlbmRJZHggPSBzdHIuaW5kZXhPZignOycsIGluZGV4KTtcblxuICAgIGlmIChlbmRJZHggPT09IC0xKSB7XG4gICAgICBlbmRJZHggPSBzdHIubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoZW5kSWR4IDwgZXFJZHgpIHtcbiAgICAgIC8vIGJhY2t0cmFjayBvbiBwcmlvciBzZW1pY29sb25cbiAgICAgIGluZGV4ID0gc3RyLmxhc3RJbmRleE9mKCc7JywgZXFJZHggLSAxKSArIDE7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBrZXkgPSBzdHIuc2xpY2UoaW5kZXgsIGVxSWR4KS50cmltKCk7XG5cbiAgICAvLyBvbmx5IGFzc2lnbiBvbmNlXG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gb2JqW2tleV0pIHtcbiAgICAgIHZhciB2YWwgPSBzdHIuc2xpY2UoZXFJZHggKyAxLCBlbmRJZHgpLnRyaW0oKTtcblxuICAgICAgLy8gcXVvdGVkIHZhbHVlc1xuICAgICAgaWYgKHZhbC5jaGFyQ29kZUF0KDApID09PSAweDIyKSB7XG4gICAgICAgIHZhbCA9IHZhbC5zbGljZSgxLCAtMSk7XG4gICAgICB9XG5cbiAgICAgIG9ialtrZXldID0gdHJ5RGVjb2RlKHZhbCwgZGVjKTtcbiAgICB9XG5cbiAgICBpbmRleCA9IGVuZElkeCArIDE7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBkYXRhIGludG8gYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFNlcmlhbGl6ZSB0aGUgYSBuYW1lIHZhbHVlIHBhaXIgaW50byBhIGNvb2tpZSBzdHJpbmcgc3VpdGFibGUgZm9yXG4gKiBodHRwIGhlYWRlcnMuIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHNwZWNpZmllZCBjb29raWUgcGFyYW1ldGVycy5cbiAqXG4gKiBzZXJpYWxpemUoJ2ZvbycsICdiYXInLCB7IGh0dHBPbmx5OiB0cnVlIH0pXG4gKiAgID0+IFwiZm9vPWJhcjsgaHR0cE9ubHlcIlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG5hbWUsIHZhbCwgb3B0aW9ucykge1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGVuYyA9IG9wdC5lbmNvZGUgfHwgZW5jb2RlO1xuXG4gIGlmICh0eXBlb2YgZW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGVuY29kZSBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgbmFtZSBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICB2YXIgdmFsdWUgPSBlbmModmFsKTtcblxuICBpZiAodmFsdWUgJiYgIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHZhbCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICB2YXIgc3RyID0gbmFtZSArICc9JyArIHZhbHVlO1xuXG4gIGlmIChudWxsICE9IG9wdC5tYXhBZ2UpIHtcbiAgICB2YXIgbWF4QWdlID0gb3B0Lm1heEFnZSAtIDA7XG5cbiAgICBpZiAoaXNOYU4obWF4QWdlKSB8fCAhaXNGaW5pdGUobWF4QWdlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIG1heEFnZSBpcyBpbnZhbGlkJylcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgTWF4LUFnZT0nICsgTWF0aC5mbG9vcihtYXhBZ2UpO1xuICB9XG5cbiAgaWYgKG9wdC5kb21haW4pIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5kb21haW4pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZG9tYWluIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgRG9tYWluPScgKyBvcHQuZG9tYWluO1xuICB9XG5cbiAgaWYgKG9wdC5wYXRoKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQucGF0aCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBwYXRoIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgUGF0aD0nICsgb3B0LnBhdGg7XG4gIH1cblxuICBpZiAob3B0LmV4cGlyZXMpIHtcbiAgICB2YXIgZXhwaXJlcyA9IG9wdC5leHBpcmVzO1xuXG4gICAgaWYgKCFpc0RhdGUoZXhwaXJlcykgfHwgaXNOYU4oZXhwaXJlcy52YWx1ZU9mKCkpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZXhwaXJlcyBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IEV4cGlyZXM9JyArIGV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgfVxuXG4gIGlmIChvcHQuaHR0cE9ubHkpIHtcbiAgICBzdHIgKz0gJzsgSHR0cE9ubHknO1xuICB9XG5cbiAgaWYgKG9wdC5zZWN1cmUpIHtcbiAgICBzdHIgKz0gJzsgU2VjdXJlJztcbiAgfVxuXG4gIGlmIChvcHQucGFydGl0aW9uZWQpIHtcbiAgICBzdHIgKz0gJzsgUGFydGl0aW9uZWQnO1xuICB9XG5cbiAgaWYgKG9wdC5wcmlvcml0eSkge1xuICAgIHZhciBwcmlvcml0eSA9IHR5cGVvZiBvcHQucHJpb3JpdHkgPT09ICdzdHJpbmcnXG4gICAgICA/IG9wdC5wcmlvcml0eS50b0xvd2VyQ2FzZSgpXG4gICAgICA6IG9wdC5wcmlvcml0eTtcblxuICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgIHN0ciArPSAnOyBQcmlvcml0eT1Mb3cnO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgc3RyICs9ICc7IFByaW9yaXR5PU1lZGl1bSc7XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgc3RyICs9ICc7IFByaW9yaXR5PUhpZ2gnO1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHByaW9yaXR5IGlzIGludmFsaWQnKVxuICAgIH1cbiAgfVxuXG4gIGlmIChvcHQuc2FtZVNpdGUpIHtcbiAgICB2YXIgc2FtZVNpdGUgPSB0eXBlb2Ygb3B0LnNhbWVTaXRlID09PSAnc3RyaW5nJ1xuICAgICAgPyBvcHQuc2FtZVNpdGUudG9Mb3dlckNhc2UoKSA6IG9wdC5zYW1lU2l0ZTtcblxuICAgIHN3aXRjaCAoc2FtZVNpdGUpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPVN0cmljdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGF4JzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPUxheCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaWN0JzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPVN0cmljdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1Ob25lJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gc2FtZVNpdGUgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogVVJMLWRlY29kZSBzdHJpbmcgdmFsdWUuIE9wdGltaXplZCB0byBza2lwIG5hdGl2ZSBjYWxsIHdoZW4gbm8gJS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGRlY29kZSAoc3RyKSB7XG4gIHJldHVybiBzdHIuaW5kZXhPZignJScpICE9PSAtMVxuICAgID8gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICA6IHN0clxufVxuXG4vKipcbiAqIFVSTC1lbmNvZGUgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBlbmNvZGUgKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbClcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgdmFsdWUgaXMgYSBEYXRlLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzRGF0ZSAodmFsKSB7XG4gIHJldHVybiBfX3RvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nIHx8XG4gICAgdmFsIGluc3RhbmNlb2YgRGF0ZVxufVxuXG4vKipcbiAqIFRyeSBkZWNvZGluZyBhIHN0cmluZyB1c2luZyBhIGRlY29kaW5nIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRlY29kZVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0cnlEZWNvZGUoc3RyLCBkZWNvZGUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlKHN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc0RvY3VtZW50Q29va2llKCkge1xuICAgIGNvbnN0IHRlc3RpbmdWYWx1ZSA9IHR5cGVvZiBnbG9iYWwgPT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogZ2xvYmFsLlRFU1RfSEFTX0RPQ1VNRU5UX0NPT0tJRTtcbiAgICBpZiAodHlwZW9mIHRlc3RpbmdWYWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiB0ZXN0aW5nVmFsdWU7XG4gICAgfVxuICAgIC8vIENhbiB3ZSBnZXQvc2V0IGNvb2tpZXMgb24gZG9jdW1lbnQuY29va2llP1xuICAgIHJldHVybiB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBkb2N1bWVudC5jb29raWUgPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gcGFyc2VDb29raWVzKGNvb2tpZXMpIHtcbiAgICBpZiAodHlwZW9mIGNvb2tpZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZV8xKGNvb2tpZXMpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29va2llcyA9PT0gJ29iamVjdCcgJiYgY29va2llcyAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29va2llcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5mdW5jdGlvbiByZWFkQ29va2llKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBjbGVhblZhbHVlID0gY2xlYW51cENvb2tpZVZhbHVlKHZhbHVlKTtcbiAgICBpZiAoIW9wdGlvbnMuZG9Ob3RQYXJzZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY2xlYW5WYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIEF0IGxlYXN0IHdlIHRyaWVkXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWdub3JlIGNsZWFuIHZhbHVlIGlmIHdlIGZhaWxlZCB0aGUgZGVzZXJpYWxpemF0aW9uXG4gICAgLy8gSXQgaXMgbm90IHJlbGV2YW50IGFueW1vcmUgdG8gdHJpbSB0aG9zZSB2YWx1ZXNcbiAgICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjbGVhbnVwQ29va2llVmFsdWUodmFsdWUpIHtcbiAgICAvLyBleHByZXNzIHByZXBlbmQgajogYmVmb3JlIHNlcmlhbGl6aW5nIGEgY29va2llXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlWzBdID09PSAnaicgJiYgdmFsdWVbMV0gPT09ICc6Jykge1xuICAgICAgICByZXR1cm4gdmFsdWUuc3Vic3RyKDIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmNsYXNzIENvb2tpZXMge1xuICAgIGNvbnN0cnVjdG9yKGNvb2tpZXMsIGRlZmF1bHRTZXRPcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0Nvb2tpZXMgPSB0aGlzLmNvb2tpZXM7XG4gICAgICAgICAgICB0aGlzLmNvb2tpZXMgPSBwYXJzZV8xKGRvY3VtZW50LmNvb2tpZSk7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0NoYW5nZXMocHJldmlvdXNDb29raWVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZG9tQ29va2llcyA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IGRvY3VtZW50LmNvb2tpZTtcbiAgICAgICAgdGhpcy5jb29raWVzID0gcGFyc2VDb29raWVzKGNvb2tpZXMgfHwgZG9tQ29va2llcyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNldE9wdGlvbnMgPSBkZWZhdWx0U2V0T3B0aW9ucztcbiAgICAgICAgdGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFID0gaGFzRG9jdW1lbnRDb29raWUoKTtcbiAgICB9XG4gICAgX2VtaXRDaGFuZ2UocGFyYW1zKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzW2ldKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NoZWNrQ2hhbmdlcyhwcmV2aW91c0Nvb2tpZXMpIHtcbiAgICAgICAgY29uc3QgbmFtZXMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKHByZXZpb3VzQ29va2llcykuY29uY2F0KE9iamVjdC5rZXlzKHRoaXMuY29va2llcykpKTtcbiAgICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzQ29va2llc1tuYW1lXSAhPT0gdGhpcy5jb29raWVzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdENoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZWFkQ29va2llKHRoaXMuY29va2llc1tuYW1lXSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc3RhcnRQb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnBvbGxpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlLCAzMDApO1xuICAgIH1cbiAgICBfc3RvcFBvbGxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvbGxpbmdJbnRlcnZhbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxpbmdJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0KG5hbWUsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAoIW9wdGlvbnMuZG9Ob3RVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWRDb29raWUodGhpcy5jb29raWVzW25hbWVdLCBvcHRpb25zKTtcbiAgICB9XG4gICAgZ2V0QWxsKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAoIW9wdGlvbnMuZG9Ob3RVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5jb29raWVzKSB7XG4gICAgICAgICAgICByZXN1bHRbbmFtZV0gPSByZWFkQ29va2llKHRoaXMuY29va2llc1tuYW1lXSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgc2V0KG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRTZXRPcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5kZWZhdWx0U2V0T3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgdGhpcy5jb29raWVzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvb2tpZXMpLCB7IFtuYW1lXTogc3RyaW5nVmFsdWUgfSk7XG4gICAgICAgIGlmICh0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHNlcmlhbGl6ZV8xKG5hbWUsIHN0cmluZ1ZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbWl0Q2hhbmdlKHsgbmFtZSwgdmFsdWUsIG9wdGlvbnMgfSk7XG4gICAgfVxuICAgIHJlbW92ZShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsT3B0aW9ucyA9IChvcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFNldE9wdGlvbnMpLCBvcHRpb25zKSwgeyBleHBpcmVzOiBuZXcgRGF0ZSgxOTcwLCAxLCAxLCAwLCAwLCAxKSwgbWF4QWdlOiAwIH0pKTtcbiAgICAgICAgdGhpcy5jb29raWVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb29raWVzKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29va2llc1tuYW1lXTtcbiAgICAgICAgaWYgKHRoaXMuSEFTX0RPQ1VNRU5UX0NPT0tJRSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gc2VyaWFsaXplXzEobmFtZSwgJycsIGZpbmFsT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZW1pdENoYW5nZSh7IG5hbWUsIHZhbHVlOiB1bmRlZmluZWQsIG9wdGlvbnMgfSk7XG4gICAgfVxuICAgIGFkZENoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICBpZiAodGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFICYmIHRoaXMuY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICdjb29raWVTdG9yZScgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNvb2tpZVN0b3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0UG9sbGluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuY2hhbmdlTGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUgJiYgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgJ2Nvb2tpZVN0b3JlJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY29va2llU3RvcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy51cGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcFBvbGxpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgQ29va2llcyBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/universal-cookie/esm/index.mjs\n");

/***/ })

};
;