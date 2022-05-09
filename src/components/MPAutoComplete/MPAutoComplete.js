import React, { memo } from 'react';
import { Grid, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Fragment } from 'react';

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

const MPAutoComplete = ({
  options = [],
  gridItem = false,
  gridProps = {},
  ...props
}) => {
  const defaultProps = {
    options: [{ label: 'Sin selección', value: -1 }, ...options],
    getOptionLabel: (option) => option.label,
    isOptionEqualToValue: (option, value) => option.value === value.value,
    value: { label: 'Sin selección', value: -1 },
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

  const _changeValue = (e, v) =>
    props.onChange ? props.onChange(v) : undefined;

  const _formikConfig = () => {
    const { name, formik } = props;
    if (!formik || !name) return {};
    return {
      autoCompleteProps: {
        value: formik.values[name] || { label: 'Sin selección', value: -1 },
        onChange: (e, v) => formik.setFieldValue(name, v),
      },
      textFieldProps: {
        error: Boolean(formik.errors[name]),
        helperText: formik.errors[name],
      },
    };
  };

  return (
    <Container {...propsGrid}>
      <Autocomplete
        {...defaultProps}
        clearOnEscape
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            variant="outlined"
            {..._formikConfig().textFieldProps}
          />
        )}
        {...props}
        onChange={_changeValue}
        {..._formikConfig().autoCompleteProps}
      />
    </Container>
  );
};

export default memo(MPAutoComplete);
