import React from "react";
import CustomTheme from "../../theme/CustomTheme";
import MPButton from "./MPButton";

export default {
  title: "MP/MPButton",
  component: MPButton,
};

const Template = (args) => (
  <CustomTheme>
    <MPButton {...args} {...args.props} />
  </CustomTheme>
);
const OutlinedTemplate = (args) => (
  <CustomTheme>
    <MPButton {...args} {...args.props} />
  </CustomTheme>
);
const TextTemplate = (args) => (
  <CustomTheme>
    <MPButton {...args} {...args.props} />
  </CustomTheme>
);

export const Default = Template.bind({});
Default.args = {
  title: "MPButton",
  onClick: () => console.log("click"),
  variant: "contained",
  color: "primary",
  props: {},
};

export const Outlined = OutlinedTemplate.bind({});
Outlined.args = {
  title: "MPButton",
  onClick: () => console.log("click"),
  variant: "outlined",
  color: "primary",
  props: {},
};

export const Text = TextTemplate.bind({});
Text.args = {
  title: "MPButton",
  onClick: () => console.log("click"),
  variant: "text",
  color: "primary",
  props: {},
};
