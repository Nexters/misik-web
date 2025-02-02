// NavbarButton.tsx (같은 파일 or 분리)
import React from "react";

import classNames from "classnames";

import type { NavbarButtonProps } from "@/components/ui/Navbar/BaseNavartypes";
import styles from "@/components/ui/Navbar/Navbar.module.scss";

interface BaseNavbarProps {
  buttonProps?: NavbarButtonProps;
  defaultAlt?: string;
}

const NavbarButton: React.FC<BaseNavbarProps> = ({ buttonProps, defaultAlt }) => {
  if (!buttonProps) return null;
  const { className, content, icon, alt, onClick } = buttonProps;

  const computedClassName = className === "logo" ? classNames(styles.Logo) : classNames(className);

  return (
    <button onClick={onClick}>
      {content ? (
        <button onClick={onClick}>{content}</button>
      ) : (
        <img
          className={computedClassName}
          onClick={onClick}
          src={icon}
          alt={alt || defaultAlt || "button"}
        />
      )}
    </button>
  );
};

export default NavbarButton;
