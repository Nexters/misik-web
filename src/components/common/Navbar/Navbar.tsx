import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import classNames from "classnames";

import styles from "@/components/common/Navbar/Navbar.module.scss";

interface NavbarProps extends PropsWithChildren {
  className?: string;
}

const Navbar = ({ children, className }: NavbarProps) => {
  return <div className={(classNames(styles.Navbar), className)}>{children}</div>;
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
