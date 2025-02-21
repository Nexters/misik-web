import { Toast, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/Toast/Toast";

import { useToast } from "@/hooks/common/useToast";

export function Toaster() {
  const { toasts, removeToast } = useToast();

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(({ id, title, duration }) => (
        <Toast
          key={id}
          open
          duration={duration}
          onOpenChange={(open) => !open && removeToast(id)}
          className="flex items-center gap-3 rounded-3 bg-white px-3 py-2 shadow-1"
        >
          {title && <ToastTitle className="text-caption-1-bold text-black">{title}</ToastTitle>}
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
