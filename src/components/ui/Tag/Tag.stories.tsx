import Tag from "@/components/ui/Tag/Tag";
import styles from "@/components/ui/Tag/Tag.module.scss";
import type { TagProps } from "@/components/ui/Tag/Tag.types";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tag> = {
  title: "Example/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
};

export default meta;

export const Primary: StoryObj<TagProps> = {
  args: {
    text: "태그",
    variant: "primary",
    isSelect: false,
  },
};

export const VariantProps: StoryObj<typeof Tag> = {
  render: () => (
    <div className={styles.TagStory}>
      <div className={styles.Wrapper}>
        <p className={styles.Text}>primary</p>
        <Tag variant="primary" text="primary" />
      </div>
      <div className={styles.Wrapper}>
        <p className={styles.Text}>add</p>

        <Tag variant="add" text="add" />
      </div>
      <div className={styles.Wrapper}>
        <p className={styles.Text}>isSelect</p>
        <Tag variant="primary" text="isSelect" isSelect />
      </div>
    </div>
  ),
};
