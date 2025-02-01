import { useState } from "react";

import styles from "@/components/ReceiptEdit/ReceiptEdit.module.scss";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Text from "@/components/ui/Text/Text";

import { useFocus } from "@/hooks/common/useFocus";

const ReceiptEdit = () => {
  const [placeName, setPlaceName] = useState("청담커피 앤 토스트");
  const [foodName, setFoodName] = useState("카야토스트+음료세트");

  const {
    isFocus: isPlaceFocus,
    onFocus: handlePlaceFocus,
    onBlur: handlePlaceBlur,
  } = useFocus({});
  const { isFocus: isFoodFocus, onFocus: handleFoodFocus, onBlur: handleFoodBlur } = useFocus({});

  return (
    <div className={styles.ReceiptEdit}>
      <div className={styles.Top}>
        <div className={styles.TitleBox}>
          <Text variant="titleM" color="primary" as="h1" truncated>
            {placeName}
          </Text>
          <Text variant="titleM" color="primary" as="h1">
            에
          </Text>
        </div>
        <Text variant="titleM" color="primary" as="h1" align="center">
          다녀오셨네요!
        </Text>

        <div className={styles.InfoList}>
          <div className={styles.InfoItem}>
            <Text variant="bodyXsm" color="secondary">
              가게명
            </Text>
            <Input
              placeholder="가게 이름"
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
              onFocus={handlePlaceFocus}
              onBlur={handlePlaceBlur}
              isFocus={isPlaceFocus}
            />
          </div>
          <div className={styles.InfoItem}>
            <Text variant="bodyXsm" color="secondary">
              음식명
            </Text>
            <Input
              placeholder="음식 이름"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              onFocus={handleFoodFocus}
              onBlur={handleFoodBlur}
              isFocus={isFoodFocus}
            />
          </div>
        </div>
      </div>

      <div className={styles.Bottom}>
        {isPlaceFocus || isFoodFocus ? (
          <Button text="수정하기" disabled={!placeName || !foodName} />
        ) : (
          <>
            <Button text="다시 스캔하기" variant="secondary" />
            <Button text="정보가 맞아요" disabled={!placeName || !foodName} />
          </>
        )}
      </div>
    </div>
  );
};

export default ReceiptEdit;
