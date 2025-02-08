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
      "여기 토스트 맛집이네요..! 특히 카야토스트랑 음료 세트 가성비 좋아요… 특별한 메뉴로는 100% 리얼 토마토 생과일 주스 추천해요!! 가격 대비 신선하고 맛있어요 … 매장도 깔끔하고 직원들도 친절하네요 자주 들릴 것 같아요 .",
    [IMG_STYLE_DATA[2].name]:
      "카야토스트와 음료 세트인 특별한 메뉴가 있는 청담커피 앤 토스트에서 맛있는 간식을 먹었습니다. 신선한 재료로 만든 100% 리얼 토마토 생과일 주스도 함께 주문했는데, 정말 맛있었어요! 매장 분위기도 좋고 직원분들도 친절하셔서 더욱 즐거운 시간을 보낼 수 있었습니다.",
    [IMG_STYLE_DATA[3].name]:
      "🤗 청담커피 앤 토스트에서 먹은 카야토스트랑 음료 세트 너무 맛있었어용! 특히 100% 리얼 토마토 생과일 주스는 정말 신선했어요😊 가격도 저렴하고 특별한 메뉴들이 있어서 자주 들릴 것 같아용!! 사장님도 친절하시고 매장 분위기도 좋았어용ᄒᄒ 추천드려용👍🏻",
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
