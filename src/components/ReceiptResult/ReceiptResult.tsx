import { useEffect } from "react";

import confetti from "canvas-confetti";

import styles from "@/components/ReceiptResult/ReceiptResult.module.scss";
import Button from "@/components/ui/Button/Button";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

import type { Options as ConfettiOptions } from "canvas-confetti";

const ReceiptResult = () => {
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
    <div className={styles.ReceiptResult}>
      <div className={styles.Top}>
        <div className={styles.ReceiptImage}>
          <img src="/src/assets/img/img-style-cute-circle.png" alt="mainLogo" />
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
          <IconButton text="복사하기" iconName="paste" size="sm" />
        </div>
      </div>
      <div className={styles.Bottom}>
        <Button text="다시생성" variant="secondary" />
        <Button text="홈으로 가기" />
      </div>
    </div>
  );
};

export default ReceiptResult;
