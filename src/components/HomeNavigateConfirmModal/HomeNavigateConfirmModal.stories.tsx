import styles from "@/components/HomeNavigateConfirmModal/HomeNavigateConfirmModal.module.scss";
import Button from "@/components/ui/Button/Button";
import Modal from "@/components/ui/Modal/Modal";
import Text from "@/components/ui/Text/Text";

import { useOverlay } from "@/hooks/common/useOverlay";

import type { Meta, StoryObj, StoryFn } from "@storybook/react";

interface HomeNavigateConfirmModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const HomeNavigateConfirmModalStory = ({ isOpen, handleClose }: HomeNavigateConfirmModalProps) => {
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
