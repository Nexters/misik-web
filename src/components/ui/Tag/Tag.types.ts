type TagVariant = "primary" | "add";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  variant?: TagVariant;
  isSelect?: boolean;
}
