import styles from "@/components/HomeNavigateConfirmModal/HomeNavigateConfirmModal.module.scss";
import Button from "@/components/ui/Button/Button";
import Modal from "@/components/ui/Modal/Modal";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import { useGenerateReviewStore } from "@/store/useGenerateReviewStore";
import { useCreateReviewStore } from "@/store/useReviewStore";
import { useScanDataStore } from "@/store/useScanDataStore";

interface HomeNavigateConfirmModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const HomeNavigateConfirmModal = ({ isOpen, handleClose }: HomeNavigateConfirmModalProps) => {
  const { navigateToHome } = useRoute();

  const { resetGenerateReviewData } = useGenerateReviewStore();
  const { resetCreateReviewData } = useCreateReviewStore();
  const { resetScanData } = useScanDataStore();

  const handleNavigateHome = () => {
    resetGenerateReviewData();
    resetCreateReviewData();
    resetScanData();
    navigateToHome();
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
      </div>
    </Modal>
  );
};

export default HomeNavigateConfirmModal;
