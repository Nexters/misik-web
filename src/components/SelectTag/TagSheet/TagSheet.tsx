import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import classNames from "classnames";

import styles from "@/components/SelectTag/TagSheet/TagSheet.module.scss";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";
import Input from "@/components/ui/Input/Input";
import Text from "@/components/ui/Text/Text";

interface TagSheetProps {
  isOpen: boolean;
  handleClose: () => void;
}

const TagSheet = ({ isOpen, handleClose }: TagSheetProps) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content
          className={classNames(styles.BottomSheet, {
            [styles.Open]: isOpen,
            [styles.Closed]: !isOpen,
          })}
        >
          {/* 미사용 코드 콘솔 warning 제거용 */}
          <VisuallyHidden.Root>
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.Description>Description</Dialog.Description>
          </VisuallyHidden.Root>

          <div className={styles.IconBox} onClick={handleClose}>
            <Icon name="close" />
          </div>
          <Text variant="titleM" color="primary">
            더 넣고 싶은 내용이 있나요?
          </Text>
          <Input variant="secondary" placeholder="의견을 입력해주세요." className={styles.Input} />
          <div className={styles.LengthText}>
            <Text variant="bodyXsm" color="tertiary">
              *
            </Text>
            <Text variant="bodyXsm" color="secondary">
              0
            </Text>
            <Text variant="bodyXsm" color="tertiary">
              /20
            </Text>
          </div>
          <Button text="추가하기" />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default TagSheet;
