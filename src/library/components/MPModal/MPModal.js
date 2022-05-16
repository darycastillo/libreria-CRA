import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
  DialogContentText,
  IconButton,
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
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
 * 

  @RENDERIZADO
  <MPModal {...modalProps} />
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
    variantCancel,
    cancelProps,
    okProps,
    closeBtn,
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
      <DialogTitle id="alert-dialog-title" disableTypography {...titleProps}>
        <Typography variant={variantTitle} color={"primary"} children={title} />
        {closeBtn ? (
          <IconButton
            aria-label="close"
            style={{ position: "absolute", right: 24, top: 16, padding: 0 }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent id="alert-dialog-content" {...contentProps}>
        <DialogContentText component="div">
          <Typography variant={variantDescription} children={description} />
        </DialogContentText>
        {content}
      </DialogContent>
      <DialogActions id="alert-dialog-actions" {...actionsProps}>
        {
          handleCancel && <Button
          onClick={() => handleCancel()}
          color="secondary"
          variant={variantCancel}
          {...cancelProps}
        >
          {titleCancel}
        </Button>}
        {handleOk && <Button
          onClick={() => handleOk()}
          color="primary"
          variant={variantOk}
          {...okProps}
        >
          {titleOk}
        </Button>}
      </DialogActions>
    </Dialog>
  );
};
export default React.memo(MPModal);
