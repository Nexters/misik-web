import { useState } from "react";

interface UseToastReturn {
  isToast: boolean;
  showToast: () => void;
}

const useToast = (duration: number = 1000): UseToastReturn => {
  const [isToast, setIsToast] = useState<boolean>(false);

  const showToast = () => {
    setIsToast(true);
    setTimeout(() => {
      setIsToast(false);
    }, duration);
  };

  return { isToast, showToast };
};

export default useToast;
