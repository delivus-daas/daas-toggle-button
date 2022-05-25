import React from "react";
import { Story } from "@storybook/react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import ToggleButton from "../components/toggleButton";
import { ToggleButtonProps } from "../components/toggleButton/ToggleButton.types";

export default {
  title: "ToggleButton",
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

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
Primary.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  await expect(canvas.getByText('RIDER'))
  await expect(canvas.getByText('SELLER'))
  await expect(canvas.getByText('STAFF'))

  await userEvent.hover(canvas.getByText('RIDER'))
  await userEvent.click(canvas.getByText('RIDER'))

  await userEvent.hover(canvas.getByText('SELLER'))
  await userEvent.click(canvas.getByText('SELLER'))

  await userEvent.hover(canvas.getByText('STAFF'))
  await userEvent.click(canvas.getByText('STAFF'))
};

Secondary.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);
  await expect(canvas.getByText('업 신청'))
  await expect(canvas.getByText('상차 대기'))
  await expect(canvas.getByText('반납 업무'))
  await expect(canvas.getByText('완한 업무'))

  await userEvent.click(canvas.getByText('업 신청'))
  await userEvent.click(canvas.getByText('상차 대기'))
  await userEvent.click(canvas.getByText('반납 업무'))
  await userEvent.click(canvas.getByText('완한 업무'))
};
