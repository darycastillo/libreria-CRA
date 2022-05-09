import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import ThemesConfig from "./themesConfig";
import { createMuiTheme } from "@material-ui/core/styles";

function CustomTheme(props) {
  const mainTheme = createMuiTheme(ThemesConfig.MP);
  return <ThemeProvider theme={mainTheme}>{props.children}</ThemeProvider>;
}

export default React.memo(CustomTheme);
