import React, { useState, memo } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { IconButton, Typography, useTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MPIcon from "../MPIcon/MPIcon";

const StickyTableCell = withStyles((theme) => ({
  head: {
    borderLeft: `1px solid ${theme.palette.border}`,
    right: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar + 20,
  },
  body: {
    backgroundColor: theme.palette.background.paper,
    borderLeft: `1px solid ${theme.palette.border}`,
    minWidth: "50px",
    right: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar + 10,
  },
}))(TableCell);

/**
 * Tabla para uso general
 * @param {array}   columns           array de objetos de los encabezados de la tabla
 * @param {array}   rows              array de objetos de cada fila de la tabla
 * @param {object}  headerTextProps   objeto de propiedades de configuración para los headers de la tabla
 * @param {object}  bodyTextProps     objeto de propiedades de configuración para el body de la tabla
 * @param {object}  paperProps        objeto de propiedades de configuración para el paper o fondo blanco de la tabla
 * 
 * EJEMPLO DE USO:
 * <MPTable
    rows={rows}
    columns={columns}
    headerTextProps={{
      variant: "h6",
    }}
  />
 */

const MPTable = ({
  columns = [],
  rows = [],
  headerTextProps,
  paperProps,
  bodyTextProps,
  disabledPagination= false
}) => {
  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      style={{
        width: "100%",
        overflow: "hidden",
        borderRadius: "8px",
        marginTop: "32px",
      }}
      {...paperProps}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                const Cell =
                  column.id === "actions" ? StickyTableCell : TableCell;
                return (
                  <Cell
                    key={index}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: theme.palette.background.paper,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      color="primary"
                      {...headerTextProps}
                    >
                      {column.label}
                    </Typography>
                  </Cell>
                );
              })}
            </TableRow>
          </TableHead>
          {rows.length ? (
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column, index) => {
                        const value = row[column.id];
                        const Cell =
                          column.id === "actions" ? StickyTableCell : TableCell;

                        return (
                          <Cell
                            key={index}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.id === "actions" ? (
                              column.actions.map(
                                (action) =>
                                  (action.canRender === undefined ||
                                    Boolean(action.canRender)) && (
                                    <IconButton
                                      key={action.name}
                                      disabled={
                                        action?.disabled && action.disabled(row)
                                      }
                                      onClick={(e) => action.onClick(e, row)}
                                    >
                                      {
                                        <MPIcon
                                          iconName={action.iconName || "Add"}
                                        />
                                      }
                                    </IconButton>
                                  )
                              )
                            ) : (
                              <Typography variant="body2" {...bodyTextProps}>
                                {value}
                              </Typography>
                            )}
                          </Cell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          ) : (
            <div style={{ padding: 16 }}>
              <Typography variant="body2">Sin información</Typography>
            </div>
          )}
        </Table>
      </TableContainer>
      {!disabledPagination && (
        <TablePagination
          labelRowsPerPage="Filas por página:"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}–${to} de ${count}`
          }
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
};
export default memo(MPTable);
