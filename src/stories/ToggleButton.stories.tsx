import React from "react";
import { Story } from "@storybook/react";
import ToggleButton from "../components/toggleButton";
import { ToggleButtonProps } from "../components/toggleButton/ToggleButton.types";

export default {
  title: "ToggleButton",
  component: ToggleButton,
};

const Template: Story<ToggleButtonProps> = (args) => <ToggleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  selectedIdx: 0,
  items: ["RIDER", "SELLER", "STAFF"],
};

export const Secondary = Template.bind({});
Secondary.args = {
  selectedIdx: 1,
  items: ["업 신청", "상차 대기", "반납 업무", "완한 업무"],
};
