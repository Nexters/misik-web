import IconButton from "@/components/ui/IconButton/IconButton";
import styles from "@/components/ui/IconButton/IconButton.module.scss";
import type { IconButtonProps } from "@/components/ui/IconButton/IconButton.types";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconButton> = {
  title: "Example/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
};

export default meta;

export const Primary: StoryObj<IconButtonProps> = {
  args: {
    text: "갤러리",
    iconName: "gallery",
    size: "md",
  },
};

export const IconNameProps: StoryObj<typeof IconButton> = {
  render: () => (
    <div className={styles.IconButtonStory}>
      <div className={styles.Wrapper}>
        <p className={styles.Text}>gallery</p>
        <IconButton text="갤러리" iconName="gallery" />
      </div>
      <div className={styles.Wrapper}>
        <p className={styles.Text}>camera</p>
        <IconButton text="카메라" iconName="camera" />
      </div>
    </div>
  ),
};

export const SizeProps: StoryObj<typeof IconButton> = {
  render: () => (
    <div className={styles.IconButtonStory}>
      <div className={styles.Wrapper}>
        <p className={styles.Text}>sm</p>
        <IconButton size="sm" text="복사하기" iconName="paste" />
      </div>
    </div>
  ),
};
