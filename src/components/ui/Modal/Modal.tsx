import type { PropsWithChildren } from "react";
import { useEffect } from "react";

import classNames from "classnames";

import styles from "@/components/ui/Modal/Modal.module.scss";
import Portal from "@/components/ui/Modal/Portal";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {isOpen && (
        <Portal elementId="modal">
          <div
            className={classNames(styles.ModalBackdrop, {
              [styles.Open]: isOpen,
            })}
          />

          <div
            className={classNames(styles.Modal, {
              [styles.Open]: isOpen,
            })}
          >
            {children}
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
