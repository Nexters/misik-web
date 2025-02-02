// BaseNavbar.tsx
import React from "react";

import classNames from "classnames";

import NavbarButton from "../Navbar/NavButton";

import type { BaseNavbarProps } from "@/components/ui/Navbar/BaseNavartypes";
import styles from "@/components/ui/Navbar/Navbar.module.scss";

const Navbar: React.FC<BaseNavbarProps> = ({ leftButton, rightButton, ...props }) => {
  return (
    <nav className={classNames(styles.Navbar)} {...props}>
      <div className={styles.Left}>
        <NavbarButton buttonProps={leftButton} defaultAlt="left button" />
      </div>

      <div className={styles.Right}>
        <NavbarButton buttonProps={rightButton} defaultAlt="right button" />
      </div>
    </nav>
  );
};

export default Navbar;
