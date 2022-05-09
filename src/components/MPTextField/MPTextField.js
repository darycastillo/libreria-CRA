import React, { Fragment, useState } from "react";
import { Grid, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

/**
 * TextField para uso general
 * @param {boolean}   gridItem        Bandera que le agrega un contenedor Grid al MPTextField
 * @param {object}    gridProps       Objeto de propiedades para el Grid contenedor
 * @param {array}     options         Array de objetos que son las opciones si se requiere que funcione como Select 
 * @param {boolean}   enableCounter   Bandera que le agrega un contador al label del campo (cuando son campos multilinea)
 * @param {int}       maxCount        Numero de caracteres que va a aceptar el MPTextField
 * @param {string}    type            si se le envía 'select' el MPTextField se comportará como un Select
 * 
 * EJEMPLO DE USO:
 * @EJEMPLO_1_TEXTFIELD ---> Cuando sea un TextField normal
 * const txfNombre = {
    id: "1",
    label: "Nombre",
    name: "nombre",
    gridItem: true,
    inputProps: { maxLength: 100 },
    validations: FieldValidations.required,
  };
  @EJEMPLO_2_SELECT ---> Cuando el MPTextField se tenga que comportar como un SELECT
  const txfEstado = {
    id: "2",
    label: "Estado",
    name: "estado",
    gridItem: true,
    type: 'select',
    options: [
      {
        value: 1,
        label: "Activo",
      },
      {
        value: 0,
        label: "Inactivo",
      },
    ],
  };
  @RENDERIZADO
  <MPTextField  {...txfNombre} />
 */

const MPTextField = ({
  gridItem = false,
  gridProps = {},
  options = [],
  enableCounter = false,
  maxCount = 255,
  type = null,
  ...props
}) => {
  const [counter, setCounter] = useState(maxCount);

  const _changeValue = (e) =>
    props.onChange
      ? (props.onChange(e.target.value),
        enableCounter && setCounter(() => maxCount - e.target.value.length))
      : undefined;

  const _formikConfig = () => {
    const { name, formik } = props;
    if (!formik || !name) return {};

    return {
      value: formik.values[name],
      onChange: (e, x) => {
        formik.handleChange(e, x);
        enableCounter && setCounter(() => maxCount - e.target.value.length);
      },
      error: Boolean(formik.errors[name]),
      helperText: formik.errors[name],
    };
  };

  const Container = gridItem ? Grid : Fragment;
  const propsGrid = gridItem
    ? {
        item: true,
        md: 6,
        sm: 12,
        xs: 12,
        ...gridProps,
      }
    : {};

  const _selectProps = () => {
    const opciones = [...options];
    return options.length
      ? {
          children: opciones.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          )),
        }
      : {};
  };

  return (
    <Container {...propsGrid}>
      <TextField
        fullWidth
        variant="outlined"
        {...props}
        select = {Boolean(type === 'select')}
        label={`${props.label}  ${enableCounter ? `(${counter})` : ""}`}
        onChange={_changeValue}
        {..._selectProps()}
        {..._formikConfig()}
        {...(enableCounter ? { inputProps: { maxLength: maxCount } } : {})}
      />
    </Container>
  );
};

export default React.memo(MPTextField);
