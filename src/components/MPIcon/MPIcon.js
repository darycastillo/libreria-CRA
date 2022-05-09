import React from 'react'
import * as Icons from "@material-ui/icons";

/**
 * @returns A React component that is lazy loaded.
 * @param iconName string -> Nombre del icono que deseas generar
 * Ejemplo:
 * <MPIcon iconName='Add'/>
 */
const MPIcon = ({iconName, ...props})=>{
  if(Icons[iconName]){
    const Icon = Icons[iconName];
    return <Icon {...props}/>;
  }else{
    return <></>
  } 
}
export default MPIcon;