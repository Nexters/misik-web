import type { Preview } from "@storybook/react";

import "@/styles/reset.scss";
import "@/styles/global.scss";
import styles from "./preview.module.scss";

const preview: Preview = {
  parameters: {
    layout: "centered",
    options: {
      storySort: {
        order: ["ReadMe", "Changelog", "*", "components"],
      },
    },
  },

  decorators: [
    (Story) => (
      <div className={styles.Wrapper}>
        <div className={styles.Story}>
          <Story />
        </div>

        <div className={styles.InverseStory}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default preview;
