import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import classNames from "classnames";

import styles from "@/components/common/Navbar/Navbar.module.scss";

const Navbar = ({ children }: PropsWithChildren) => {
  return <div className={styles.Navbar}>{children}</div>;
};

Navbar.LeftButton = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

Navbar.RightButton = ({
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

export default Navbar;
