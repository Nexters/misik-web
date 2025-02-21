import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

type ToastType = {
  id: string;
  title: string;
  open: boolean;
  duration?: number;
};

type ToastContextType = {
  toasts: ToastType[];
  addToast: (title: string, duration?: number) => string;
  removeToast: (id?: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (title: string, duration = 3000): string => {
    const id = crypto.randomUUID();

    const isToastOpen = toasts.some((toast) => toast.open);

    if (isToastOpen) {
      return "";
    }

    const newToast: ToastType = {
      id,
      title,
      open: true,
      duration,
    };
    setToasts((prev) => [...prev, newToast]);

    return id;
  };

  const removeToast = (id?: string) => {
    setToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, open: false } : toast)));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
