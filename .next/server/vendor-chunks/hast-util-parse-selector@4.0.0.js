"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-parse-selector@4.0.0";
exports.ids = ["vendor-chunks/hast-util-parse-selector@4.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/hast-util-parse-selector@4.0.0/node_modules/hast-util-parse-selector/lib/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/hast-util-parse-selector@4.0.0/node_modules/hast-util-parse-selector/lib/index.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseSelector: () => (/* binding */ parseSelector)\n/* harmony export */ });\n/**\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').Properties} Properties\n */\n\n/**\n * @template {string} SimpleSelector\n *   Selector type.\n * @template {string} DefaultTagName\n *   Default tag name.\n * @typedef {(\n *   SimpleSelector extends ''\n *     ? DefaultTagName\n *     : SimpleSelector extends `${infer TagName}.${infer Rest}`\n *     ? ExtractTagName<TagName, DefaultTagName>\n *     : SimpleSelector extends `${infer TagName}#${infer Rest}`\n *     ? ExtractTagName<TagName, DefaultTagName>\n *     : SimpleSelector extends string\n *     ? SimpleSelector\n *     : DefaultTagName\n * )} ExtractTagName\n *   Extract tag name from a simple selector.\n */\n\nconst search = /[#.]/g\n\n/**\n * Create a hast element from a simple CSS selector.\n *\n * @template {string} Selector\n *   Type of selector.\n * @template {string} [DefaultTagName='div']\n *   Type of default tag name (default: `'div'`).\n * @param {Selector | null | undefined} [selector]\n *   Simple CSS selector (optional).\n *\n *   Can contain a tag name (`foo`), classes (`.bar`), and an ID (`#baz`).\n *   Multiple classes are allowed.\n *   Uses the last ID if multiple IDs are found.\n * @param {DefaultTagName | null | undefined} [defaultTagName='div']\n *   Tag name to use if `selector` does not specify one (default: `'div'`).\n * @returns {Element & {tagName: ExtractTagName<Selector, DefaultTagName>}}\n *   Built element.\n */\nfunction parseSelector(selector, defaultTagName) {\n  const value = selector || ''\n  /** @type {Properties} */\n  const props = {}\n  let start = 0\n  /** @type {string | undefined} */\n  let previous\n  /** @type {string | undefined} */\n  let tagName\n\n  while (start < value.length) {\n    search.lastIndex = start\n    const match = search.exec(value)\n    const subvalue = value.slice(start, match ? match.index : value.length)\n\n    if (subvalue) {\n      if (!previous) {\n        tagName = subvalue\n      } else if (previous === '#') {\n        props.id = subvalue\n      } else if (Array.isArray(props.className)) {\n        props.className.push(subvalue)\n      } else {\n        props.className = [subvalue]\n      }\n\n      start += subvalue.length\n    }\n\n    if (match) {\n      previous = match[0]\n      start++\n    }\n  }\n\n  return {\n    type: 'element',\n    // @ts-expect-error: tag name is parsed.\n    tagName: tagName || defaultTagName || 'div',\n    properties: props,\n    children: []\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yQDQuMC4wL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtcGFyc2Utc2VsZWN0b3IvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDLGFBQWEsMkJBQTJCO0FBQ3hDOztBQUVBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYyxHQUFHLFdBQVc7QUFDL0Q7QUFDQSxtQ0FBbUMsY0FBYyxHQUFHLFdBQVc7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxXQUFXLDZCQUE2QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNPO0FBQ1A7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3Jmb2xpby8uL25vZGVfbW9kdWxlcy8ucG5wbS9oYXN0LXV0aWwtcGFyc2Utc2VsZWN0b3JANC4wLjAvbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1wYXJzZS1zZWxlY3Rvci9saWIvaW5kZXguanM/M2NiYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUHJvcGVydGllc30gUHJvcGVydGllc1xuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHtzdHJpbmd9IFNpbXBsZVNlbGVjdG9yXG4gKiAgIFNlbGVjdG9yIHR5cGUuXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gRGVmYXVsdFRhZ05hbWVcbiAqICAgRGVmYXVsdCB0YWcgbmFtZS5cbiAqIEB0eXBlZGVmIHsoXG4gKiAgIFNpbXBsZVNlbGVjdG9yIGV4dGVuZHMgJydcbiAqICAgICA/IERlZmF1bHRUYWdOYW1lXG4gKiAgICAgOiBTaW1wbGVTZWxlY3RvciBleHRlbmRzIGAke2luZmVyIFRhZ05hbWV9LiR7aW5mZXIgUmVzdH1gXG4gKiAgICAgPyBFeHRyYWN0VGFnTmFtZTxUYWdOYW1lLCBEZWZhdWx0VGFnTmFtZT5cbiAqICAgICA6IFNpbXBsZVNlbGVjdG9yIGV4dGVuZHMgYCR7aW5mZXIgVGFnTmFtZX0jJHtpbmZlciBSZXN0fWBcbiAqICAgICA/IEV4dHJhY3RUYWdOYW1lPFRhZ05hbWUsIERlZmF1bHRUYWdOYW1lPlxuICogICAgIDogU2ltcGxlU2VsZWN0b3IgZXh0ZW5kcyBzdHJpbmdcbiAqICAgICA/IFNpbXBsZVNlbGVjdG9yXG4gKiAgICAgOiBEZWZhdWx0VGFnTmFtZVxuICogKX0gRXh0cmFjdFRhZ05hbWVcbiAqICAgRXh0cmFjdCB0YWcgbmFtZSBmcm9tIGEgc2ltcGxlIHNlbGVjdG9yLlxuICovXG5cbmNvbnN0IHNlYXJjaCA9IC9bIy5dL2dcblxuLyoqXG4gKiBDcmVhdGUgYSBoYXN0IGVsZW1lbnQgZnJvbSBhIHNpbXBsZSBDU1Mgc2VsZWN0b3IuXG4gKlxuICogQHRlbXBsYXRlIHtzdHJpbmd9IFNlbGVjdG9yXG4gKiAgIFR5cGUgb2Ygc2VsZWN0b3IuXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gW0RlZmF1bHRUYWdOYW1lPSdkaXYnXVxuICogICBUeXBlIG9mIGRlZmF1bHQgdGFnIG5hbWUgKGRlZmF1bHQ6IGAnZGl2J2ApLlxuICogQHBhcmFtIHtTZWxlY3RvciB8IG51bGwgfCB1bmRlZmluZWR9IFtzZWxlY3Rvcl1cbiAqICAgU2ltcGxlIENTUyBzZWxlY3RvciAob3B0aW9uYWwpLlxuICpcbiAqICAgQ2FuIGNvbnRhaW4gYSB0YWcgbmFtZSAoYGZvb2ApLCBjbGFzc2VzIChgLmJhcmApLCBhbmQgYW4gSUQgKGAjYmF6YCkuXG4gKiAgIE11bHRpcGxlIGNsYXNzZXMgYXJlIGFsbG93ZWQuXG4gKiAgIFVzZXMgdGhlIGxhc3QgSUQgaWYgbXVsdGlwbGUgSURzIGFyZSBmb3VuZC5cbiAqIEBwYXJhbSB7RGVmYXVsdFRhZ05hbWUgfCBudWxsIHwgdW5kZWZpbmVkfSBbZGVmYXVsdFRhZ05hbWU9J2RpdiddXG4gKiAgIFRhZyBuYW1lIHRvIHVzZSBpZiBgc2VsZWN0b3JgIGRvZXMgbm90IHNwZWNpZnkgb25lIChkZWZhdWx0OiBgJ2RpdidgKS5cbiAqIEByZXR1cm5zIHtFbGVtZW50ICYge3RhZ05hbWU6IEV4dHJhY3RUYWdOYW1lPFNlbGVjdG9yLCBEZWZhdWx0VGFnTmFtZT59fVxuICogICBCdWlsdCBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTZWxlY3RvcihzZWxlY3RvciwgZGVmYXVsdFRhZ05hbWUpIHtcbiAgY29uc3QgdmFsdWUgPSBzZWxlY3RvciB8fCAnJ1xuICAvKiogQHR5cGUge1Byb3BlcnRpZXN9ICovXG4gIGNvbnN0IHByb3BzID0ge31cbiAgbGV0IHN0YXJ0ID0gMFxuICAvKiogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IHByZXZpb3VzXG4gIC8qKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfSAqL1xuICBsZXQgdGFnTmFtZVxuXG4gIHdoaWxlIChzdGFydCA8IHZhbHVlLmxlbmd0aCkge1xuICAgIHNlYXJjaC5sYXN0SW5kZXggPSBzdGFydFxuICAgIGNvbnN0IG1hdGNoID0gc2VhcmNoLmV4ZWModmFsdWUpXG4gICAgY29uc3Qgc3VidmFsdWUgPSB2YWx1ZS5zbGljZShzdGFydCwgbWF0Y2ggPyBtYXRjaC5pbmRleCA6IHZhbHVlLmxlbmd0aClcblxuICAgIGlmIChzdWJ2YWx1ZSkge1xuICAgICAgaWYgKCFwcmV2aW91cykge1xuICAgICAgICB0YWdOYW1lID0gc3VidmFsdWVcbiAgICAgIH0gZWxzZSBpZiAocHJldmlvdXMgPT09ICcjJykge1xuICAgICAgICBwcm9wcy5pZCA9IHN1YnZhbHVlXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMuY2xhc3NOYW1lKSkge1xuICAgICAgICBwcm9wcy5jbGFzc05hbWUucHVzaChzdWJ2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IFtzdWJ2YWx1ZV1cbiAgICAgIH1cblxuICAgICAgc3RhcnQgKz0gc3VidmFsdWUubGVuZ3RoXG4gICAgfVxuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBwcmV2aW91cyA9IG1hdGNoWzBdXG4gICAgICBzdGFydCsrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogdGFnIG5hbWUgaXMgcGFyc2VkLlxuICAgIHRhZ05hbWU6IHRhZ05hbWUgfHwgZGVmYXVsdFRhZ05hbWUgfHwgJ2RpdicsXG4gICAgcHJvcGVydGllczogcHJvcHMsXG4gICAgY2hpbGRyZW46IFtdXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/hast-util-parse-selector@4.0.0/node_modules/hast-util-parse-selector/lib/index.js\n");

/***/ })

};
;