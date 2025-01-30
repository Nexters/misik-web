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
    size: "default",
    color: "black",
    weight: "regular",
    align: "left",
    truncated: false,
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
};

export const SizeProps: StoryObj<typeof Text> = {
  render: () => (
    <div className={styles.TextStory}>
      <div className={styles.Wrapper}>
        <Text size="xxs" children="xxs" />
      </div>
      <div className={styles.Wrapper}>
        <Text size="xs" children="xs" />
      </div>
      <div className={styles.Wrapper}>
        <Text size="sm" children="sm" />
      </div>
      <div className={styles.Wrapper}>
        <Text size="default" children="default" />
      </div>
      <div className={styles.Wrapper}>
        <Text size="md" children="md" />
      </div>
      <div className={styles.Wrapper}>
        <Text size="lg" children="lg" />
      </div>
      <div className={styles.Wrapper}>
        <Text size="xl" children="xl" />
      </div>
    </div>
  ),
};

export const WeightProps: StoryObj<typeof Text> = {
  render: () => (
    <div className={styles.TextStory}>
      <div className={styles.Wrapper}>
        <Text weight="regular" children="regular" />
      </div>
      <div className={styles.Wrapper}>
        <Text weight="medium" children="medium" />
      </div>
      <div className={styles.Wrapper}>
        <Text weight="semi-bold" children="semi-bold" />
      </div>
      <div className={styles.Wrapper}>
        <Text weight="bold" children="bold" />
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
