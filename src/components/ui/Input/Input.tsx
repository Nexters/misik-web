import { forwardRef } from "react";

import classNames from "classnames";

import styles from "@/components/ui/Input/Input.module.scss";
import type { InputProps } from "@/components/ui/Input/Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "primary", isFocus, ...props }, ref) => {
    return (
      <div
        className={classNames(
          styles.InputWrapper,
          styles[`style-${variant}`],
          {
            [styles.Focused]: isFocus,
          },
          className,
        )}
      >
        <input type={type} ref={ref} className={styles.Input} {...props} />
        {variant === "primary" && <button>수정</button>}
      </div>
    );
  },
);

export default Input;
