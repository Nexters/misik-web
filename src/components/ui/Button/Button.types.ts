export type ButtonVariant = "primary" | "secondary" | "disabled";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit";
  text?: string;
  variant?: ButtonVariant;
}
