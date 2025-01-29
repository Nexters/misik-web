import type { ButtonOwnProps } from "@/components/ui/BaseButton/BaseButton.types";

type ButtonVariant = "primary" | "secondary" | "disabled";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonOwnProps {
  variant?: ButtonVariant;
}
