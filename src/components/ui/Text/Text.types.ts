type TextVariant =
  | "titleLg"
  | "titleM"
  | "titleSm"
  | "bodyLg"
  | "bodyM"
  | "bodySm"
  | "bodyXsm"
  | "buttonPrimary"
  | "buttonSecondary"
  | "buttonTertiary";

type TextAlign = "left" | "center" | "right";

type TextColor =
  | "white"
  | "black"
  | "primary"
  | "secondary"
  | "tertiary"
  | "quarternary"
  | "gradient"
  | "error"
  | "purpleGradient";

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  color?: TextColor;
  variant?: TextVariant;
  align?: TextAlign;
  truncated?: boolean | number;
}
