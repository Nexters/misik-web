import Icon from "@/components/ui/Icon/Icon";
import { ICONS } from "@/components/ui/Icon/Icon";
import type { IconNameType, IconProps } from "@/components/ui/Icon/Icon";
import styles from "@/components/ui/Icon/Icon.module.scss";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
};

export default meta;

export const Primary: StoryObj<IconProps> = {
  args: {
    name: "camera",
  },
};

export const AllIcons: StoryObj<IconProps> = {
  render: () => (
    <div className={styles.IconStory}>
      {(Object.keys(ICONS) as IconNameType[]).map((iconName) => (
        <div className={styles.Wrapper}>
          <div className={styles.InnerWrapper}>
            <Icon name={iconName} />
          </div>
          <p>{iconName}</p>
        </div>
      ))}
    </div>
  ),
};
