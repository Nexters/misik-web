import { useState } from "react";

export const useFocus = ({ defaultFocus }: { defaultFocus?: boolean }) => {
  const [isFocus, setIsFocus] = useState(defaultFocus);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  return { isFocus, onFocus, onBlur };
};
