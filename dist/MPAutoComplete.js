"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _lab = require("@material-ui/lab");

var _excluded = ["options", "gridItem", "gridProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Autocomplete para uso general
 * @param {boolean}   gridItem        Bandera que le agrega un contenedor Grid al SiampTextField
 * @param {object}    gridProps       Objeto de propiedades para el Grid contenedor
 * @param {array}     options         Array de objetos que son las opciones si se requiere que funcione como Select 
 * @param {string}    type            si se le envía 'select' el SiampTextField se comportará como un Select
 * 
 * EJEMPLO DE USO:
 * const autocompleteProps = {
    id: '3',
    label: 'Departamento',
    name: 'departamento_id',
    gridItem: true,
    type: 'autocomplete',
    options: [
      {
      value: 0,
      label: 'Jutiapa',
    }
    ],
    validations: FieldValidations.requiredSelect,
  };

  @RENDERIZADO
  <MPAutoComplete {...autocompleteProps} />
 */
var MPAutoComplete = function MPAutoComplete(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$gridItem = _ref.gridItem,
      gridItem = _ref$gridItem === void 0 ? false : _ref$gridItem,
      _ref$gridProps = _ref.gridProps,
      gridProps = _ref$gridProps === void 0 ? {} : _ref$gridProps,
      props = _objectWithoutProperties(_ref, _excluded);

  var defaultProps = {
    options: [{
      label: 'Sin selección',
      value: -1
    }].concat(_toConsumableArray(options)),
    getOptionLabel: function getOptionLabel(option) {
      return option.label;
    },
    isOptionEqualToValue: function isOptionEqualToValue(option, value) {
      return option.value === value.value;
    },
    value: {
      label: 'Sin selección',
      value: -1
    }
  };
  var Container = gridItem ? _core.Grid : _react.Fragment;
  var propsGrid = gridItem ? _objectSpread({
    item: true,
    md: 6,
    sm: 12,
    xs: 12
  }, gridProps) : {};

  var _changeValue = function _changeValue(e, v) {
    return props.onChange ? props.onChange(v) : undefined;
  };

  var _formikConfig = function _formikConfig() {
    var name = props.name,
        formik = props.formik;
    if (!formik || !name) return {};
    return {
      autoCompleteProps: {
        value: formik.values[name] || {
          label: 'Sin selección',
          value: -1
        },
        onChange: function onChange(e, v) {
          return formik.setFieldValue(name, v);
        }
      },
      textFieldProps: {
        error: Boolean(formik.errors[name]),
        helperText: formik.errors[name]
      }
    };
  };

  return /*#__PURE__*/_react.default.createElement(Container, propsGrid, /*#__PURE__*/_react.default.createElement(_lab.Autocomplete, _extends({}, defaultProps, {
    clearOnEscape: true,
    fullWidth: true,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react.default.createElement(_core.TextField, _extends({}, params, {
        label: props.label,
        variant: "outlined"
      }, _formikConfig().textFieldProps));
    }
  }, props, {
    onChange: _changeValue
  }, _formikConfig().autoCompleteProps)));
};

var _default = MPAutoComplete;
exports.default = _default;