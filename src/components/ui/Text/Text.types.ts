type TextSize = "xxs" | "xs" | "sm" | "default" | "md" | "lg" | "xl";

type TextWeight = "regular" | "medium" | "semi-bold" | "bold";

type TextAlign = "left" | "center" | "right";

type TextColor =
  | "white"
  | "black"
  | "primary"
  | "secondary"
  | "tertiary"
  | "quarternary"
  | "gradient";

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  color?: TextColor;
  size?: TextSize;
  weight?: TextWeight;
  bold?: boolean;
  align?: TextAlign;
  truncated?: boolean | number;
}
