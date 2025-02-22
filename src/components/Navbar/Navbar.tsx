import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import classNames from "classnames";

import styles from "@/components/Navbar/Navbar.module.scss";

const Navbar = ({ children }: PropsWithChildren) => {
  return <div className={styles.Navbar}>{children}</div>;
};

Navbar.LeftButton = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={classNames(styles.NavbarButton, className)}>
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
