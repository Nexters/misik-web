import type { HTMLAttributes } from "react";

export interface NavbarButtonProps {
  className?: string;
  icon?: string;
  alt?: string;
  onClick?: () => void;
  content?: React.ReactNode;
}

export interface BaseNavbarProps extends HTMLAttributes<HTMLDivElement> {
  leftButton?: NavbarButtonProps;
  rightButton?: NavbarButtonProps;
}
