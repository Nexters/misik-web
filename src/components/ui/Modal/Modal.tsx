import type { PropsWithChildren } from "react";
import { useEffect, useRef } from "react";

import classNames from "classnames";

import styles from "@/components/ui/Modal/Modal.module.scss";
import Portal from "@/components/ui/Modal/Portal";

import useClickOutside from "@/hooks/common/useClickOutside";

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  isOpen: boolean;
}

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onClose);

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
            ref={modalRef}
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
