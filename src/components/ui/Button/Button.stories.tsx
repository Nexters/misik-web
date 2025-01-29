import Button from "@/components/ui/Button/Button";
import styles from "@/components/ui/Button/Button.module.scss";
import type { ButtonProps } from "@/components/ui/Button/Button.types";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    text: "정보가 맞아요",
    disabled: false,
    variant: "primary",
  },
};

export const VariantProps: StoryObj<typeof Button> = {
  render: () => (
    <div className={styles.ButtonStory}>
      <div className={styles.Wrapper}>
        <p className={styles.Text}>primary</p>
        <Button variant="primary" text="정보가 맞아요" />
      </div>
      <div className={styles.Wrapper}>
        <p className={styles.Text}>secondary</p>
        <Button variant="secondary" text="정보가 맞아요" />
      </div>
      <div className={styles.Wrapper}>
        <p className={styles.Text}>disabled</p>
        <Button variant="disabled" text="정보가 맞아요" />
      </div>
    </div>
  ),
};
