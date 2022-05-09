"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MPAutoComplete = _interopRequireDefault(require("./MPAutoComplete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'MP/MPAutoComplete',
  component: _MPAutoComplete.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_MPAutoComplete.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  id: '3',
  label: 'Departamento',
  name: 'departamento_id',
  gridItem: true,
  type: 'autocomplete',
  options: [{
    value: 0,
    label: 'Jutiapa'
  }]
};