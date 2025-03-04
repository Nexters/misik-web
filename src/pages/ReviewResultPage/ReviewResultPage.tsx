import { useEffect } from "react";

import confetti from "canvas-confetti";

import HomeNavigateConfirmModal from "@/components/HomeNavigateConfirmModal/HomeNavigateConfirmModal";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import Button from "@/components/ui/Button/Button";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

import { useOverlay } from "@/hooks/common/useOverlay";
import { useRoute } from "@/hooks/common/useRoute";
import { useToast } from "@/hooks/common/useToast";

import styles from "@/pages/ReviewResultPage/ReviewResultPage.module.scss";

import { useGenerateReviewStore } from "@/store/useCreateReviewStore";
import { useCreateReviewStore } from "@/store/useReviewStore";

import { gTagLogEvent } from "@/utils/gtag";

import type { Options as ConfettiOptions } from "canvas-confetti";

export default function ReviewResultPage() {
  const { send } = useAppBridge();

  const { createReviewData } = useCreateReviewStore();
  const { generateReviewData, resetGenerateReviewData } = useGenerateReviewStore();

  const { navigateToCreateReviewFail, navigateToLoading } = useRoute();

  const { isOpen, handleClose, handleOpen } = useOverlay();

  const { addToast } = useToast();

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
    gTagLogEvent("review_retry_button_click", {
      category: "Button",
      label: "review_retry_button",
    });

    resetGenerateReviewData();

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
        <div className={styles.Image}>
          <img src="/assets/img/img-style-friendly-circle.webp" alt="mainLogo" />
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
              gTagLogEvent("copy_button_click", {
                category: "Button",
                label: "copy_button",
              });

              send({ type: AppBridgeMessageType.COPY, payload: { review: generateReviewData } });

              addToast("리뷰가 복사되었어요");
            }}
          />
        </div>
      </div>
      <div className={styles.Bottom}>
        <Button text="다시생성" variant="secondary" onClick={handleRetryCreateReview} />
        <Button
          text="홈으로 가기"
          onClick={() => {
            gTagLogEvent("home_button_click", {
              category: "Button",
              label: "home_button",
            });
            handleOpen();
          }}
        />
      </div>

      <HomeNavigateConfirmModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
}
