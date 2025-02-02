import { MemoryRouter } from "react-router-dom";

import ArrowNavbar from "@/components/ui/ArrowNavbar/ArrowNavbar";
import CloseNavbar from "@/components/ui/CloseNavbar/CloseNavbar";
import HomeNavbar from "@/components/ui/HomeNavbar/HomeNavbar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/Navbars",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ width: 350, border: "1px solid #ccc" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const CloseNavbarStory: Story = {
  name: "CloseNavbar",
  render: () => <CloseNavbar />,
};

export const ArrowNavbarStory: Story = {
  name: "ArrowNavbar",
  render: () => <ArrowNavbar />,
};

export const HomeNavbarStory: Story = {
  name: "HomeNavbar",
  render: () => <HomeNavbar />,
};
