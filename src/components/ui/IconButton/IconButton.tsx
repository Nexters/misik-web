import React from "react";

import classNames from "classnames";

import Icon from "@/components/ui/Icon/Icon";
import styles from "@/components/ui/IconButton/IconButton.module.scss";
import type { IconButtonProps } from "@/components/ui/IconButton/IconButton.types";

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = "md", text, iconName, ...props }, ref) => {
    return (
      <button
        className={classNames(styles.IconButton, styles[`size-${size}`], className)}
        ref={ref}
        {...props}
      >
        <Icon name={iconName} />
        {text}
      </button>
    );
  },
);

export default IconButton;
