/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* start of my CSS*/\nhtml, body {\n    height: 100%;\n    width:100%;\n    background-color: #d3d3d3;\n\n}\n\n.winnerAnnouncement {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 20px;\n    font-size: 35px;\n    margin-bottom: 150px\n}\n.mainGame {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    width: 100%;\n    \n}\n.gameContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.gameContainer div:first-of-type {\n    margin-bottom: 35px;\n    }\n\n.gameBoard {\n    width: 50%;\n    position: relative;\n}\n.gameBoard:after {\n    content: \"\"; \n    display: block; \n    padding-top: 100%;\n}\n\n.gameBoardBody {\n    position: absolute; \n    width: 100%; \n    height: 100%;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    row-gap: 4px;\n\n}\n.gameBoardBody tr td {\n    height: 100%;\n    width: 100%;\n    border: 1px black solid;\n    \n}\n\n.gameBoardBody tr td:hover {\n    border: 1px teal solid;\n    background-color: #b6b6b6\n}\n.gameboardOneRows {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    column-gap: 4px;\n}\n.gameboardTwoRows {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    column-gap: 4px;\n}\n\n\n.gameboardTwoRows {\n    display: flex;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleships/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleships/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction Gameboard() {\n\n    // eslint-disable-next-line prefer-const\n    let coordinateArray = []\n\n    function createCoordinates() {\n        for (let i = 0; i < 100; i++) {\n            coordinateArray.push(0)\n        }\n    }\n    createCoordinates()\n\n    return {\n        coordinateList: coordinateArray,\n        shipList: [],\n        // I will need to update this to placeShip Horizontal and add a new functin for vertical placement later.\n        placeShip(ship, x, y) {\n            const coordMath = y*10+x\n            let availableSpaces = 0\n            \n            // This ensures you cannot place a ship past the boundaries\n            if((x + ship.length > 10) ) {\n                console.log(`Placed ${ship.name} unsuccessfully`)\n                return false\n            } \n\n            // This checks available spots\n            for (let i = 0; i < ship.length; i++) {\n                if (this.coordinateList[coordMath+i] == 0) {\n                    availableSpaces = availableSpaces+1\n                }\n            }\n\n            if (availableSpaces == ship.length) {\n                for (let i = 0; i < ship.length; i++) {\n                    this.coordinateList[coordMath+i] = [ship]\n                }\n                this.shipList.push(ship)\n                console.log(`Placed ${ship.name} successfully`) \n                \n                // this.revealShips(ship, x, y)\n                return true\n            } else { \n                console.log(`Placed ${ship.name} unsuccessfully`)\n\n                return false }         \n        },\n        receiveAttack(x,y){\n            const coordMath = y*10+x\n            const coordList = this.coordinateList[coordMath];\n            if (coordList == 0) {\n                this.coordinateList[coordMath] = 'Miss'\n                return 'Miss'\n    }   else if (coordList[0].sunk == false && !coordList.includes('Hit')) {\n            coordList.push('Hit')\n            coordList[0].hit()\n            this.loseCondition(this.shipList)\n\n            return 'Hit'\n            }\n        else if(coordList.includes('Hit')){\n            return 'Forbidden'}\n        },\n        loseCondition(array){\n            console.log('test')\n            let sunkenShips = 0\n            for (let I = 0; I < array.length; I++) {\n                if (array[I].sunk) {\n                    sunkenShips += 1\n                }\n            }\n             if (sunkenShips == array.length) {\n                return true\n             } else {\n                return false\n             }\n            },\n        revealShipPlacement(player,ship,x,y){\n                // First locate the square with y coordinate below\n                const row = document.querySelectorAll(`[data-y=\"${y}\"]`);\n                // Then verify it belongs to the X coordinate below\n                // this won't work because it has multiple Y's selected need to verify the\n                // person it's using\n                // Then, for that specific square, perform the following code.\n                \n                    if (player==\"human\"){\n                    for (let I = 0; I < ship.length; I++) {\n                        const square = row[0].querySelector(`[data-x=\"${x+I}\"]`)\n            \n                        square.style.backgroundColor = \"blue\"\n                    }   }      \n             },\n        // revealShipHits(player,ship,x,y){\n        //     const row = document.querySelectorAll(`[data-y=\"${y}\"]`);\n        //     let square\n        //     if(player==\"human\"){\n        //         square = row[0].querySelector(`[data-x=\"${x+I}\"]`)\n        //     } else { const square = row[1].querySelector(`[data-x=\"${x+I}\"]`)        }\n\n\n\n        //     }\n            \n        // revealShipHits\n        }\n    }\n\n\n// module.exports = Gameboard\n\n\n//# sourceURL=webpack://battleships/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n\nfunction Player(name, gameBoard) {\n\n    return {\n        name,\n        gameBoard,\n        randomAttack(enemyGameBoard) {\n          const newArray = [];\n          // This calculates every area that is possible to hit and pushes it in to above array\n          for (let i = 0; i < enemyGameBoard.coordinateList.length; i++) {\n          if (enemyGameBoard.coordinateList[i] == 0) {newArray.push(i)}}\n          // This chooses a random location spot in that array\n          const nextHitLocation = newArray[Math.floor(Math.random() * newArray.length)]\n          // If array is empty, there's no spots left so it returns False\n          if (newArray.length == 0) {\n            return false\n          }\n        \n          enemyGameBoard.receiveAttack(nextHitLocation, 0)\n        }\n        }\n    }\n    // module.exports = Player\n    \n\n//# sourceURL=webpack://battleships/./src/Player.js?");

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computer: () => (/* binding */ computer),\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* eslint-disable prefer-const */\n\n\n\n\n\nconsole.log('gameloop')\n\n\n// Initialize Ship objects\n    // Players Ships\nlet pSmallestShip = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(2,'Smallest Ship')\nlet pSmallShip    = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(3,'Small Ship')\nlet pSmallShipTwo = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(3,'Small Ship')\nlet pMediumShip   = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(4,'Medium Ship')\nlet pLargeShip    = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(5,'Large Ship')\n\n    // Computers Ships\nlet cSmallestShip = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(2,'Smallest Ship')\nlet cSmallShip    = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(3,'Small Ship')\nlet cSmallShipTwo = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(3,'Small Ship')\nlet cMediumShip   = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(4,'Medium Ship')\nlet cLargeShip    = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(5,'Large Ship')\n\n\n// Initialize Game Boards\n    // Player Game Board\nlet playerGameBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)()\n\n    // Computer Game Board\nlet computerGameBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)()\n\n// Initialize Player\n\nlet computer = (0,_Player__WEBPACK_IMPORTED_MODULE_2__.Player)('computer',computerGameBoard )\nlet player = (0,_Player__WEBPACK_IMPORTED_MODULE_2__.Player)('player',playerGameBoard )\n\n// Placement of ships\n\n\nif(player.gameBoard.placeShip(pSmallShipTwo,5,4) == true){\n    player.gameBoard.revealShipPlacement(\"human\",pSmallShipTwo,5,4)\n }\n\nif(player.gameBoard.placeShip(pSmallShip,5,2)){\n    player.gameBoard.revealShipPlacement(\"human\",pSmallShip,5,2)\n\n}\n\nif(player.gameBoard.placeShip(pMediumShip,1,6)){\n    player.gameBoard.revealShipPlacement(\"human\",pMediumShip,1,6)\n\n}\nif(player.gameBoard.placeShip(pLargeShip,2,8)){\n    player.gameBoard.revealShipPlacement(\"human\",pLargeShip,2,8)\n\n}\n\ncomputer.gameBoard.placeShip(cSmallestShip,1,1)\ncomputer.gameBoard.placeShip(cSmallShip,1,2)\ncomputer.gameBoard.placeShip(cSmallShipTwo,1,3)\ncomputer.gameBoard.placeShip(cMediumShip,1,4)\ncomputer.gameBoard.placeShip(cLargeShip,1,5)\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleships/./src/gameLoop.js?");

/***/ }),

/***/ "./src/gameUI.js":
/*!***********************!*\
  !*** ./src/gameUI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateGrid: () => (/* binding */ generateGrid)\n/* harmony export */ });\n\nconst gameboardBodies = document.querySelectorAll('.gameBoardBody')\nfunction generateGrid() {\n// First create 10 rows\nlet workingRow = 0\n    for (let i=9;i>=0;i--) {\n        const tr = document.createElement('tr')\n        const tr2 = document.createElement('tr')\n        tr.classList.add('gameboardOneRows')\n        tr.dataset.y = i\n        tr2.classList.add('gameboardTwoRows')\n        tr2.dataset.y = i\n\n        gameboardBodies[0].appendChild(tr)\n        gameboardBodies[1].appendChild(tr2)\n// Then create 10 columns in each row\n\n        for (let j = 0; j < 10; j++) {\n            const gbOne = document.querySelectorAll('.gameboardOneRows');\n            const td = document.createElement('td')\n            td.dataset.x = j\n            td.dataset.owner = 'Player'\n            gbOne[workingRow].appendChild(td)\n        }\n        for (let j = 0; j < 10; j++) {\n            const gbTwo = document.querySelectorAll('.gameboardTwoRows');\n            const td = document.createElement('td')\n            td.dataset.x = j\n            td.dataset.owner = 'Computer'\n            gbTwo[workingRow].appendChild(td)\n        }\n    \n        workingRow = workingRow + 1\n\n    }\n\n}\ngenerateGrid()\n\n\n// function showShips(array){\n//     // This function pulls the Gameboard Coordinate list and identifies Ships within.\n//     // Then it will mark the sections with ships with a darker gray on the DOM, \n// }\n\n\n\n//# sourceURL=webpack://battleships/./src/gameUI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameUI */ \"./src/gameUI.js\");\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameLoop */ \"./src/gameLoop.js\");\n\n\n\n\n\n// Adding event listeners to newly created table cells\n\nconst tdList = document.querySelectorAll('td')\ntdList.forEach( td => {\n    td.addEventListener('click', ()=>{\n        console.log(`${td.dataset.x} X`)\n        console.log(`${td.parentElement.dataset.y} Y`)\n        console.log(`${td.dataset.owner}`)\n        \n        if(td.dataset.owner == 'Computer'){\n            const x = Number(td.dataset.x)\n            const y = Number(td.parentElement.dataset.y)\n            _gameLoop__WEBPACK_IMPORTED_MODULE_3__.computer.gameBoard.receiveAttack(x,y)\n            if(_gameLoop__WEBPACK_IMPORTED_MODULE_3__.computer.gameBoard.coordinateList[y*10+x].includes('Miss')){\n                console.log('YAY')\n                const row = document.querySelectorAll(`[data-y=\"${y}\"]`);\n                const square = row[1].querySelector(`[data-x=\"${x}\"]`)\n                square.style.backgroundColor = \"gray\"\n\n\n            }\n            if(_gameLoop__WEBPACK_IMPORTED_MODULE_3__.computer.gameBoard.coordinateList[y*10+x].includes('Hit')){\n                console.log('OW')\n                const row = document.querySelectorAll(`[data-y=\"${y}\"]`);\n                        const square = row[1].querySelector(`[data-x=\"${x}\"]`)\n                        square.style.backgroundColor = \"red\"\n                       }     \n             }\n                \n    }) })\n\n// function revealShips(player,ship,x,y){\n//     let squares = document.querySelectorAll(`[data-x=\"${x}\"]`);\n//     squares.forEach((square)=> {\n//         if (square.parentNode.dataset.y == y && player==\"human\"){\n//     square.style.backgroundColor = \"blue\"\n//         }\n//     })\n    \n// }\n\n// if(gameboard.placeShip(smallShip,5,5) == true ) {\n//     revealShips(\"human\",smallShip,5,5)\n// }\n\n// let pSmallShipTwo = Ship(3,'Small Ship')\n\n// function revealShipPlacement(player,ship,x,y){\n//     // First locate the square with y coordinate below\n//     let row = document.querySelectorAll(`[data-y=\"${y}\"]`);\n//     // Then verify it belongs to the X coordinate below\n//     // this won't work because it has multiple Y's selected need to verify the\n//     // person it's using\n//     // Then, for that specific square, perform the following code.\n    \n//         if (player==\"human\"){\n//         for (let I = 0; I < ship.length; I++) {\n//             let square = row[0].querySelector(`[data-x=\"${x+I}\"]`)\n\n//             square.style.backgroundColor = \"blue\"\n//         }   }      \n//  }\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(length, name) {\n    return {\n        name,\n        length,\n        damage: 0,\n        sunk: false,\n        hit() {\n            if(this.isSunk() == true ) {\n               return 'Unable to attack sunken ship'\n            } else {\n                this.damage += 1\n                this.isSunk()\n            }\n        },\n        isSunk() {\n            if(this.damage == length){\n                return this.sunk = true\n            }\n        }\n        \n    }\n}\n// module.exports = Ship\n\n\n//# sourceURL=webpack://battleships/./src/ships.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;