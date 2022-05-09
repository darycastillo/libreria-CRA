"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _excluded = ["title", "onClick", "variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Button para uso general
 * @param {string}    title           Título del modal
 * EJEMPLO DE USO:
  @RENDERIZADO
  <MPButton {...autocompleteProps} />
 */
var MPButton = function MPButton(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Aceptar' : _ref$title,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {
    return console.log('Click');
  } : _ref$onClick,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'contained' : _ref$variant,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_core.Button, _extends({
    onClick: function onClick() {
      return _onClick();
    },
    variant: variant
  }, props), title);
};

var _default = /*#__PURE__*/_react.default.memo(MPButton);

exports.default = _default;