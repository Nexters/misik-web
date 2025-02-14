import { forwardRef, useEffect, useState } from "react";

import classNames from "classnames";

import styles from "@/components/ui/Input/Input.module.scss";
import type { InputProps } from "@/components/ui/Input/Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "primary", onFocus, isFocus, onBlur, isError, ...props }, ref) => {
    const [focused, setFocused] = useState(isFocus || false);

    const inputRef = ref as React.RefObject<HTMLInputElement>;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus && onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur && onBlur(e);
    };

    useEffect(() => {
      if (isFocus !== undefined) {
        setFocused(isFocus);
      }
    }, [isFocus]);

    return (
      <div className={styles.InputWrapper}>
        <input
          type={type}
          ref={inputRef}
          className={classNames(
            styles.Input,
            styles[`style-${variant}`],
            focused && styles.Focused,
            isError && styles.Error,
            className,
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {variant === "primary" && <button>수정</button>}
      </div>
    );
  },
);

export default Input;
