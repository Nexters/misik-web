import Text from "@/components/ui/Text/Text";
import styles from "@/components/ui/Text/Text.module.scss";
import type { TextProps } from "@/components/ui/Text/Text.types";

import type { Meta, StoryObj, StoryFn } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "Example/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
};

export default meta;

const Template: StoryFn<TextProps> = ({ children, ...props }) => (
  <div className={styles.TextStory}>
    <Text {...props}>{children}</Text>
  </div>
);

export const Primary: StoryObj<TextProps> = {
  render: Template,
  args: {
    color: "black",
    variant: "bodyLg",
    align: "left",
    truncated: false,
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
};

export const VariantProps: StoryObj<typeof Text> = {
  render: () => (
    <div className={styles.TextStory}>
      <div className={styles.Wrapper}>
        <Text variant="titleLg" children="titleLg" />
      </div>
      <div className={styles.Wrapper}>
        <Text variant="titleM" children="titleM" />
      </div>
      <div className={styles.Wrapper}>
        <Text variant="titleSm" children="titleSm" />
      </div>
      <div className={styles.Wrapper}>
        <Text variant="bodyLg" children="bodyLg" />
      </div>
      <div className={styles.Wrapper}>
        <Text variant="bodyM" children="bodyM" />
      </div>
      <div className={styles.Wrapper}>
        <Text variant="bodySm" children="bodySm" />
      </div>
      <div className={styles.Wrapper}>
        <Text variant="bodyXsm" children="bodyXsm" />
      </div>
      <div className={styles.Wrapper}>
        <Text variant="buttonPrimary" children="buttonPrimary" />
      </div>
      <div className={styles.Wrapper}>
        <Text variant="buttonSecondary" children="buttonSecondary" />
      </div>
      <div className={styles.Wrapper}>
        <Text variant="buttonTertiary" children="buttonTertiary" />
      </div>
    </div>
  ),
};

export const ColorPorps: StoryObj<typeof Text> = {
  render: () => (
    <div className={styles.TextStory}>
      <div className={styles.Wrapper}>
        <Text color="white" children="white" />
      </div>
      <div className={styles.Wrapper}>
        <Text color="black" children="black" />
      </div>
      <div className={styles.Wrapper}>
        <Text color="primary" children="primary" />
      </div>
      <div className={styles.Wrapper}>
        <Text color="secondary" children="secondary" />
      </div>
      <div className={styles.Wrapper}>
        <Text color="tertiary" children="tertiary" />
      </div>
      <div className={styles.Wrapper}>
        <Text color="quarternary" children="quarternary" />
      </div>
      <div className={styles.Wrapper}>
        <Text color="gradient" children="gradient" />
      </div>
    </div>
  ),
};
