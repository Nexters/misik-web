import { MemoryRouter } from "react-router-dom";

import Navbar from "@/components/common/Navbar/Navbar";
import Icon from "@/components/ui/Icon/Icon";
import Text from "@/components/ui/Text/Text";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/Navbar",
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

export const HomeNavbar: Story = {
  name: "HomeNavbar",
  render: () => (
    <Navbar>
      <Navbar.LeftButton>
        <Icon name="logo" />
      </Navbar.LeftButton>
      <Navbar.RightButton>
        <Text variant="bodySm" color="secondary">
          앱 공유하기
        </Text>
      </Navbar.RightButton>
    </Navbar>
  ),
};

export const ArrowNavbar: Story = {
  name: "ArrowNavbar",
  render: () => (
    <Navbar>
      <Navbar.LeftButton>
        <Icon name="leftArrow" />
      </Navbar.LeftButton>
    </Navbar>
  ),
};

export const CloseNavbar: Story = {
  name: "CloseNavbar",
  render: () => (
    <Navbar>
      <Navbar.RightButton>
        <Icon name="close" />
      </Navbar.RightButton>
    </Navbar>
  ),
};
