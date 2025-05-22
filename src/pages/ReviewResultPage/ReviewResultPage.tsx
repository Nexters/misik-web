import { useEffect, useState } from "react";

import confetti from "canvas-confetti";

import HomeNavigateConfirmModal from "@/components/HomeNavigateConfirmModal/HomeNavigateConfirmModal";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import Button from "@/components/ui/Button/Button";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

import { useOverlay } from "@/hooks/common/useOverlay";
import { useRoute } from "@/hooks/common/useRoute";

import styles from "@/pages/ReviewResultPage/ReviewResultPage.module.scss";

import { useGenerateReviewStore } from "@/store/useCreateReviewStore";
import { useCreateReviewStore } from "@/store/useReviewStore";

import { gTagLogEvent } from "@/utils/gtag";

import type { Options as ConfettiOptions } from "canvas-confetti";

export default function ReviewResultPage() {
  const { send } = useAppBridge();

  const { createReviewData } = useCreateReviewStore();
  const { generateReviewData, setGenerateReviewData, resetGenerateReviewData } =
    useGenerateReviewStore();
  const [text, setText] = useState(generateReviewData);

  const {
    navigateToCreateReviewFail,
    navigateToLoading,
    navigateToSelectStyle,
    navigateToReviewCopyGuide,
  } = useRoute();

  const { isOpen, handleClose, handleOpen } = useOverlay();


  const { ocrText, hashTag, reviewStyle } = createReviewData;

  const [isEdit, setIsEdit] = useState<boolean>(false);

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

  const handleSelectStyle = () => {
    navigateToSelectStyle();
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

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleCompleteEdit = () => {
    setGenerateReviewData(text);
  };

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
        {isEdit ? (
          <textarea
            name=""
            id=""
            value={text}
            onChange={handleTextChange}
            className={styles.TextBox}
          ></textarea>
        ) : (
          <Text variant="bodyLg" color="primary">
            {generateReviewData}
          </Text>
        )}

        <div className={styles.IconBtn}>
          <IconButton
            text="수정"
            size="sm"
            variant="secondary"
            onClick={() => {
              setIsEdit(true);
            }}
            iconName={"edit"}
          />
          <IconButton
            text="말투"
            size="sm"
            variant="secondary"
            onClick={handleSelectStyle}
            iconName={"again"}
          />

          <IconButton
            text="복사하기"
            iconName="paste"
            size="sm"
            onClick={() => {
              gTagLogEvent("copy_button_click", {
                category: "Button",
                label: "copy_button",
              });
              navigateToReviewCopyGuide();
            }}
          />
        </div>
      </div>
      <div className={styles.Bottom}>
        <Button text="다시생성" variant="secondary" onClick={handleRetryCreateReview} />
        {isEdit ? (
          <Button
            text="완료"
            onClick={() => {
              handleCompleteEdit();
              setIsEdit(false);
            }}
          />
        ) : (
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
        )}
      </div>

      <HomeNavigateConfirmModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
}
