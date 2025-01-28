import Icon from "@/components/ui/Icon/Icon";
import { ICONS } from "@/components/ui/Icon/Icon";
import type { IconNameType } from "@/components/ui/Icon/Icon";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: {
        type: "select",
        options: ["camera", "close", "gallery", "leftArrow", "paste", "plus"],
      },
    },
  },
};

export default meta;

export const AllIcons: StoryObj<typeof Icon> = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "4rem" }}>
      {(Object.keys(ICONS) as IconNameType[]).map((iconName) => (
        <div
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
        >
          <div
            style={{
              width: "1.5rem",
              height: "1.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name={iconName} />
          </div>
          <p>{iconName}</p>
        </div>
      ))}
    </div>
  ),
};
