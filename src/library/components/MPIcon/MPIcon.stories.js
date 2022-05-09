import React from "react";
import CustomTheme from "../../theme/CustomTheme";
import MPIcon from "./MPIcon";

export default {
  title: "MP/MPIcon",
  component: MPIcon,
};

const Template = (args) => (
  <CustomTheme>
    <MPIcon {...args} {...args.props} />
  </CustomTheme>
);

export const Default = Template.bind({});
Default.args = {
  title: "MPIcon",
  onClick: () => console.log("click"),
  iconName: 'Edit',
  color: "primary",
  props:{}
};
