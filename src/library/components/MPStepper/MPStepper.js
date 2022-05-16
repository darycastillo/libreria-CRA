import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useQontoStepIconStyles = makeStyles(theme=>({
  root: {
    color: theme.palette.primary[900],
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: theme.palette.primary[900]
  },
  completed: {
    color: theme.palette.primary[900],
    zIndex: 1,
    fontSize: 18
  },
  unCompleted: {
    color: theme.palette.black.inactive,
    zIndex: 1,
    fontSize: 18
  }
}));

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <CheckCircleIcon fontSize="large" className={classes.completed} />
      ) : (
        <HighlightOffIcon fontSize="large" className={classes.unCompleted} />
      )}
    </div>
  );
}

const MPStepper = ({stepList, activeStep=null, ...props}) => {

  return (
    <div style={{ paddingBottom: 20 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {stepList?.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
export default React.memo(MPStepper);