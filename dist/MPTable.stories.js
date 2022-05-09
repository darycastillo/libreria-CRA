"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MPTable = _interopRequireDefault(require("./MPTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'MP/MPTable',
  component: _MPTable.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_MPTable.default, args);
};

var columns = [{
  id: "nombre",
  label: "Fiscalía",
  minWidth: 170
}, {
  id: "direccion",
  label: "Dirección",
  minWidth: 170
}, {
  id: "estado",
  label: "Estado",
  minWidth: 170,
  align: "center"
}, {
  id: "actions",
  label: "Acciones",
  minWidth: 100,
  align: "right",
  actions: [{
    name: "editar",
    iconName: "Edit",
    //canRender: false,
    disabled: function disabled(data) {
      return data.estado === "INACTIVA";
    },
    onClick: function onClick(e, data) {
      console.log("editar", "e", e, "data", data);
    }
  }, {
    name: "eliminar",
    iconName: "RemoveCircle",
    //canRender: true,
    disabled: function disabled(data) {
      return data.estado === "INACTIVA";
    },
    onClick: function onClick(e, data) {
      console.log("eliminar", "e", e, "data", data);
    }
  }]
}];
var rows = [{
  nombre: "Fiscalía de la mujer",
  direccion: "Ciudad de Guatemala",
  estado: "INACTIVA"
}, {
  nombre: "Fiscalía de la mujer",
  direccion: "Ciudad de Guatemala",
  estado: "ACTIVA"
}];
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  rows: rows,
  columns: columns
};