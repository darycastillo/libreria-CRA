import React from "react";
import PropTypes from "prop-types";
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 *
 * @param loading deshabilita la interacción y muestra un circular progress
 * @param loadingText el texto a mostrar cuando loading es true
 *
 * EJEMPLO DE IMPLEMENTACIÓN:
    <MainLayoutFab 
      variant="extended"
      loading={true}
      loadingText="Guardando"
    >
      <Icon style={{ marginRight: 8 }}>save</Icon>
      Guardar
    </MainLayoutFab>
 */

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    right: 16,
    bottom: 16,
    [theme.breakpoints.up('sm')]: {
      right: 24,
      bottom: 24,
    },
    [theme.breakpoints.up('md')]: {
      right: 32,
      bottom: 32,
    },
    zIndex: 9999,
  },
  loading: {
    pointerEvents: 'none',
  },
  progress: {
    color: theme.palette.black.highEmphasis
  },
  progressExtended: {
    marginRight: theme.spacing(1),
  }
}));

const MPMainLayoutFab = ({loading, loadingText, onClick, children, ...props}) => {
  const classes = useStyles();  

  return (
    <Fab 
      className={clsx('mp-main-layout-fab', classes.fab, {
        [classes.loading]: loading
      })} 
      color="secondary"
      onClick={loading ? undefined : onClick}
      {...props} 
    >
      {!loading ? children : (
        props.variant === 'extended' ? (
          <React.Fragment>
            <CircularProgress 
              size={24} 
              className={clsx(classes.progress, classes.progressExtended)} 
            />
            {loadingText}
          </React.Fragment>
        ) : (
          <CircularProgress size={24} className={classes.progress} />
        )
      )}
    </Fab>
  )
}

MPMainLayoutFab.defaultProps = {
  loading: false,
  loadingText: 'Guardando',
}

MPMainLayoutFab.propTypes = {
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  onClick: PropTypes.func,
}

export default MPMainLayoutFab