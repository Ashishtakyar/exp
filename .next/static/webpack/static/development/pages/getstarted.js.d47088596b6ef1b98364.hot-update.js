webpackHotUpdate("static/development/pages/getstarted.js",{

/***/ "./pages/getstarted.js":
/*!*****************************!*\
  !*** ./pages/getstarted.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hocs/defaultPage */ "./hocs/defaultPage.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");






var styles = function styles(theme) {
  return {
    section: {
      padding: "80px 20px"
    },
    imgInput: {
      display: 'none'
    },
    sectionContent: {
      extend: 'section',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '10px 0px'
    },
    inputLabel: {
      color: theme.palette.primary.dark
    },
    refundLabel: {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main
    },
    textField: {
      width: '100%'
    },
    chipUpload: {
      width: '100%',
      flexFlow: 'row wrap',
      paddingLeft: 54,
      // paddingBottom: 14,
      display: 'flex',
      '& input': {
        display: 'none'
      }
    },
    inputChipContainer: {
      minHeight: 60
    },
    authorisationNameTextField: {
      top: 3,
      width: '100%',
      maxWidth: 400,
      '& input': {
        padding: 0
      }
    },
    formControl: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      // alignItems: 'left',
      // paddingBottom: 20,
      // paddingTop: 20,
      // maxWidth: 300,
      marginTop: 5,
      marginBottom: 5,
      // minWidth: 500,
      minHeight: 50,
      maxWidth: 500
    },
    selectFormControl: {
      extend: 'formControl',
      marginTop: 20
    },
    uploadFormControl: {
      extend: 'formControl',
      flexDirection: 'row',
      border: 'solid 1px',
      // borderColor: theme.palette.secondary.main,
      borderColor: 'rgba(0, 0, 0, 0.23)',
      borderRadius: 4
    },
    buttonFooter: {
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      maxWidth: 500,
      textAlign: 'center',
      width: '100%'
    },
    footerButtons: {
      width: '100%'
    },
    submitButton: {
      textAlign: 'center',
      width: 120,
      textTransform: 'capitalize',
      marginLeft: 'auto'
    },
    nextButton: {
      extend: 'submitButton',
      marginLeft: 'auto'
    },
    previousButton: {
      extend: 'submitButton',
      marginLeft: 'initial'
    },
    sectionHeader: {
      maxWidth: 500,
      paddingBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      color: '#554740',
      fontSize: '1rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em'
    },
    progressBarWrapper: {
      width: '100%',
      height: 10,
      position: 'fixed',
      top: 75,
      backgroundColor: theme.palette.primary.main
    },
    progressBar: {
      backgroundColor: theme.palette.secondary.main,
      width: '1%',
      height: 10,
      transition: 'all',
      transitionDuration: '300ms'
    },
    getStartedSectionContent: {
      margin: 'auto',
      width: '100%',
      padding: 20,
      marginBottom: 40,
      maxWidth: '500px',
      backgroundColor: theme.palette.primary.main,
      border: 'solid 1px',
      borderColor: theme.palette.primary.dark,
      borderRadius: 5
    },
    getStartedHeader: {
      extend: 'sectionHeader',
      textAlign: 'left',
      width: '100%',
      marginLeft: 0
    }
  };
};

var GetStarted = function GetStarted(_ref) {
  var classes = _ref.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.progressBarWrapper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.progressBar,
    style: {
      width: '1%'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "get-started",
    className: classes.sectionContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    className: classes.sectionHeader
  }, "Getting Started"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "subtitle2",
    className: classes.sectionHeader
  }, "Before you begin, we need the following information. Without it, we cannot complete your tax return. If you are having difficulty getting your P45 documentation from your employer, email us at ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:info@expattaxback.com"
  }, "info@expattaxback.com"), " and we can help do this on your behalf."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.getStartedSectionContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    className: classes.getStartedHeader
  }, "P45"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1"
  }, "A P45 document is a certificate of your income indicating how much you earned and how much tax you paid on those earnings. It is a three-page form, which your employer will issue to you at the end of each employment. Part 1A is to be kept by you for when you want to claim your tax back. The other parts are to be handed to your next employer (if you stay in the UK).You will need to submit a copy of all three parts of the P45. If you have P45's from more than 1 employer for the year, you will need to upload all of them.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.getStartedSectionContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    className: classes.getStartedHeader
  }, "Final Payslip"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1"
  }, "We need to validate your final payslip against your P45. If uploading a screenshot from your phone, make sure it can be clearly viewed,  and has the relevant year and date visible.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.getStartedSectionContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    className: classes.getStartedHeader
  }, "Proof of ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1"
  }, "Please upload a copy of your passport ID page. Make sure the entire border of the page is visible (including the passport code on the bottom of the page). If you are taking a photo of the passport, make sure all of the information is clear and is legible.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.getStartedSectionContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    className: classes.getStartedHeader
  }, "Verification of ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1"
  }, "We need to verify it\u2019s you. To do so, please take a photo of yourself holding your passport ID page against your face. Make sure the photo of yourself and the ID page is clearly visible and is clear.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.buttonFooter
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    label: "Contact Us",
    primary: "true",
    color: 'secondary',
    variant: "contained",
    className: classes.previousButton,
    href: "mailto:info@expattaxback.com"
  }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    label: "Get Started",
    primary: "true",
    color: 'secondary',
    variant: "contained",
    className: classes.nextButton,
    href: '/form' // onClick={() => authorize('/../form')}

  }, "Next")))));
};

GetStarted.propTypes = {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Object(_hocs_defaultPage__WEBPACK_IMPORTED_MODULE_3__["default"])(GetStarted)));

/***/ })

})
//# sourceMappingURL=getstarted.js.d47088596b6ef1b98364.hot-update.js.map