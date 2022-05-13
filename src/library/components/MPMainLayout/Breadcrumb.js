import React from "react";
import { Breadcrumbs, Typography } from "@material-ui/core";
import BreadcrumbLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

function Breadcrumb(props) {
  const { links } = props;

  //EJEMPLO DE USO
  /* const referencias = [
    {
      id: 1,
      label: 'Lista de sistemas',
      ref: '/systemsgroup'
    }
    ,
    {
      id: 2,
      label: 'Sistema',
      ref: '/system/sAMj/2019-66_SSO/Development'
    },
    {
      id: 3,
      label: 'Migracion',
      ref: '/system/migrate/:tagSystem/:name/:enviroment'
    },
  ] */

  return (
    <Breadcrumbs
      maxItems={4}
      aria-label="breadcrumb"
      style={{ color: "rgba(0, 0, 0, 0.54)", marginBottom: 4 }}
    >
      {links.map(({ label, ref, id }) => (
        <BreadcrumbLink
          key={label}
          style={{ color: "rgba(0, 0, 0, 0.54)" }}
          component={Link}
          to={ref}
        >
          {label}
        </BreadcrumbLink>
      ))}
      {props.currentPage ? (
        <Typography style={{ color: "rgba(0, 0, 0, 0.87)" }}>
          {props.currentPage}
        </Typography>
      ) : (
        <BreadcrumbLink
          key={"last"}
          style={{ color: "rgba(0, 0, 0, 0.54)" }}
          component={Link}
          to={""}
        ></BreadcrumbLink>
      )}
    </Breadcrumbs>
  );
}
export default Breadcrumb;
