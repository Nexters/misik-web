import Text from "@/components/ui/Text/Text";
import { Toast, ToastProvider, ToastViewport } from "@/components/ui/Toast/Toast";
import styles from "@/components/ui/Toast/Toast.module.scss";

import { useToast } from "@/hooks/common/useToast";

export function Toaster() {
  const { toasts, removeToast } = useToast();

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(({ id, duration, open }) => (
        <Toast
          key={id}
          open={open}
          duration={duration}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setTimeout(() => removeToast(id), 400);
            }
          }}
          className={styles.Toaster}
        >
          <Text color="primary" variant="bodyM">
            리뷰가 복사되었어요.
          </Text>
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
