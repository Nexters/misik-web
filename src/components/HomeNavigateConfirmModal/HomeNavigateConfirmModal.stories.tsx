import { useState } from "react";

import classNames from "classnames";

import styles from "@/components/HomeNavigateConfirmModal/HomeNavigateConfirmModal.module.scss";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";
import Modal from "@/components/ui/Modal/Modal";
import Text from "@/components/ui/Text/Text";

import { useOverlay } from "@/hooks/common/useOverlay";

import type { Meta, StoryObj, StoryFn } from "@storybook/react";

interface HomeNavigateConfirmModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const HomeNavigateConfirmModalStory = ({ isOpen, handleClose }: HomeNavigateConfirmModalProps) => {
  const [isShowButtonChecked, setIsShowButtonChecked] = useState(false);

  const handleShowButtonClick = () => {
    setIsShowButtonChecked((prev) => !prev);
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
          <Button text="네" variant="primary" onClick={handleClose} />
        </div>
        <button
          className={classNames(styles.ShowButtonWrapper, {
            [styles.isChecked]: isShowButtonChecked,
          })}
          onClick={handleShowButtonClick}
        >
          <Icon name="checkCircle" />
          <Text variant="bodyXsm" color={isShowButtonChecked ? "primary" : "tertiary"}>
            다시 안볼래요
          </Text>
        </button>
      </div>
    </Modal>
  );
};

const meta: Meta<typeof HomeNavigateConfirmModalStory> = {
  title: "Example/HomeNavigateConfirmModal",
  component: HomeNavigateConfirmModalStory,
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"],
};

export default meta;

const ModalTemplate = () => {
  const { isOpen, handleOpen, handleClose } = useOverlay();

  return (
    <>
      <Button text="open modal" onClick={handleOpen} />
      <HomeNavigateConfirmModalStory isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

const Template: StoryFn<typeof ModalTemplate> = ModalTemplate;

export const ModalStory: StoryObj<HomeNavigateConfirmModalProps> = {
  render: Template,
};
