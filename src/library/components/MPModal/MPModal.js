import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
  DialogContentText,
} from "@material-ui/core";

/**
 * Modal para uso general
 * @param {string}    title           Título del modal
 * @param {string}    description     Descripción del modal
 * @param {node}      content         Elemento jsx que va dentro del contenido del modal
 * @param {function}  handleOk        Función para el botón de (Aceptar - Continuar, etc.)
 * @param {function}  handleCancel    Función para el botón de (Cancelar - No, etc.)
 * @param {boolean}   open            Bandera para levantar el modal
 * @param {function}  onClose         Función que se ejecuta al darle click fuera del modal (Que se cierre o que ejecute alguna acción)
 * @param {boolean}   loading         Bandera que bloquea algunas acciones como CERRAR el modal cuando @loading se encuentra en true
 * 
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

const MPModal = (props) => {
  const {
    title = "Título del diálogo",
    variantTitle = "h5",
    description = "Descripción del diálogo.",
    variantDescription = "body1",
    content,
    titleOk = "Aceptar",
    handleOk = () => {},
    variantOk = "contained",
    titleCancel = "Cancelar",
    handleCancel = () => {},
    open,
    onClose,
    loading,
    titleProps,
    contentProps,
    actionsProps,
    dialogProps,
    fullWidth,
    maxWidth,
  } = props;

  return (
    <Dialog
      id="alert-dialog"
      open={open}
      onClose={onClose}
      disableBackdropClick={loading}
      disableEscapeKeyDown={loading}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      {...dialogProps}
    >
      <DialogTitle id="alert-dialog-title" {...titleProps}>
        <Typography variant={variantTitle} children={title} />
      </DialogTitle>
      <DialogContent id="alert-dialog-content" {...contentProps}>
        <DialogContentText>
          <Typography variant={variantDescription} children={description} />
        </DialogContentText>
        {content}
      </DialogContent>
      <DialogActions id="alert-dialog-actions" {...actionsProps}>
        <Button onClick={() => handleCancel()} color="secondary" autoFocus>
          {titleCancel}
        </Button>
        <Button onClick={() => handleOk()} color="primary" variant={variantOk}>
          {titleOk}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default React.memo(MPModal);
