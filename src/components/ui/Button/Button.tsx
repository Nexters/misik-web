import { forwardRef, useCallback } from "react";

import classNames from "classnames";

import BaseButton from "@/components/ui/BaseButton/BaseButton";
import styles from "@/components/ui/Button/Button.module.scss";
import type { ButtonProps } from "@/components/ui/Button/Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { as = BaseButton, className, variant = "primary", text, disabled = false, onClick, ...props },
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
        className={classNames(styles.Button, styles[`style-${variant}`], className)}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        {text}
      </Comp>
    );
  },
);

export default Button;
