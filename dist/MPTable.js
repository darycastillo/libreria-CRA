"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableContainer = _interopRequireDefault(require("@material-ui/core/TableContainer"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TablePagination = _interopRequireDefault(require("@material-ui/core/TablePagination"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/styles");

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StickyTableCell = (0, _styles.withStyles)(function (theme) {
  return {
    head: {
      //borderLeft: `1px solid ${theme.palette.border}`,
      borderLeft: "1px solid black",
      right: 0,
      position: "sticky",
      //zIndex: theme.zIndex.appBar + 20,
      zIndex: 20
    },
    body: {
      backgroundColor: '#ffffff'
      /* theme.palette.background.paper */
      ,
      //borderLeft: `1px solid ${theme.palette.border}`,
      borderLeft: "1px solid black",
      minWidth: "50px",
      right: 0,
      position: "sticky",
      //zIndex: theme.zIndex.appBar + 10,
      zIndex: 10
    }
  };
})(_TableCell.default);
/**
 * Tabla para uso general
 * @param {array}   columns           array de objetos de los encabezados de la tabla
 * @param {array}   rows              array de objetos de cada fila de la tabla
 * @param {object}  headerTextProps   objeto de propiedades de configuración para los headers de la tabla
 * @param {object}  paperProps        objeto de propiedades de configuración para el paper o fondo blanco de la tabla
 * 
 * EJEMPLO DE USO:
 * <MPTable
    rows={rows}
    columns={columns}
    headerTextProps={{
      variant: "h6",
      color: "default",
    }}
  />
 */

var MPTable = function MPTable(_ref) {
  var columns = _ref.columns,
      rows = _ref.rows,
      headerTextProps = _ref.headerTextProps,
      paperProps = _ref.paperProps;
  var theme = (0, _core.useTheme)();

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = (0, _react.useState)(5),
      _useState4 = _slicedToArray(_useState3, 2),
      rowsPerPage = _useState4[0],
      setRowsPerPage = _useState4[1];

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return /*#__PURE__*/_react.default.createElement(_Paper.default, _extends({
    style: {
      width: "100%",
      overflow: "hidden",
      borderRadius: "8px",
      marginTop: "32px"
    }
  }, paperProps), /*#__PURE__*/_react.default.createElement(_TableContainer.default, null, /*#__PURE__*/_react.default.createElement(_Table.default, null, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, columns.map(function (column, index) {
    var Cell = column.id === "actions" ? StickyTableCell : _TableCell.default;
    return /*#__PURE__*/_react.default.createElement(Cell, {
      key: index,
      align: column.align,
      style: {
        minWidth: column.minWidth,
        backgroundColor: '#ffffff'
        /* theme.palette.background.paper */

      }
    }, /*#__PURE__*/_react.default.createElement(_core.Typography, headerTextProps, column.label));
  }))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
    return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: index
    }, columns.map(function (column, index) {
      var value = row[column.id];
      var Cell = column.id === "actions" ? StickyTableCell : _TableCell.default;
      return /*#__PURE__*/_react.default.createElement(Cell, {
        key: index,
        align: column.align,
        style: {
          minWidth: column.minWidth
        }
      }, column.id === "actions" ? column.actions.map(function (action) {
        return (action.canRender === undefined || Boolean(action.canRender)) && /*#__PURE__*/_react.default.createElement(_core.IconButton, {
          key: action.name,
          disabled: (action === null || action === void 0 ? void 0 : action.disabled) && action.disabled(row),
          onClick: function onClick(e) {
            return action.onClick(e, row);
          }
        }, /*#__PURE__*/_react.default.createElement(_Edit.default, null));
      }) : /*#__PURE__*/_react.default.createElement(_core.Typography, null, value));
    }));
  })))), /*#__PURE__*/_react.default.createElement(_TablePagination.default, {
    labelRowsPerPage: "Filas por p\xE1gina:",
    labelDisplayedRows: function labelDisplayedRows(_ref2) {
      var from = _ref2.from,
          to = _ref2.to,
          count = _ref2.count;
      return "".concat(from, "\u2013").concat(to, " de ").concat(count);
    },
    rowsPerPageOptions: [5, 10, 25, 100],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onPageChange: handleChangePage,
    onRowsPerPageChange: handleChangeRowsPerPage
  }));
};

var _default = /*#__PURE__*/(0, _react.memo)(MPTable);

exports.default = _default;