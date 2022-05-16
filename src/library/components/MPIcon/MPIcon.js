import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as Icons from "@material-ui/icons";
import clsx from "clsx";
import * as MPIcons from "./svgIcons";

const useStyles = makeStyles(() => ({
  active: {
    width: "24px",
    height: "24px",
  },
  inactive: {
    filter: "grayscale(100%) opacity(0.5)",
  },
}));

/**
 * @returns A React component that is lazy loaded.
 * @param iconName string -> Nombre del icono que deseas generar
 * Ejemplo:
 * <MPIcon iconName='Add'/>
 */
const MPIcon = ({ iconName, mpIconProps, ...props }) => {
  const classes = useStyles();

  if (mpIconProps && MPIcons[mpIconProps.iconName]) {
    const CustomIcon = MPIcons[mpIconProps.iconName];
    return (
      <svg
        width="100%"
        height="100%"
        className={clsx(classes.active, {
          [classes.inactive]: props.disabled,
        })}
      >
        <CustomIcon {...mpIconProps} />
      </svg>
    );
  } else if (Icons[iconName]) {
    const Icon = Icons[iconName];
    return <Icon {...props} />;
  } else {
    return <></>;
  }
};
export default MPIcon;
