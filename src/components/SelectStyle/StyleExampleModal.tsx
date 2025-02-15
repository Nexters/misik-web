import type { ModalProps } from "@/components/HomeNavigateConfirmModal/HomeNavigateConfirmModal";
import styles from "@/components/SelectStyle/StyleExampleModal.module.scss";
import Icon from "@/components/ui/Icon/Icon";
import Modal from "@/components/ui/Modal/Modal";
import Text from "@/components/ui/Text/Text";

const StyleExampleModal = ({ isOpen, handleClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} isBackdropClose handleClose={handleClose}>
      <div className={styles.Modal}>
        <button className={styles.IconButton} onClick={handleClose}>
          <Icon name="close" />
        </button>
        <div>
          <Text variant="titleSm" color="primary" align="center" as="h2">
            친근한 말투
          </Text>
          <Text variant="bodyM" color="secondary" align="center" as="p">
            다양한 음료와 베이커리 제품이 있는 카페에서 맛있는 시간을 보냈어요. 특히 특별한 메뉴인
            '버터 리스크림빵' 과 '에그듬뿍모닝샌드위치' 가 인상적이었어요. 커피 맛도 좋아서
            만족스러웠어요. 마지막으로, 분위기나 서비스도 매우 좋았어요.
          </Text>
        </div>
        <div>
          <Text variant="titleSm" color="primary" align="center" as="h2">
            믿음직한 말투
          </Text>
          <Text variant="bodyM" color="secondary" align="center" as="p">
            다양한 음료와 베이커리 제품이 있는 카페에서 맛있는 시간을 보냈어요. 특히 특별한 메뉴인
            '버터 리스크림빵' 과 '에그듬뿍모닝샌드위치' 가 인상적이었어요. 커피 맛도 좋아서
            만족스러웠어요. 마지막으로, 분위기나 서비스도 매우 좋았어요.
          </Text>
        </div>
        <div>
          <Text variant="titleSm" color="primary" align="center" as="h2">
            유쾌한 말투
          </Text>
          <Text variant="bodyM" color="secondary" align="center" as="p">
            다양한 음료와 베이커리 제품이 있는 카페에서 맛있는 시간을 보냈어요. 특히 특별한 메뉴인
            '버터 리스크림빵' 과 '에그듬뿍모닝샌드위치' 가 인상적이었어요. 커피 맛도 좋아서
            만족스러웠어요. 마지막으로, 분위기나 서비스도 매우 좋았어요.
          </Text>
        </div>
      </div>
    </Modal>
  );
};

export default StyleExampleModal;
