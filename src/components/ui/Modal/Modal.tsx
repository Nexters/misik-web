import type { PropsWithChildren } from "react";
import { useEffect } from "react";

import classNames from "classnames";

import styles from "@/components/ui/Modal/Modal.module.scss";
import Portal from "@/components/ui/Modal/Portal";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  handleClose?: () => void;
  isBackdropClose?: boolean;
}

const Modal = ({ isOpen, isBackdropClose, handleClose, children }: ModalProps) => {
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
            onClick={() => isBackdropClose && handleClose && handleClose()}
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
