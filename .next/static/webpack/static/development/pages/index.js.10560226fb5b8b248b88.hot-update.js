webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hocs/defaultPage */ "./hocs/defaultPage.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _components_Calculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Calculator */ "./components/Calculator.js");









var styles = function styles(theme) {
  return {
    section: {
      padding: "80px 20px"
    },
    sectionContent: {
      extend: 'section',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '300px',
      padding: '0px 0px',
      '&> h3': {
        marginBottom: '40px'
      },
      '&> .subTitle': {
        marginTop: '-30px'
      }
    },
    headlineCopyBlock: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'absolute',
      bottom: 50,
      paddingLeft: 80,
      paddingRight: 80,
      width: 'calc(100vw - 80px)',
      maxWidth: '600px',
      // height: '100%'
      '& a': {
        marginTop: 20,
        width: 200,
        marginRight: 50
      }
    }, theme.breakpoints.down('xs'), {
      bottom: 'initial',
      top: '10%',
      paddingLeft: 20,
      paddingRight: 20,
      '& h1': {
        fontSize: '37px'
      },
      '& h6': {
        fontSize: '1.2rem'
      }
    }),
    imageSection: {
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPositionY: '25%',
      backgroundPositionX: 'center',
      height: '680px',
      '&:before': {
        content: '""',
        position: 'absolute',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'block',
        opacity: 0.4,
        backgroundColor: '#000',
        pointerEvents: 'none'
      }
    },
    circleCard: {
      textAlign: 'center',
      padding: '30px 12px',
      '&> p': {
        maxWidth: '245px',
        margin: 'auto'
      }
    },
    circleIcon: {
      width: '200px',
      height: '200px',
      borderRadius: '100px',
      backgroundColor: '#EFEFEF',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'inline-block',
      marginBottom: '20px'
    },
    circleIconBorder: {
      extend: 'circleIcon',
      border: 'solid 1px black',
      width: '150px',
      height: '150px',
      borderRadius: '75px'
    },
    getStartedButtonContainer: {
      position: 'relative',
      width: '200px',
      // top: '300px',
      '&> a': {
        marginTop: '20px',
        // width: '200px',
        textAlign: 'center'
      }
    },
    getStartedCopy: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'relative',
      paddingTop: '130px',
      // top: '140px',
      maxWidth: '480px'
    }, theme.breakpoints.down('xs'), {
      paddingTop: '85px'
    })
  };
};

var Index = function Index(_ref) {
  var isAuthenticated = _ref.isAuthenticated,
      theme = _ref.theme,
      classes = _ref.classes;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      marginTop: '75px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.imageSection,
    style: {
      backgroundImage: 'url(/static/images/gettingStarted.jpg)'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.sectionContent
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.headlineCopyBlock
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h1",
    color: "textSecondary"
  }, "Fast-track your tax refund when you leave the UK"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h6",
    color: "textSecondary",
    style: {
      paddingLeft: '3px',
      paddingTop: '6px'
    }
  }, "If you leave the UK mid-way through the tax year, you\u2019ve most likely paid too much tax. Start enjoying your tax refund within 48 hours, so you can spend it on the way home!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.getStartedButtonContainer
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/disclaimer",
    passHref: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    color: "secondary",
    size: "large",
    fullWidth: true
  }, "Get Started")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "#calculator",
    passHref: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    color: "secondary",
    size: "large",
    fullWidth: true
  }, "Estimate Refund")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.section
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.sectionContent
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h3",
    align: "center"
  }, "Reasons to use Expat Tax Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 8,
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 6,
    md: 4,
    lg: 2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleCard
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleIconBorder,
    style: {
      backgroundImage: 'url(/static/images/icons/smartphone.png)',
      backgroundSize: '65px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h5"
  }, "We are Digital"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variatn: "body1"
  }, "No more back and forth  with snail mail and  documents.  We manage your refund online"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 6,
    md: 4,
    lg: 2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleCard
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleIconBorder,
    style: {
      backgroundImage: 'url(/static/images/icons/lightning.png)',
      backgroundSize: '45px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h5"
  }, "Faster Refund"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variatn: "body1"
  }, "It can take up to  ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "12 weeks"), " to get your refund back from HMRC depending on their busy lodgement periods. If you qualify, we refund ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "50%"), " of your estimated refund within ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "48 hours"), " hours , and the remaining amount once finalised with the HMRC (normally ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "4 hours"), "  weeks)."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 6,
    md: 4,
    lg: 2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleCard
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleIconBorder,
    style: {
      backgroundImage: 'url(/static/images/icons/cancel.png)',
      backgroundSize: '80px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h5"
  }, "No Refund, No Fee"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variatn: "body1"
  }, "There are no upfront fees. We only charge a fee if you qualify for a refund"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 6,
    md: 4,
    lg: 2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleCard
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleIconBorder,
    style: {
      backgroundImage: 'url(/static/images/icons/handshake.png)',
      backgroundSize: '80px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h5"
  }, "Fixed Fee"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variatn: "body1"
  }, "Unlike other tax specialists that charge up to 30% of the refund, our fee is fixed at \xA399. So you always know how much you're paying upfront"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 6,
    md: 4,
    lg: 2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleCard
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleIconBorder,
    style: {
      backgroundImage: 'url(/static/images/icons/calculator.png)',
      backgroundSize: '80px'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h5"
  }, "CIMA Qualified"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variatn: "body1"
  }, "Our Tax Specialists are qualified members of the Chartered Institute of Management Accountants (CIMA). Globally recognised to ensure your refund is completed to government standards")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.section,
    style: {
      backgroundColor: theme.palette.primary.main
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h3",
    align: "center"
  }, "How Does It Work?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.sectionContent
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 8,
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 6,
    md: 4
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleCard
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleIcon,
    style: {
      backgroundImage: 'url(/static/images/how1.jpg)'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h5"
  }, "Upload"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variatn: "body1"
  }, "Upload all the necessary information (especially your P45) after estimating your refund using our calculator. We\u2019ll take care of your refund application, so you don\u2019t have to worry about dealing with HMRC"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 6,
    md: 4
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleCard
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleIcon,
    style: {
      backgroundImage: 'url(/static/images/how2.jpg)'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h5"
  }, "Authorise"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variatn: "body1"
  }, "Digitally authorise Expat Tax Back to compete your refund for you. That way, you don\u2019t have to worry about dealing with HMRC and the uncertainty of how much you may or may not get back"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 6,
    md: 4
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleCard
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.circleIcon,
    style: {
      backgroundImage: 'url(/static/images/how3.jpg)'
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h5"
  }, "Cash back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variatn: "body1"
  }, "Once we have all the necessary information we\u2019ll refund you 50% of your estimated refund within 48 hours straight into your bank account, and the rest once we finalise your refund with HMRC (normally 4 weeks)")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "calculator",
    className: classes.section
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.sectionContent
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h3",
    align: "center"
  }, "How much will I get back?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 8,
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 8,
    md: 5,
    style: {
      display: 'flex',
      marginRight: '12%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body1",
    style: {
      padding: '20px 14px'
    }
  }, "Use our refund calculator to see if you qualify. If you have left or are planning to leave the UK mid-way throughout the tax year, you are most likely due a tax refund. If it was a previous tax year, we can make a claim for the last 5 years.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " If you work in Scotland, it\u2019s a bit different. Get in touch for an estimate of your refund to ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:info@expattaxback.com"
  }, "info@expattaxback.com"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 8,
    md: 4
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Calculator__WEBPACK_IMPORTED_MODULE_7__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.imageSection,
    style: {
      backgroundImage: 'url(/static/images/getstarted_bg.jpg)'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.sectionContent
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.headlineCopyBlock
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.getStartedCopy,
    variant: "h6",
    color: "textSecondary"
  }, "You are only a few clicks away from a tax refund. If you\u2019re not ready to claim, but know when you are leaving the UK, leave your contact details and we will get in touch at the right time!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.getStartedButtonContainer
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/disclaimer",
    passHref: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    color: "secondary",
    size: "large",
    fullWidth: true
  }, "Get Started")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/reminder",
    passHref: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    href: "/reminder",
    variant: "contained",
    color: "secondary",
    size: "large",
    fullWidth: true
  }, "REMIND ME BEFORE I LEAVE THE UK"))))))));
};

Index.propTypes = {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Object(_hocs_defaultPage__WEBPACK_IMPORTED_MODULE_5__["default"])(Index)));

/***/ })

})
//# sourceMappingURL=index.js.10560226fb5b8b248b88.hot-update.js.map