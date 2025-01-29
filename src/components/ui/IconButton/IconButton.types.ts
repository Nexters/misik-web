import type { ButtonOwnProps } from "@/components/ui/BaseButton/BaseButton.types";
import type { IconNameType } from "@/components/ui/Icon/Icon";

type IconButtonSize = "md" | "sm";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonOwnProps {
  size?: IconButtonSize;
  iconName: IconNameType;
}
