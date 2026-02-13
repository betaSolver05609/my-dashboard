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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/App.css */ \"(pages-dir-node)/./src/App.css\");\n/* harmony import */ var _src_App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_NavBar_NavBar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/NavBar/NavBar.css */ \"(pages-dir-node)/./src/components/NavBar/NavBar.css\");\n/* harmony import */ var _src_components_NavBar_NavBar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_components_NavBar_NavBar_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Intro_Intro_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Intro/Intro.css */ \"(pages-dir-node)/./src/components/Intro/Intro.css\");\n/* harmony import */ var _src_components_Intro_Intro_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_components_Intro_Intro_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_FloatingDiv_FloatingDiv_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/FloatingDiv/FloatingDiv.css */ \"(pages-dir-node)/./src/components/FloatingDiv/FloatingDiv.css\");\n/* harmony import */ var _src_components_FloatingDiv_FloatingDiv_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_components_FloatingDiv_FloatingDiv_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_components_Services_Services_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Services/Services.css */ \"(pages-dir-node)/./src/components/Services/Services.css\");\n/* harmony import */ var _src_components_Services_Services_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_components_Services_Services_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_components_Cards_Cards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Cards/Cards.css */ \"(pages-dir-node)/./src/components/Cards/Cards.css\");\n/* harmony import */ var _src_components_Cards_Cards_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_components_Cards_Cards_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_components_Experience_Experience_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Experience/Experience.css */ \"(pages-dir-node)/./src/components/Experience/Experience.css\");\n/* harmony import */ var _src_components_Experience_Experience_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_components_Experience_Experience_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_components_Work_Work_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Work/Work.css */ \"(pages-dir-node)/./src/components/Work/Work.css\");\n/* harmony import */ var _src_components_Work_Work_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_components_Work_Work_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _src_components_Porfolio_Portfolio_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Porfolio/Portfolio.css */ \"(pages-dir-node)/./src/components/Porfolio/Portfolio.css\");\n/* harmony import */ var _src_components_Porfolio_Portfolio_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_components_Porfolio_Portfolio_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_components_PersonalProject_PersonalProject_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/PersonalProject/PersonalProject.css */ \"(pages-dir-node)/./src/components/PersonalProject/PersonalProject.css\");\n/* harmony import */ var _src_components_PersonalProject_PersonalProject_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_components_PersonalProject_PersonalProject_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _src_components_TechStack_TechStack_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/TechStack/TechStack.css */ \"(pages-dir-node)/./src/components/TechStack/TechStack.css\");\n/* harmony import */ var _src_components_TechStack_TechStack_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_components_TechStack_TechStack_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _src_components_Certifications_Certifications_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/Certifications/Certifications.css */ \"(pages-dir-node)/./src/components/Certifications/Certifications.css\");\n/* harmony import */ var _src_components_Certifications_Certifications_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_components_Certifications_Certifications_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _src_components_Publications_Publications_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/Publications/Publications.css */ \"(pages-dir-node)/./src/components/Publications/Publications.css\");\n/* harmony import */ var _src_components_Publications_Publications_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_Publications_Publications_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _src_components_Testimonial_Testimonial_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/Testimonial/Testimonial.css */ \"(pages-dir-node)/./src/components/Testimonial/Testimonial.css\");\n/* harmony import */ var _src_components_Testimonial_Testimonial_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_components_Testimonial_Testimonial_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _src_components_Contact_Contact_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/Contact/Contact.css */ \"(pages-dir-node)/./src/components/Contact/Contact.css\");\n/* harmony import */ var _src_components_Contact_Contact_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_components_Contact_Contact_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _src_components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/Footer/Footer.css */ \"(pages-dir-node)/./src/components/Footer/Footer.css\");\n/* harmony import */ var _src_components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_src_components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! swiper/css */ \"(pages-dir-node)/./node_modules/.pnpm/swiper@8.4.7/node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! swiper/css/pagination */ \"(pages-dir-node)/./node_modules/.pnpm/swiper@8.4.7/node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_18__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sonurosu\\\\Desktop\\\\tmp\\\\my-dashboard\\\\pages\\\\_app.js\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNxQjtBQUNGO0FBQ1k7QUFDTjtBQUNOO0FBQ1U7QUFDWjtBQUNTO0FBQ2E7QUFDWjtBQUNVO0FBQ0o7QUFDRjtBQUNSO0FBQ0Y7QUFDekI7QUFDVztBQUVoQixTQUFTQSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3BELHFCQUFPLDhEQUFDRDtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUNqQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxTb251cm9zdVxcRGVza3RvcFxcdG1wXFxteS1kYXNoYm9hcmRcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3NyYy9BcHAuY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvSW50cm8vSW50cm8uY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9GbG9hdGluZ0Rpdi9GbG9hdGluZ0Rpdi5jc3NcIjtcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL1NlcnZpY2VzL1NlcnZpY2VzLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvQ2FyZHMvQ2FyZHMuY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlL0V4cGVyaWVuY2UuY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9Xb3JrL1dvcmsuY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9Qb3Jmb2xpby9Qb3J0Zm9saW8uY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9QZXJzb25hbFByb2plY3QvUGVyc29uYWxQcm9qZWN0LmNzc1wiO1xuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvVGVjaFN0YWNrL1RlY2hTdGFjay5jc3NcIjtcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL0NlcnRpZmljYXRpb25zL0NlcnRpZmljYXRpb25zLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvUHVibGljYXRpb25zL1B1YmxpY2F0aW9ucy5jc3NcIjtcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL1Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0LmNzc1wiO1xuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG4iXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/Cards/Cards.css":
/*!****************************************!*\
  !*** ./src/components/Cards/Cards.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/Certifications/Certifications.css":
/*!**********************************************************!*\
  !*** ./src/components/Certifications/Certifications.css ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/Contact/Contact.css":
/*!********************************************!*\
  !*** ./src/components/Contact/Contact.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/Experience/Experience.css":
/*!**************************************************!*\
  !*** ./src/components/Experience/Experience.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/FloatingDiv/FloatingDiv.css":
/*!****************************************************!*\
  !*** ./src/components/FloatingDiv/FloatingDiv.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/Footer/Footer.css":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/Intro/Intro.css":
/*!****************************************!*\
  !*** ./src/components/Intro/Intro.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/NavBar/NavBar.css":
/*!******************************************!*\
  !*** ./src/components/NavBar/NavBar.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/PersonalProject/PersonalProject.css":
/*!************************************************************!*\
  !*** ./src/components/PersonalProject/PersonalProject.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/Porfolio/Portfolio.css":
/*!***********************************************!*\
  !*** ./src/components/Porfolio/Portfolio.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/Publications/Publications.css":
/*!******************************************************!*\
  !*** ./src/components/Publications/Publications.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/Services/Services.css":
/*!**********************************************!*\
  !*** ./src/components/Services/Services.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/TechStack/TechStack.css":
/*!************************************************!*\
  !*** ./src/components/TechStack/TechStack.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/Testimonial/Testimonial.css":
/*!****************************************************!*\
  !*** ./src/components/Testimonial/Testimonial.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/components/Work/Work.css":
/*!**************************************!*\
  !*** ./src/components/Work/Work.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/swiper@8.4.7"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();