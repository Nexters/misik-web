import Toast from "@/components/ui/Toast/Toast";

import type { Meta, StoryObj } from "@storybook/react";

type ToastProps = {
  text: string;
};

const meta: Meta<typeof Toast> = {
  title: "Example/Toast",
  component: Toast,
};

export default meta;

export const Primary: StoryObj<ToastProps> = {
  args: {
    text: "링크가 복사되었어요.",
  },
};
