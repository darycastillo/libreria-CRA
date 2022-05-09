import React from 'react';
import MPTextField from './MPTextField';
import { FieldValidations } from "../../utils/index";
import CustomTheme from "../../theme/CustomTheme";

export default {
  title: 'MP/MPTextField',
  component: MPTextField,
};

const Template = (args) => <CustomTheme><MPTextField {...args} {...args.props}/></CustomTheme>;
const MultilineTemplate = (args) => <CustomTheme><MPTextField {...args} {...args.props}/></CustomTheme>;
const SelectTemplate = (args) => <CustomTheme><MPTextField {...args} {...args.props}/></CustomTheme>;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  label: "Nombre",
  name: "nombre",
  gridItem: true,
  type: '',
  inputProps: { maxLength: 100 },
  validations: FieldValidations.required,
  props: {}
};

export const Multiline = MultilineTemplate.bind({});
Multiline.args = {
  id: "2",
  label: "Descripción",
  name: "descripcion",
  gridItem: true,
  multiline: true,
  minRows: 4,
  gridProps: { md: 12 },
  inputProps: { maxLength: 300 },
  validations: FieldValidations.required,
};

export const Select = SelectTemplate.bind({});
Select.args = {
  id: "3",
  label: "Select",
  name: "select",
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
  inputProps: { maxLength: 100 },
  validations: FieldValidations.required,
  props: {}
};