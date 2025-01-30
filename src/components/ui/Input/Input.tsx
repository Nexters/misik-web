import { useState, forwardRef } from "react";

import classNames from "classnames";

import styles from "@/components/ui/Input/Input.module.scss";
import type { InputProps } from "@/components/ui/Input/Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={classNames(styles.InputWrapper, { [styles.Focused]: isFocused })}>
      <input
        type={type}
        ref={ref}
        className={classNames(styles.Input, className)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <button>수정</button>
    </div>
  );
});

export default Input;
