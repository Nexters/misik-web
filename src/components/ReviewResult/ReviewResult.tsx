import { useEffect } from "react";

import confetti from "canvas-confetti";
import type { Options as ConfettiOptions } from "canvas-confetti";

import Toast from "../ui/Toast/Toast";

import HomeNavigateConfirmModal from "@/components/HomeNavigateConfirmModal/HomeNavigateConfirmModal";
import styles from "@/components/ReviewResult/ReviewResult.module.scss";
import Button from "@/components/ui/Button/Button";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

import { useOverlay } from "@/hooks/common/useOverlay";
import useToast from "@/hooks/common/useToast";

const ReviewResult = () => {
  const { isOpen, handleClose, handleOpen } = useOverlay();
  const { isToast, showToast } = useToast(1000); // 1초 후 사라짐

  const handleCopy = () => {
    showToast();
  };

  const handleConfetti = () => {
    const setting: ConfettiOptions = {
      particleCount: 100,
      spread: 100,
      origin: { y: 0.2 },
      colors: ["#f4abfe", "#cd90f2", "#eff0ff", "#6f91ff"],
      ticks: 50,
    };

    confetti({
      ...setting,
    });
  };

  useEffect(() => {
    handleConfetti();
  }, []);

  return (
    <div className={styles.ReviewResult}>
      <div className={styles.Top}>
        <div className={styles.ReceiptImage}>
          <img src="/assets/img/img-style-cute-circle.png" alt="mainLogo" />
        </div>
        <div className={styles.TitleBox}>
          <Text variant="titleM" color="gradient" as="h1" truncated>
            리뷰를 만들었어요!
          </Text>
        </div>

        <Text variant="bodyLg" color="primary">
          오늘 처음으로 청담커피 앤 토스트에서 주문했어요.. 매장도 깔끔하고 직원들도 친절해요!
          음료랑 토스트 세트 시켰는데 가성비가 좋네요… 맛도 좋고 양도 많아요!! 다음에도 또 시켜먹을
          거예요.
        </Text>
        <div className={styles.IconBtn}>
          <IconButton text="복사하기" iconName="paste" size="sm" onClick={handleCopy} />
        </div>
      </div>

      <div className={styles.Bottom}>
        {isToast && <Toast text="링크가 복사되었어요." />}
        <div className={styles.ButtonBox}>
          <Button text="다시생성" variant="secondary" />
          <Button text="홈으로 가기" onClick={handleOpen} />
        </div>
      </div>

      <HomeNavigateConfirmModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default ReviewResult;
