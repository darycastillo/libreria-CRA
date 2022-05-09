import React from 'react';
import MPAutoComplete from './MPAutoComplete';
import CustomTheme from '../../theme/CustomTheme'

export default {
  title: 'MP/MPAutoComplete',
  component: MPAutoComplete,
};

const Template = (args) => <CustomTheme><MPAutoComplete {...args} {...args.props}/></CustomTheme>;

export const Default = Template.bind({});
Default.args = {
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
  props:{}
};