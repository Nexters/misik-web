import { forwardRef } from "react";

import classNames from "classnames";

import styles from "@/components/ui/Input/Input.module.scss";
import type { InputProps } from "@/components/ui/Input/Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <div className={styles.InputWrapper}>
      <input type={type} ref={ref} className={classNames(styles.Input, className)} {...props} />
      <button>수정</button>
    </div>
  );
});

export default Input;
