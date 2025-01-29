import React from "react";

import classNames from "classnames";

import styles from "@/components/ui/Button/Button.module.scss";
import type { ButtonProps } from "@/components/ui/Button/Button.types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", text, ...props }, ref) => {
    return (
      <button
        className={classNames(styles.Button, styles[`style-${variant}`], className)}
        ref={ref}
        {...props}
      >
        {text}
      </button>
    );
  },
);

export default Button;
