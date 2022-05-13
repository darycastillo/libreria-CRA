import React from "react";
import CustomTheme from "../../theme/CustomTheme";
import MPMainLayout from "./MPMainLayout";

export default {
  title: "MP/MainLayout",
  component: MPMainLayout,
};

const Template = (args) => (
  <CustomTheme>
    <MPMainLayout {...args} />
  </CustomTheme>
);

const ExampleComponent = () => <div>Example component</div>;

export const Default = Template.bind({});
Default.args = {
  loading: false,
  title: "Title",
  subtitle: "Subtitle",
  metacontent: ExampleComponent,
};
