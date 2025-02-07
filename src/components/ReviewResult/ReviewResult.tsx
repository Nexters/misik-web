import { useEffect } from "react";

import confetti from "canvas-confetti";

import HomeNavigateConfirmModal from "@/components/HomeNavigateConfirmModal/HomeNavigateConfirmModal";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import styles from "@/components/ReviewResult/ReviewResult.module.scss";
import { IMG_STYLE_DATA } from "@/components/SelectStyle/SelectStyle";
import Button from "@/components/ui/Button/Button";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";
import Toast from "@/components/ui/Toast/Toast";

import { useOverlay } from "@/hooks/common/useOverlay";
import useToast from "@/hooks/common/useToast";

import { useCreateReviewStore } from "@/store/useReviewStore";

import type { Options as ConfettiOptions } from "canvas-confetti";

const ReviewResult = () => {
  const { send } = useAppBridge();

  const { isOpen, handleClose, handleOpen } = useOverlay();
  const { isToast } = useToast(1000);

  const { createReviewData } = useCreateReviewStore();

  const { reviewStyle } = createReviewData;
  const dummyDataMap: Record<string, string> = {
    [IMG_STYLE_DATA[1].name]: "1",
    [IMG_STYLE_DATA[2].name]: "2",
    [IMG_STYLE_DATA[3].name]: "3",
  };

  const getDummyText = (reviewStyle: string): string => {
    return dummyDataMap[reviewStyle];
  };
  const reviewText = getDummyText(reviewStyle.name);

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

  useEffect(() => {
    handleConfetti();
  }, []);

  return (
    <div className={styles.ReviewResult}>
      <div className={styles.Top}>
        <div className={styles.ReceiptImage}>
          <img
            src={`/assets/img/img-${reviewStyle.image}-circle.png`}
            alt={`${reviewStyle.name}-img`}
          />
        </div>
        <div className={styles.TitleBox}>
          <Text variant="titleM" color="gradient" as="h1" truncated>
            리뷰를 만들었어요!
          </Text>
        </div>

        <Text variant="bodyLg" color="primary">
          {reviewText}
        </Text>
        <div className={styles.IconBtn}>
          <IconButton
            text="복사하기"
            iconName="paste"
            size="sm"
            onClick={() =>
              send({ type: AppBridgeMessageType.COPY, payload: { review: reviewText } })
            }
          />
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
