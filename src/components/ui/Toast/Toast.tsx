import { forwardRef } from "react";

import classNames from "classnames";

import Text from "@/components/ui/Text/Text";
import styles from "@/components/ui/Toast/Toast.module.scss";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

const Toast = forwardRef<HTMLDivElement, ToastProps>(({ text, className, ...props }, ref) => {
  return (
    <div ref={ref} className={classNames(styles.Toast, className)} {...props}>
      <Text variant="bodyM">{text}</Text>
    </div>
  );
});

export default Toast;
