import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import classNames from "classnames";

import styles from "@/components/ui/NavbarV2/NavbarV2.module.scss";

const NavbarV2 = ({ children }: PropsWithChildren) => {
  return <div className={styles.NavbarV2}>{children}</div>;
};

NavbarV2.LeftButton = ({
  children,
  // 확장성 고려해서 className 추가 현재 디자인상에서는 사실 필요 없기는 함
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

NavbarV2.RightButton = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={classNames(styles.RightButton, className)} {...props}>
      {children}
    </button>
  );
};

export default NavbarV2;
