import { useState, useEffect } from "react";

export const useKeyboardResize = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleVisualViewportChange = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.visualViewport) {
          const isKeyboardVisible = window.visualViewport.height < window.innerHeight;
          setKeyboardVisible(isKeyboardVisible);
          setKeyboardHeight(
            isKeyboardVisible ? window.innerHeight - window.visualViewport.height : 0,
          );
        }
      }, 100);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleVisualViewportChange);
      handleVisualViewportChange();
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleVisualViewportChange);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return { keyboardVisible, keyboardHeight };
};
