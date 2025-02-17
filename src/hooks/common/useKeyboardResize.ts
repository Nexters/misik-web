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
          const newKeyboardHeight = isKeyboardVisible
            ? window.innerHeight - window.visualViewport.height
            : 0;

          if (isKeyboardVisible && newKeyboardHeight === 0) {
            setTimeout(() => {
              if (window.visualViewport) {
                setKeyboardHeight(window.innerHeight - window.visualViewport.height);
              }
            }, 300);
          } else {
            setKeyboardHeight(newKeyboardHeight);
          }

          setKeyboardVisible(isKeyboardVisible);
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
