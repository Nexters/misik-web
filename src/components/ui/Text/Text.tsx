import React from "react";

import classNames from "classnames";

import styles from "@/components/ui/Text/Text.module.scss";
import type { TextProps } from "@/components/ui/Text/Text.types";

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Comp = "span",
      children,
      color = "black",
      variant = "bodyLg",
      className,
      align = "left",
      truncated,
      ...props
    },
    ref,
  ) => {
    const isMultiLineTruncated = typeof truncated === "number" && truncated >= 1;

    return (
      <Comp
        ref={ref}
        className={classNames(
          styles.Text,
          styles[`color-${color}`],
          styles[`variant-${variant}`],
          styles[`align-${align}`],
          truncated === true
            ? styles.truncated
            : isMultiLineTruncated && styles["multi-line-truncated"],
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

export default Text;
