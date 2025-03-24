import { forwardRef } from "react";

import * as ToastPrimitives from "@radix-ui/react-toast";
import classNames from "classnames";

import styles from "@/components/ui/Toast/Toast.module.scss";

import { useToast } from "@/hooks/common/useToast";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={classNames(styles.ToastViewport, className)}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const Toast = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
>(({ className, open, id, ...props }, ref) => {
  const { removeToast } = useToast();

  return (
    <ToastPrimitives.Root
      ref={ref}
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setTimeout(() => removeToast(id), 400);
        }
      }}
      className={classNames(styles.Toast, className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastTitle = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={className} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

export { ToastProvider, ToastViewport, Toast, ToastTitle };
