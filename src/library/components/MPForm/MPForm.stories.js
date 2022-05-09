import React from "react";
import MPForm from "./MPForm";
import useFormikFields from "../../hooks/useFormikFields";
import { FieldValidations } from "../../utils/index";
import CustomTheme from "../../theme/CustomTheme";

export default {
  title: "MP/MPForm",
  component: MPForm,
};

const Template = (args) => {
  const formik = useFormikFields({
    fields: args.fields,
  });

  return <CustomTheme><MPForm formik={formik} {...args}/></CustomTheme>;
};

export const Default = Template.bind({});
Default.args = {
  paperProps:{},
  paper: true,
  fields: [
    {
      id: "1",
      label: "Nombre",
      name: "nombre",
      gridItem: true,
      inputProps: { maxLength: 100 },
      validations: FieldValidations.required,
      gridProps:{},
      props:{}
    },
    {
      id: "2",
      label: "Estado",
      name: "estado",
      gridItem: true,
      type: "select",
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
      gridProps:{},
      props:{}
    },
    {
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
      gridProps:{},
      props:{}
    },
    {
      id: "6",
      label: "Descripción",
      name: "descripcion",
      gridItem: true,
      multiline: true,
      enableCounter: true,
      minRows: 4,
      maxCount:300,
      gridProps: { md: 12 },
      inputProps: { maxLength: 300 },
      validations: FieldValidations.required,
    },
  ],
};
