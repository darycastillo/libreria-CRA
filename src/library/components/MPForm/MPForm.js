import React, { Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import MPAutoComplete from "../MPAutoComplete/MPAutoComplete";
import MPTextField from "../MPTextField/MPTextField";

/**
 * Formulario generico de SIAMP
 * @param {array}   formik            objeto que crea a partir de useFormikFields (se muestra en el siguiente ejemplo)
 * @param {array}   fields            array de objetos donde cada objeto es un elemento del formulario
 * @param {boolean} paper             bandera para agregar paper o fondo blanco al formulario
 * @param {object}  paperProps        objeto de propiedades de configuración para el paper o fondo blanco del form
 * 
 * EJEMPLO DE USO:
 * @PASO_1 ---> importar la siguiente linea
 *  import useFormikFields from "@hooks/useFormikFields";
 * @PASO_2 ---> crear una constante 'formik' a usando el hook useFormikFields y pasandole los fields
 *  const formik = useFormikFields({
    fields: [
      {
        id: "1",
        label: "Nombre",
        name: "nombre",
        gridItem: true,
        inputProps: { maxLength: 100 },
        validations: FieldValidations.required,
      },
      {
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
      },
      {
        id: '3',
        label: 'Departamento',
        name: 'departamento_id',
        gridItem: true,
        type: 'autocomplete',
        options: {
          value: -1,
          label: 'Sin selección',
        },
        validations: FieldValidations.requiredSelect,
      },
      {
        id: "6",
        label: "Descripción",
        name: "descripcion",
        gridItem: true,
        multiline: true,
        minRows: 4,
        gridProps: { md: 12 },
        inputProps: { maxLength: 300 },
        validations: FieldValidations.required,
      },
    ]
  });
  @PASO_3 ---> Hacer uso del componente de form
  <MPForm formik={formik} />
 */

const MPForm = ({ formik, paper, paperProps }) => {
  const fields = formik?.fields || [];
  const _formik = formik.formik;
  const Container = paper ?  Paper : Fragment;
  const _paperProps = paper ?  { style: { padding: "20px", borderRadius: "16px", ...paperProps?.style }, ...paperProps} : {};

  return (
    <Container {..._paperProps}>
      <Grid container spacing={3}>
        {fields.map((field) =>
          field.type === "autocomplete" ? (
            <MPAutoComplete formik={_formik} key={field.id} {...field} />
          ) : (
            <MPTextField formik={_formik} key={field.id} {...field} />
          )
        )}
      </Grid>
    </Container>
  );
};

export default React.memo(MPForm);