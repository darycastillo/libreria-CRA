import React from 'react';
import MPTable from './MPTable';
import CustomTheme from '../../theme/CustomTheme'
export default {
  title: 'MP/MPTable',
  component: MPTable,
};

const Template = (args) => <CustomTheme><MPTable {...args} /></CustomTheme>;

const columns = [
  { id: "nombre", label: "Fiscalía", minWidth: 170 },
  { id: "direccion", label: "Dirección", minWidth: 170 },
  {
    id: "estado",
    label: "Estado",
    minWidth: 170,
    align: "center",
  },
  {
    id: "actions",
    label: "Acciones",
    minWidth: 100,
    align: "right",
    actions: [
      {
        name: "editar",
        iconName: "Edit",
        //canRender: false,
        disabled: (data) => data.estado === "INACTIVA",
        onClick: (e, data) => {
          console.log("editar", "e", e, "data", data);
        },
      },
      {
        name: "eliminar",
        iconName: "RemoveCircle",
        //canRender: true,
        disabled: (data) => data.estado === "INACTIVA",
        onClick: (e, data) => {
          console.log("eliminar", "e", e, "data", data);
        },
      },
    ],
  },
];
const rows = [
  {
    nombre: "Fiscalía de la mujer",
    direccion: "Ciudad de Guatemala",
    estado: "INACTIVA",
  },
  {
    nombre: "Fiscalía de la mujer",
    direccion: "Ciudad de Guatemala",
    estado: "ACTIVA",
  },
];

export const Default = Template.bind({});
Default.args = {
  rows: rows,
  columns: columns,
  headerTextProps:{
    variant: "h6",
  },
  bodyTextProps:{}
};