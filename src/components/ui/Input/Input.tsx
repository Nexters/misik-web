import { forwardRef, useRef } from "react";

import classNames from "classnames";

import styles from "@/components/ui/Input/Input.module.scss";
import type { InputProps } from "@/components/ui/Input/Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "primary", onFocus, isFocus, onBlur, isError, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDivClick = () => {
      if (onFocus) {
        const fakeEvent = { target: inputRef.current } as React.FocusEvent<HTMLInputElement>;
        onFocus(fakeEvent);
      }
    };

    const handleDivBlur = () => {
      if (onBlur) {
        const fakeEvent = { target: inputRef.current } as React.FocusEvent<HTMLInputElement>;
        onBlur(fakeEvent);
      }
    };

    return (
      <div
        className={classNames(
          styles.InputWrapper,
          styles[`style-${variant}`],
          {
            [styles.Focused]: isFocus,
            [styles.Error]: isError,
          },
          className,
        )}
        onClick={handleDivClick}
        onBlur={handleDivBlur}
      >
        <input type={type} ref={ref} className={styles.Input} {...props} onBlur={handleDivBlur} />
        {variant === "primary" && <button>수정</button>}
      </div>
    );
  },
);

export default Input;
