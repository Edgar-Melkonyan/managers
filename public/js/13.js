(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Salaries/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Salaries/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouts_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/App */ "./resources/js/Layouts/App.vue");
/* harmony import */ var _Api_salary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Api/salary */ "./resources/js/Api/salary.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
var _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var salary = {
  employee_name: '',
  amount: null,
  date: null
};
var headers = [{
  text: 'ID',
  value: 'id'
}, {
  text: 'Employee name',
  align: 'start',
  sortable: false,
  value: 'employee_name'
}, {
  text: 'Amount',
  value: 'amount',
  align: 'end'
}, {
  text: 'Date',
  value: 'date'
}, {
  text: 'Actions',
  value: 'actions',
  sortable: false
}];

var setServerErrors = function setServerErrors(err) {
  if (err.response && err.response.hasOwnProperty('status') && err.response.status === 422) {
    _this.$refs.form.setErrors(err.response.data.errors);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  layout: _Layouts_App__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: "Salaries",
  props: {
    salaries: {
      required: true,
      type: Array
    }
  },
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"]
  },
  data: function data() {
    return {
      editable: {
        index: -1,
        item: _objectSpread({}, salary)
      },
      headers: headers,
      confirm: false,
      dialog: false,
      menu: false
    };
  },
  methods: {
    editItem: function editItem(item) {
      this.editable.index = this.salaries.indexOf(item);
      this.editable.item = _objectSpread({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.editable.index = this.salaries.indexOf(item);
      this.editable.item = _objectSpread({}, item);
      this.confirm = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this2 = this;

      _Api_salary__WEBPACK_IMPORTED_MODULE_1__["salaryApi"]["delete"]("/salaries/".concat(this.editable.item.id)).then(function () {
        return _this2.salaries.splice(_this2.editable.index, 1);
      })["catch"](function (err) {
        return console.log(err);
      })["finally"](function () {
        return _this2.close('confirm');
      });
    },

    /**
     * Close & cancel
     *
     * @param {String} key - component dialog property name
     */
    close: function close(key) {
      var _this3 = this;

      this[key] = false;
      this.$nextTick(function () {
        _this3.editable.item = _objectSpread({}, salary);
        _this3.editable.index = -1;
      });
    },
    save: function save() {
      var _this4 = this;

      this.loading = 'primary';
      this.editable.index > -1 ? _Api_salary__WEBPACK_IMPORTED_MODULE_1__["salaryApi"].put("/salaries/".concat(this.editable.item.id), this.editable.item).then(function (res) {
        console.log(res);

        _this4.salaries.splice(_this4.editable.index, 1, _objectSpread({}, res.data.salary));
      })["catch"](function (err) {
        return setServerErrors;
      })["finally"](function () {
        return _this4.close('dialog');
      }) : _Api_salary__WEBPACK_IMPORTED_MODULE_1__["salaryApi"].post('/salaries', this.editable.item).then(function (res) {
        return _this4.salaries.unshift(res.data.salary);
      })["catch"](setServerErrors)["finally"](function () {
        return _this4.close('dialog');
      });
    }
  },
  created: function created() {
    console.log(this.$route);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-app-bar",
        { attrs: { app: "" } },
        [
          _c("v-toolbar-title", [
            _c(
              "a",
              { staticClass: "text-decoration-none", attrs: { href: "/" } },
              [_vm._v("Manager")]
            )
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-form",
            { ref: "logout", attrs: { action: "/logout", method: "post" } },
            [
              _c("input", {
                attrs: { type: "hidden", name: "_token" },
                domProps: { value: _vm.$csrf }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "", icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.$refs.logout.$el.submit()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-logout-variant")])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-main", [_c("v-container", [_vm._t("default")], 2)], 1),
      _vm._v(" "),
      _c("v-footer", { attrs: { app: "" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Salaries/Index.vue?vue&type=template&id=3fb59834&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Salaries/Index.vue?vue&type=template&id=3fb59834&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      headers: _vm.headers,
      items: _vm.salaries,
      "item-key": "id",
      "sort-by": "calories"
    },
    scopedSlots: _vm._u([
      {
        key: "top",
        fn: function() {
          return [
            _c(
              "v-toolbar",
              { attrs: { flat: "" } },
              [
                _c("v-toolbar-title", [_vm._v("Salaries")]),
                _vm._v(" "),
                _c("v-divider", {
                  staticClass: "mx-4",
                  attrs: { inset: "", vertical: "" }
                }),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: {
                      color: "primary",
                      href: "/salaries/report",
                      text: ""
                    }
                  },
                  [_vm._v("\n        Go to Report\n      ")]
                ),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c(
                  "v-dialog",
                  {
                    attrs: { "max-width": "500px" },
                    scopedSlots: _vm._u([
                      {
                        key: "activator",
                        fn: function(ref) {
                          var on = ref.on
                          var attrs = ref.attrs
                          return [
                            _c(
                              "v-btn",
                              _vm._g(
                                _vm._b(
                                  {
                                    staticClass: "mb-2",
                                    attrs: { color: "primary", dark: "" }
                                  },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [_vm._v("\n            New Item\n          ")]
                            )
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.dialog,
                      callback: function($$v) {
                        _vm.dialog = $$v
                      },
                      expression: "dialog"
                    }
                  },
                  [
                    _vm._v(" "),
                    _c("validation-observer", {
                      ref: "form",
                      attrs: { tag: "div" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var invalid = ref.invalid
                            return [
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "headline" }, [
                                      _vm._v("new salary item")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "name",
                                          rules: "required|max:255"
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      "error-messages": errors,
                                                      label: "Employee name",
                                                      name: "employee_name",
                                                      autofocus: "",
                                                      clearable: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editable.item
                                                          .employee_name,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editable.item,
                                                          "employee_name",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editable.item.employee_name"
                                                    }
                                                  })
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      }),
                                      _vm._v(" "),
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "amount",
                                          rules: {
                                            required: true,
                                            regex: /^[0-9]{1,10}(\.\d{1,2})?$/
                                          }
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function(ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      "error-messages": errors,
                                                      label: "Amount",
                                                      type: "number",
                                                      step: "0.01",
                                                      max: "1000000000.00",
                                                      min: "0.00",
                                                      clearable: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editable.item
                                                          .amount,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editable.item,
                                                          "amount",
                                                          _vm._n($$v)
                                                        )
                                                      },
                                                      expression:
                                                        "editable.item.amount"
                                                    }
                                                  })
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-menu",
                                        {
                                          attrs: {
                                            "nudge-right": 40,
                                            "close-on-content-click": false,
                                            transition: "scale-transition",
                                            "min-width": "290px",
                                            "offset-y": ""
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  var attrs = ref.attrs
                                                  return [
                                                    _c("validation-provider", {
                                                      attrs: {
                                                        name: "date",
                                                        rules: "required"
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function(ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c(
                                                                  "v-text-field",
                                                                  _vm._g(
                                                                    _vm._b(
                                                                      {
                                                                        attrs: {
                                                                          "prepend-icon":
                                                                            "mdi-calendar",
                                                                          label:
                                                                            "Date",
                                                                          readonly:
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .editable
                                                                              .item
                                                                              .date,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .editable
                                                                                .item,
                                                                              "date",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "editable.item.date"
                                                                        }
                                                                      },
                                                                      "v-text-field",
                                                                      attrs,
                                                                      false
                                                                    ),
                                                                    on
                                                                  )
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        true
                                                      )
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          ),
                                          model: {
                                            value: _vm.menu,
                                            callback: function($$v) {
                                              _vm.menu = $$v
                                            },
                                            expression: "menu"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            on: {
                                              input: function($event) {
                                                _vm.menu = false
                                              }
                                            },
                                            model: {
                                              value: _vm.editable.item.date,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.editable.item,
                                                  "date",
                                                  $$v
                                                )
                                              },
                                              expression: "editable.item.date"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.close("dialog")
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                Cancel\n              "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            disabled: invalid,
                                            text: ""
                                          },
                                          on: { click: _vm.save }
                                        },
                                        [
                                          _vm._v(
                                            "\n                Save\n              "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-dialog",
                  {
                    attrs: { "max-width": "450px" },
                    model: {
                      value: _vm.confirm,
                      callback: function($$v) {
                        _vm.confirm = $$v
                      },
                      expression: "confirm"
                    }
                  },
                  [
                    _c(
                      "v-card",
                      { attrs: { outlined: "" } },
                      [
                        _c("v-card-title", { staticClass: "title" }, [
                          _vm._v(
                            "\n            Are you sure you want to delete this item?\n          "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-actions",
                          [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { text: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.close("confirm")
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { color: "error" },
                                on: { click: _vm.deleteItemConfirm }
                              },
                              [_vm._v("OK")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
        },
        proxy: true
      },
      {
        key: "item.actions",
        fn: function(ref) {
          var item = ref.item
          return [
            _c(
              "v-icon",
              {
                staticClass: "mr-2",
                attrs: { small: "" },
                on: {
                  click: function($event) {
                    return _vm.editItem(item)
                  }
                }
              },
              [_vm._v("\n      mdi-pencil\n    ")]
            ),
            _vm._v(" "),
            _c(
              "v-icon",
              {
                attrs: { small: "" },
                on: {
                  click: function($event) {
                    return _vm.deleteItem(item)
                  }
                }
              },
              [_vm._v("\n      mdi-delete\n    ")]
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Api/salary.js":
/*!************************************!*\
  !*** ./resources/js/Api/salary.js ***!
  \************************************/
/*! exports provided: salaryApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salaryApi", function() { return salaryApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var salaryApi = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: process.env.APP_URL
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./resources/js/Layouts/App.vue":
/*!**************************************!*\
  !*** ./resources/js/Layouts/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7c4eb8cd&scoped=true& */ "./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c4eb8cd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Layouts/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7c4eb8cd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/App.vue?vue&type=template&id=7c4eb8cd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7c4eb8cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Salaries/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Salaries/Index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3fb59834_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3fb59834&scoped=true& */ "./resources/js/Pages/Salaries/Index.vue?vue&type=template&id=3fb59834&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Salaries/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3fb59834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3fb59834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3fb59834",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Salaries/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Salaries/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Salaries/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Salaries/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Salaries/Index.vue?vue&type=template&id=3fb59834&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Salaries/Index.vue?vue&type=template&id=3fb59834&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3fb59834_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3fb59834&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Salaries/Index.vue?vue&type=template&id=3fb59834&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3fb59834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3fb59834_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);