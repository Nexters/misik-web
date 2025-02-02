import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classNames from "classnames";

import styles from "@/components/HomeNavigateConfirmModal/HomeNavigateConfirmModal.module.scss";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";
import Modal from "@/components/ui/Modal/Modal";
import Text from "@/components/ui/Text/Text";

interface HomeNavigateConfirmModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const HomeNavigateConfirmModal = ({ isOpen, handleClose }: HomeNavigateConfirmModalProps) => {
  const navigate = useNavigate();

  // 이후 상태 초기값 재설정
  const [isShowButtonChecked, setIsShowButtonChecked] = useState(false);

  const handleShowButtonClick = () => {
    setIsShowButtonChecked((prev) => !prev);
  };

  const handleNavigateHome = () => {
    handleClose();
    navigate("/");
  };

  return (
    <Modal isOpen={isOpen}>
      <div className={styles.Modal}>
        <Text variant="titleSm" color="primary" align="center" as="h2">
          홈으로 가시겠어요?
        </Text>
        <Text variant="bodyM" color="secondary" align="center" as="p">
          복사하지 않은 리뷰는 삭제돼요.
        </Text>
        <div className={styles.ButtonWrapper}>
          <Button text="아니요" variant="tertiary" onClick={handleClose} />
          <Button text="네" variant="primary" onClick={handleNavigateHome} />
        </div>
        <div
          className={classNames(styles.ShowButtonWrapper, {
            [styles.isChecked]: isShowButtonChecked,
          })}
          onClick={handleShowButtonClick}
        >
          <Icon name="checkCircle" />
          <Text variant="bodyXsm" color={isShowButtonChecked ? "primary" : "tertiary"}>
            다시 안볼래요
          </Text>
        </div>
      </div>
    </Modal>
  );
};

export default HomeNavigateConfirmModal;
