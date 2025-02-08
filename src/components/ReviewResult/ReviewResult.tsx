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
    [IMG_STYLE_DATA[1].name]:
      "오늘 처음으로 방문했는데 특별한 메뉴가 있어서 너무 좋았어요! 빵이랑 샌드위치 모두 맛있었고 커피도 제 입맛에 딱 맞았어요.. 매장도 깔끔하고 직원분들도 친절하셔서 편하게 즐길 수 있었네요.. 자주 이용할 것 같아요!!",
    [IMG_STYLE_DATA[2].name]:
      "다양한 음료와 베이커리 제품이 있는 카페에서 맛있는 시간을 보냈어요. 특히 특별한 메뉴인 '버터 리스크림빵' 과 '에그듬뿍모닝샌드위치' 가 인상적이었어요. 커피 맛도 좋아서 만족스러웠어요. 마지막으로, 분위기나 서비스도 매우 좋았어요.",
    [IMG_STYLE_DATA[3].name]:
      "여기 너무 좋아용! 특별한 메뉴들도 많고 맛도 있어서 자주 방문하는데 오늘도 역시나 맛있네용😊💕 직원분들도 친절하시고 매장도 항상 깨끗해서 더 기분 좋게 먹을 수 있는 것 같아용ᄒᄒ 커피랑 디저트 모두 맛있어서 친구들이랑 오기에도 딱이에용👍🏻 앞으로도 자주 올게용!!️",
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
