import React from "react";

import classNames from "classnames";

import styles from "@/components/ui/BaseButton/BaseButton.module.scss";
import type { BaseButtonProps } from "@/components/ui/BaseButton/BaseButton.types";

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ className, children, type = "button", ...props }, ref) => {
    return (
      <button className={classNames(styles.BaseButton, className)} ref={ref} type={type} {...props}>
        {children}
      </button>
    );
  },
);

export default BaseButton;
