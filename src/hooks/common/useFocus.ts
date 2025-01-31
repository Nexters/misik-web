import { useState } from "react";

export const useFocus = () => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  return { isFocus, onFocus, onBlur };
};
