import Input from "@/components/ui/Input/Input";
import styles from "@/components/ui/Input/Input.module.scss";
import type { InputProps } from "@/components/ui/Input/Input.types";

import type { Meta, StoryObj, StoryFn } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
};

export default meta;

const Template: StoryFn<InputProps> = ({ ...props }) => (
  <Input type="text" placeholder="가게명을 입력해주세요" {...props} />
);

export const Primary: StoryObj<InputProps> = {
  render: Template,
  args: {
    type: "text",
    variant: "primary",
  },
};

export const VariantProps: StoryObj<typeof Input> = {
  render: () => (
    <div className={styles.InputStory}>
      <div className={styles.Wrapper}>
        <p className={styles.Text}>primary</p>
        <Input variant="primary" type="text" placeholder="가게명을 입력해주세요" />
      </div>
      <div className={styles.Wrapper}>
        <p className={styles.Text}>secondary</p>
        <Input variant="secondary" type="text" placeholder="가게명을 입력해주세요" />
      </div>
    </div>
  ),
};
