type InputFieldVariant = "primary" | "secondary";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputFieldVariant;
  isFocus?: boolean;
  isError?: boolean;
}
