import React, { useCallback } from "react";

import classNames from "classnames";

import BaseButton from "@/components/ui/BaseButton/BaseButton";
import Icon from "@/components/ui/Icon/Icon";
import styles from "@/components/ui/IconButton/IconButton.module.scss";
import type { IconButtonProps } from "@/components/ui/IconButton/IconButton.types";

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      as = BaseButton,
      className,
      size = "md",
      disabled = false,
      onClick,
      text,
      iconName,
      ...props
    },
    ref,
  ) => {
    const Comp = as as typeof BaseButton;

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled) {
          onClick?.(e);
        }
      },
      [onClick, disabled],
    );

    return (
      <Comp
        ref={ref}
        className={classNames(styles.IconButton, styles[`size-${size}`], className)}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        <Icon name={iconName} />
        {text}
      </Comp>
    );
  },
);

export default IconButton;
