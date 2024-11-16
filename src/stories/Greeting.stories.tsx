import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";

import { Greeting } from "@/components/Greeting";

const meta: Meta<typeof Greeting> = {
  component: Greeting,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Greeting>;

export const EmptyGreeting: Story = {};

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledGreeting: Story = {
  args: {
    name: "John",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    console.log(canvas);
    await expect(
      canvas.getByText("How are you doing today?")
    ).toBeInTheDocument();
  },
};
