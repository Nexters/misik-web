import type { PropsWithChildren } from "react";
import { useEffect } from "react";

import Portal from "@/components/ui/Modal/Portal";

import styles from "@/components/ui/Modal/Modal.module.css";

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
          <div className={styles.ModalBackdrop} />

          <div className={styles.Modal}>{children}</div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
