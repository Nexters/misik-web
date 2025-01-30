type TextSize = "xxs" | "xs" | "sm" | "default" | "md" | "lg" | "xl";

type TextWeight = "regular" | "medium" | "semi-bold" | "bold";

type TextAlign = "left" | "center" | "right";

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  size?: TextSize;
  weight?: TextWeight;
  bold?: boolean;
  align?: TextAlign;
  truncated?: boolean | number;
}
