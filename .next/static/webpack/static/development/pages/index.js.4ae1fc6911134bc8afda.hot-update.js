webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Calculator.js":
/*!**********************************!*\
  !*** ./components/Calculator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/index.es.js");













var styles = function styles(theme) {
  return {
    inputLabel: {
      color: theme.palette.primary.dark
    },
    refundLabel: {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '80%'
    },
    refundTextField: {
      borderColor: theme.palette.secondary.main
    },
    formControl: {
      // margin: theme.spacing.unit,
      // margin: 'auto',
      display: 'flex',
      alignItems: 'flex-start'
    },
    infoButton: {
      position: "absolute",
      right: 0
    },
    formRow: {
      width: '100%'
    },
    benefitHeader: {
      fontSize: 20,
      fontWeight: '500',
      marginLeft: 13,
      marginTop: 20
    },
    benefitLabel: {
      marginLeft: 0 // width: '80%',
      // paddingRight: 10,

    }
  };
};

var Calculator =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Calculator, _React$Component);

  function Calculator(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Calculator);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Calculator).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "inputChange", function (evt) {
      var _this$setState;

      var id = evt.target.getAttribute("id");

      _this.setState((_this$setState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this$setState, id, Math.round(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(evt.target.value, 10))), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this$setState, "refund", calculateTax()), _this$setState));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "yearChange", function (evt) {
      _this.setState({
        year: evt.target.value,
        refund: calculateTax()
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggleChange", function (evt) {
      var _this$setState2;

      var id = evt.target.getAttribute("id");

      _this.setState((_this$setState2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this$setState2, id, !_this.state[id]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_this$setState2, "refund", calculateTax()), _this$setState2));
    });

    _this.state = {
      year: 1920,
      gross: 0,
      // gross pay field
      ded: 0,
      // tax paid field
      refund: 2800,
      hasmedical: false,
      hascar: false,
      hastaxdebt: false,
      notsure: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Calculator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          classes = _this$props.classes;
      var years = [{
        value: 1920,
        label: "2019-2020"
      }, {
        value: 1819,
        label: "2018-2019"
      }, {
        value: 1718,
        label: "2017-2018"
      }, {
        value: 1617,
        label: "2016-2017"
      }, {
        value: 1516,
        label: "2015-2016"
      } // { value: 1415, label: "2014-2015" },
      ];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
        className: classes.formControl
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classes.formRow
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        placement: "left-start",
        enterTouchDelay: 1,
        title: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, "You can claim a refund for the past 5 years.")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
        className: classes.infoButton
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Info"], null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        id: "year",
        select: true,
        label: "Tax Year" // className={classes.textField}
        ,
        value: this.state.year,
        onChange: this.yearChange.bind(this),
        className: classes.textField,
        InputLabelProps: {
          className: classes.inputLabel
        },
        margin: "normal"
      }, years.map(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["MenuItem"], {
          key: option.value,
          value: option.value
        }, option.label);
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classes.formRow
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        placement: "left-start",
        enterTouchDelay: 1,
        title: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, "You can find this on your P45 or Final Payslip")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
        className: classes.infoButton
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Info"], null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        id: "gross",
        label: "Gross Pay",
        type: "number",
        InputLabelProps: {
          className: classes.inputLabel
        },
        InputProps: {
          startAdornment: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["InputAdornment"], {
            position: "start",
            disableTypography: true
          }, "\xA3")
        } // variant="outlined"
        ,
        className: classes.textField,
        value: this.state.gross,
        onChange: this.inputChange.bind(this),
        margin: "normal"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classes.formRow
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        placement: "left-start",
        enterTouchDelay: 1,
        title: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, "You can find this on your P45 or Final Payslip")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
        className: classes.infoButton
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Info"], null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        id: "ded",
        label: "Tax Paid",
        type: "number",
        InputLabelProps: {
          className: classes.inputLabel
        },
        InputProps: {
          startAdornment: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["InputAdornment"], {
            position: "start",
            disableTypography: true
          }, "\xA3")
        } // variant="outlined"
        ,
        className: classes.textField,
        value: this.state.ded,
        onChange: this.inputChange.bind(this),
        margin: "normal"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Tooltip"], {
        placement: "left-start",
        enterTouchDelay: 1,
        title: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, "We don\u2019t expect you to know the benefit amount")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
        className: classes.infoButton
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["Info"], null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        className: classes.benefitHeader
      }, "Did you Have?")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControlLabel"], {
        className: classes.benefitLabel,
        label: "Medical / Dental Insurance?" // labelPlacement="start"  
        ,
        control: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
          id: 'hasmedical',
          checked: this.state.hasmedical,
          onChange: this.toggleChange.bind(this),
          value: "disclaimerChecked"
        })
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControlLabel"], {
        className: classes.benefitLabel,
        label: "A Company Car?" // labelPlacement="start"  
        ,
        control: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
          id: 'hascar',
          checked: this.state.hascar,
          onChange: this.toggleChange.bind(this),
          value: "disclaimerChecked"
        })
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControlLabel"], {
        className: classes.benefitLabel,
        label: "Any Outstanding Tax Debt?" // labelPlacement="start"  
        ,
        control: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
          id: 'hastaxdebt' // edge="start"
          ,
          checked: this.state.hastaxdebt,
          onChange: this.toggleChange.bind(this),
          value: "disclaimerChecked"
        })
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControlLabel"], {
        className: classes.benefitLabel,
        label: "I'm not sure1" // labelPlacement="start"  
        ,
        control: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
          id: 'notsure' // edge="start"
          ,
          checked: this.state.notsure,
          onChange: this.toggleChange.bind(this),
          value: "disclaimerChecked"
        })
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        id: "refund",
        label: "Estimated Refund",
        type: "number",
        step: "1",
        InputLabelProps: {
          className: classes.refundLabel
        },
        InputProps: {
          startAdornment: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["InputAdornment"], {
            position: "start",
            disableTypography: true
          }, "\xA3"),
          classes: {
            root: classes.refundTextField
          }
        },
        variant: "outlined",
        className: classes.textField,
        value: this.state.refund,
        margin: "normal"
      }));
    }
  }]);

  return Calculator;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(styles)(Calculator));

/***/ })

})
//# sourceMappingURL=index.js.4ae1fc6911134bc8afda.hot-update.js.map