"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Button',
  component: _Button.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};

var PrimaryTemplate = function PrimaryTemplate(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: 'My Button',
  onClick: function onClick() {
    return console.log('object');
  }
};
var Primary = PrimaryTemplate.bind({});
exports.Primary = Primary;
Primary.args = {
  label: 'My Buttons',
  onClick: function onClick() {
    return console.log('object');
  }
};