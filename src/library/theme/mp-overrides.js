export default {

  // TEXT FIELD

  MuiInputBase: {
    root: {
      borderRadius: 4,
      '&::before': {
        borderBottom: 'none !important'
      }
    }
  },
  MuiAutocomplete: {
    popper: {
      '& .MuiListSubheader-root': {
        fontSize: 14,
        fontWeight: '400',
        letterSpacing: '-0.15px',
        color: 'rgba(0, 0, 0, 0.54)'
      },
      '& .MuiAutocomplete-option': {
        paddingLeft: '16px !important',
      }
    }
  },

  // STEPPER

  MuiStepper: {
    root: {
      backgroundColor: 'transparent',
      padding: 0
    }
  },
  MuiStep: {
    root: {
      '&.MuiStep-vertical': {
        marginBottom: 8
      }
    },
  },
  MuiStepIcon: {
    root: {
      color: 'transparent',
      border: '1px solid #142667',
      borderRadius: '50%',
    },
    active: {
      color: '#142667',
      borderColor: 'transparent',
      '& .MuiStepIcon-text': {
        fill: '#fff'
      }
    },
    text: {
      fill: '#142667'
    }
  },
  MuiStepLabel: {
    label: {
      color: '#142667',
      fontWeight: 400
    },
    active: {
      color: '#142667 !important',
    },
    vertical: {
      '&.Mui-disabled': {
        '& .MuiStepIcon-root:not(.MuiStepIcon-active)': {
          borderColor: 'rgba(0, 0, 0, 0.38)',
          '& .MuiStepIcon-text': {
            fill: 'rgba(0, 0, 0, 0.38)',
          },
        },
        '& .MuiStepLabel-label:not(.MuiStepLabel-active)': {
          color: 'rgba(0, 0, 0, 0.38)',
        },
      }
    }
  },

  // BUTTONS

  MuiButton: {
    outlinedPrimary: {
      border: '1px solid rgba(0, 0, 0, 0.12)',
      "&:hover": {
        border: '1px solid rgba(0, 0, 0, 0.12)',
      }
    },
    label: {
      whiteSpace: 'nowrap'
    }
  },

  // FORMS
  MuiFormLabel: {
    root: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '&.MuiInputLabel-shrink': {
        maxWidth: '100%',
      },
      '&:not(.MuiInputLabel-shrink)': {
        maxWidth: 'calc(100% - 32px)',
      }
    }
  },

  MuiFilledInput: {
    root: {
      '&.Mui-disabled': {
          backgroundColor: '#CED1D8'
      },
      '& .MuiChip-root': {
        height: 24,
        border: '1px solid rgba(0, 0, 0, 0.23)',
      }
    }
  }
}