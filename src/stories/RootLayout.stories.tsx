import type { Meta, StoryObj } from "@storybook/react";

import RootLayout from "@/app/layout";

const meta: Meta<typeof RootLayout> = {
  component: RootLayout,
  tags: ["skip-test"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof RootLayout>;

export const Primary: Story = {};
