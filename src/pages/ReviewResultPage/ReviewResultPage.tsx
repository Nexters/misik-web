import { useEffect } from "react";

import confetti from "canvas-confetti";

import HomeNavigateConfirmModal from "@/components/HomeNavigateConfirmModal/HomeNavigateConfirmModal";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import Button from "@/components/ui/Button/Button";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";
import Toast from "@/components/ui/Toast/Toast";

import { useOverlay } from "@/hooks/common/useOverlay";
import { useRoute } from "@/hooks/common/useRoute";
import useToast from "@/hooks/common/useToast";

import styles from "@/pages/ReviewResultPage/ReviewResultPage.module.scss";

import { useGenerateReviewStore } from "@/store/useGenerateReviewStore";
import { useCreateReviewStore } from "@/store/useReviewStore";

import type { Options as ConfettiOptions } from "canvas-confetti";

export default function ReviewResultPage() {
  const { send } = useAppBridge();

  const { createReviewData } = useCreateReviewStore();
  const { generateReviewData } = useGenerateReviewStore();

  const { navigateToCreateReviewFail, navigateToLoading } = useRoute();

  const { isOpen, handleClose, handleOpen } = useOverlay();
  const { isToast, showToast } = useToast(1000);

  const { ocrText, hashTag, reviewStyle } = createReviewData;

  const handleConfetti = () => {
    const setting: ConfettiOptions = {
      particleCount: 100,
      spread: 100,
      origin: { y: 0.2 },
      colors: ["#f4abfe", "#cd90f2", "#eff0ff", "#6f91ff"],
      ticks: 50,
    };

    confetti(setting);
  };

  const handleRetryCreateReview = () => {
    send({
      type: AppBridgeMessageType.CREATE_REVIEW,
      payload: { ocrText, hashTag, reviewStyle },
    });

    navigateToLoading();
  };

  useEffect(() => {
    if (!generateReviewData) return;

    if (generateReviewData === "error") {
      navigateToCreateReviewFail();
    } else {
      handleConfetti();
    }
  }, [generateReviewData]);

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
          {generateReviewData}
        </Text>
        <div className={styles.IconBtn}>
          <IconButton
            text="복사하기"
            iconName="paste"
            size="sm"
            onClick={() => {
              send({ type: AppBridgeMessageType.COPY, payload: { review: generateReviewData } });

              showToast();
            }}
          />
        </div>
      </div>

      <div className={styles.Bottom}>
        {isToast && <Toast text="리뷰가 복사되었어요." />}
        <div className={styles.ButtonBox}>
          <Button text="다시생성" variant="secondary" onClick={handleRetryCreateReview} />
          <Button text="홈으로 가기" onClick={handleOpen} />
        </div>
      </div>

      <HomeNavigateConfirmModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
}
