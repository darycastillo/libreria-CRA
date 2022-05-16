import React from "react";
import {Button} from "@material-ui/core";

/**
 * Button para uso general
 * @param {string}    title           Título del modal
 * EJEMPLO DE USO:
  @RENDERIZADO
  <MPButton {...autocompleteProps} />
 */

const MPButton = ({
  title='Aceptar', 
  onClick=()=>{}, 
  variant='contained',
  color="primary",
  ...props
}) => {

  return (
    <Button  onClick={() => onClick()} variant={variant} {...props} color={color}>
    {title}
  </Button>
  );
};
export default React.memo(MPButton);
