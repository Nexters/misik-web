import type { IconNameType } from "@/components/ui/Icon/Icon";

export type IconButtonSize = "md" | "sm";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit";
  text?: string;
  size?: IconButtonSize;
  iconName: IconNameType;
}
