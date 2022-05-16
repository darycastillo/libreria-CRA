import React, { Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import { IconButton } from "@material-ui/core";
import { Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Skeleton from "@material-ui/lab/Skeleton";
import LinearProgress from "@material-ui/core/LinearProgress";
import MPMainLayoutFab from "./MPMainLayoutFab";
import MPBreadcrumb from "./MPBreadcrumb";
import MPIcon from "../MPIcon/MPIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(100% - 56px)`,
    marginTop: 56,
    display: "flex",
    boxSizing: "border-box",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      height: `calc(100% - 72px)`,
      marginTop: 72,
    },
  },
  titleLayout: {
    color: theme.palette.primary[900],
  },
  subtitleLayout: {
    marginTop: "24px",
    color: theme.palette.black.mediumEmphasis,
    whiteSpace: "pre",
  },
  metaTitle: {
    width: "100px",
  },
  sidebarLayout: {
    boxSizing: "border-box",
    flex: "none",
    width: "257px",
    paddingRight: "0px",
    borderRight: `1px solid ${theme.palette.border}`,
    padding: "32px 16px 16px",
    marginTop: "64px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "8px",
      paddingTop: "16px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "8px 12px 16px 32px",
    },
  },
  contentLayout: {
    boxSizing: "border-box",
    padding: "32px 16px 16px",
    overflowY: "auto",
    //eslint-disable-next-line
    ["-webkit-overflow-scrolling"]: "touch",
    [theme.breakpoints.up("sm")]: {
      padding: "16px 32px 32px",
    },
  },
  allWidth: {
    width: "100%",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  withFab: {
    paddingBottom: 88,
    [theme.breakpoints.up("md")]: {
      paddingBottom: 120,
    },
  },
  withFabExtended: {
    paddingBottom: 80,
    [theme.breakpoints.up("md")]: {
      paddingBottom: 112,
    },
  },
  disabledContent: {
    opacity: 0.5,
    pointerEvents: "none",
  },
  disabledMetaContent: {
    "& > *": {
      transition: theme.transitions.create(["opacity"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.short,
      }),
      opacity: 0.5,
      pointerEvents: "none",
    },
    "& form": {
      opacity: 1,
      "& > *": {
        transition: theme.transitions.create(["opacity"], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.short,
        }),
        opacity: 0.5,
      },
    },
    "& .mp-main-layout-fab": {
      opacity: "1 !important",
    },
  },
  skeletonColor: {
    backgroundColor: "rgba(20, 38, 103, 0.12)",
  },
  breadcrumb: {
    marginLeft: 0,
    marginRight: 16,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
      marginRight: 32,
    },
  },
  extraMarginBottom: { marginBottom: 60 },
}));

/**
 *
 * @param title string para setear el Titulo
 * @param subtitle string para setear el SubTitulo
 * @param subtitleItemsLeft array de objetos [{title: value, text:value},...] para sutitulo lado izquierdo
 * @param subtitleItemsRight array de objetos [{title: value, text:value},...] para sutitulo lado derecho
 * @param meta componente que se quiera renderizar como por ejemplo una barra con botones
 * @param metacontent componente principal que se quiera renderizar
 * @param metasidebar componente de sidebar izquierdo que se quiera renderizar
 * @param disabledContent añade opacidad al contenido y deshabilita la interacción
 * @param loading 
 *
 * EJEMPLO DE IMPLEMENTACIÓN:
 * <MainLayout
 *  id="main-layout"
 *  title="Escribe el titulo del Layout"
 *  subtitle="Escribe el subtitulo del Layout"
      subtitleItemsLeft = {[
        {
          title:"titulo",
          text:"texot1"
        },
        {
          title:"titulo2",
          text:"texto2"
        }
      ]}
      subtitleItemsRight = {[
        {
          title:"titulo",
          text:"texot1"
        },
        {
          title:"titulo2",
          text:"texto2"
        }
      ]}
 *  meta={<Typography variant="body1">META_ALGUN_COMPONENTE</Typography>}
 *  metacontent={
 *    <Typography variant="body1">
 *      META_COMPONENTE_CONTENIDO_PRINCIPAL
 *    </Typography>
 *  }
 *   metasidebar={<Typography variant="body1">META_SIDEBAR</Typography>} >
 * </MainLayout>
 */

export default function MPMainLayout({ floatingButton, ...props }) {
  const classes = useStyles(props);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = (side) => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {props.metasidebar && (
        <div
          className={clsx(classes.sidebarLayout, {
            [classes.disabledContent]: props.disabledContent,
          })}
        >
          {props.metasidebar}
        </div>
      )}
    </div>
  );

  return (
    <div
      className={clsx(
        classes.root,
        {
          [classes.extraMarginBottom]: floatingButton,
        },
        props.className
      )}
    >
      {props.metasidebar && (
        <Hidden mdDown>
          <div
            className={clsx(classes.sidebarLayout, {
              [classes.disabledContent]: props.disabledContent,
            })}
          >
            {props.loading ? (
              <div>
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 209, height: 48 }}
                  className={classes.skeletonColor}
                />
                <br />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 180, height: 24 }}
                  className={classes.skeletonColor}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 180, height: 24 }}
                  className={classes.skeletonColor}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 150, height: 24 }}
                  className={classes.skeletonColor}
                />
                <br />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 180, height: 24 }}
                  className={classes.skeletonColor}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 180, height: 24 }}
                  className={classes.skeletonColor}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 150, height: 24 }}
                  className={classes.skeletonColor}
                />
                <br />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 180, height: 24 }}
                  className={classes.skeletonColor}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 180, height: 24 }}
                  className={classes.skeletonColor}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 150, height: 24 }}
                  className={classes.skeletonColor}
                />
                <br />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 180, height: 24 }}
                  className={classes.skeletonColor}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 180, height: 24 }}
                  className={classes.skeletonColor}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  style={{ width: 150, height: 24 }}
                  className={classes.skeletonColor}
                />
              </div>
            ) : (
              props.metasidebar
            )}
          </div>
        </Hidden>
      )}
      <div
        id="mp-content-layout"
        className={clsx(
          classes.contentLayout,
          `md:pl-32 flex-grow overflow-x-hidden`,
          {
            [classes.withFab]: props.withFab,
            [classes.withFabExtended]: props.withFabExtended,
          }
        )}
      >
        {props.breadcrumb && (
          <div className={classes.breadcrumb}>
            <MPBreadcrumb
              currentPage={props.currentPageName}
              links={props.breadcrumb}
            />
          </div>
        )}
        <div className="flex mb-32 flex-col sm:flex-row">
          <div className="flex-1">
            <div className="flex justify-between flex-col md:flex-row">
              {props.title && (
                <Typography
                  variant="h4"
                  color="primary"
                  className={classes.titleLayout}
                >
                  {props.title}
                </Typography>
              )}
              {props.meta && (
                <Hidden smDown>
                  <div className="flex justify-between mt-8 sm:mt-0 sm:ml-16 items-center sm:items-start">
                    <span>{props.meta}</span>
                  </div>
                </Hidden>
              )}
            </div>
            {(props.subtitle ||
              props.subtitleItemsLeft ||
              props.subtitleItemsRight) && (
              <div className={classes.subtitleLayout}>
                {props.subtitle &&
                  (props.loading ? (
                    <LinearProgress className={classes.skeletonColor} />
                  ) : (
                    <Typography variant="body1">{props.subtitle}</Typography>
                  ))}
                {(props.subtitleItemsLeft || props.subtitleItemsRight) && (
                  <div className="flex justify-between items-baseline">
                    <div className="flex flex-col md:flex-row">
                      {props.subtitleItemsLeft &&
                        props.subtitleItemsLeft.map((items, index) => (
                          <span className="pr-16" key={index}>
                            <span className="inline-block">
                              <Typography
                                className="w-4/5 "
                                color="primary"
                                variant="subtitle1"
                              >
                                {items.title && items.title + ": "}
                              </Typography>
                            </span>
                            <span className="align-middle">{items.text}</span>
                          </span>
                        ))}
                    </div>
                    <div className="flex flex-col items-end md:flex-row">
                      {props.subtitleItemsRight &&
                        props.subtitleItemsRight.map((items, index) => (
                          <span className="md:pl-16" key={index}>
                            <span className="inline-block">
                              <Typography
                                className="w-4/5"
                                color="primary"
                                variant="subtitle1"
                              >
                                {items.title && items.title + ": "}
                              </Typography>
                            </span>
                            <span className="align-middle">{items.text}</span>
                          </span>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            {props.meta && (
              <Hidden mdUp>
                <div className="flex justify-between mt-8 items-center sm:items-start">
                  <span style={{ marginLeft: -12 }}>
                    <IconButton
                      aria-label=""
                      onClick={toggleDrawer("left", true)}
                    >
                      <MPIcon iconName="Notes" />
                    </IconButton>
                  </span>
                  <span>{props.meta}</span>
                </div>
              </Hidden>
            )}
          </div>
        </div>
        <div
          className={clsx({
            [classes.disabledMetaContent]: props.disabledContent,
          })}
        >
          {props.loading ? (
            <Fragment>
              <Skeleton
                animation="wave"
                variant="text"
                style={{ height: 48, maxWidth: 500 }}
                className={classes.skeletonColor}
              />
              <Skeleton
                animation="wave"
                variant="text"
                style={{ height: 130 }}
                className={classes.skeletonColor}
              />
              <br />
              <Skeleton
                animation="wave"
                variant="text"
                style={{ height: 48, maxWidth: 500 }}
                className={classes.skeletonColor}
              />
              <Skeleton
                animation="wave"
                variant="text"
                style={{ height: 130 }}
                className={classes.skeletonColor}
              />
              <br />
              <Skeleton
                animation="wave"
                variant="text"
                style={{ height: 48, maxWidth: 500 }}
                className={classes.skeletonColor}
              />
              <Skeleton
                animation="wave"
                variant="text"
                style={{ height: 130 }}
                className={classes.skeletonColor}
              />
            </Fragment>
          ) : (
            <>
              {props.metacontent}
              {floatingButton && (
                <MPMainLayoutFab
                  variant={floatingButton.text ? "extended" : "circular"}
                  {...floatingButton}
                >
                  {floatingButton.icon && (
                    <MPIcon iconName={floatingButton.icon} />
                  )}
                  {floatingButton.text}
                </MPMainLayoutFab>
              )}
            </>
          )}
        </div>
      </div>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {fullList("left")}
      </Drawer>
    </div>
  );
}
