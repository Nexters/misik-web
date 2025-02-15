import { useEffect, useState } from "react";

import styles from "@/components/ReceiptEdit/ReceiptEdit.module.scss";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import { useCreateReviewStore } from "@/store/useReviewStore";
import { useScanDataStore } from "@/store/useScanDataStore";

const ReceiptEdit = () => {
  const { navigateToHome, navigateToSelectTag } = useRoute();

  const { scanData, resetScanData } = useScanDataStore();

  const { setOcrText } = useCreateReviewStore();

  const [formData, setFormData] = useState<{ key: string; value: string }[]>([]);
  const [focusState, setFocusState] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (Array.isArray(scanData.parsed) && scanData.parsed.length > 0) {
      setFormData(scanData.parsed);

      const initialFocusState = scanData.parsed.reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (acc: any, data: any) => {
          const keys = Object.keys(data);
          keys.forEach((key) => (acc[key] = false));
          return acc;
        },
        {} as { [key: string]: boolean },
      );
      setFocusState(initialFocusState);
    }
  }, [scanData]);

  const handleFocus = (key: string) => {
    setFocusState((prevState) => ({ ...prevState, [key]: true }));
  };

  const handleBlur = (key: string) => {
    setFocusState((prevState) => ({ ...prevState, [key]: false }));
  };

  const handleInputChange = (index: number, key: string, value: string) => {
    setFormData((prevData) =>
      prevData.map((item, idx) => {
        if (idx === index) {
          return { ...item, [key]: value };
        }
        return item;
      }),
    );
  };

  const handleInfoRightClick = () => {
    const formattedText =
      formData &&
      formData
        .map((item) =>
          Object.entries(item)
            .map(([key, value]) => `${key} ${value}`)
            .join(", "),
        )
        .join(" ");

    setOcrText(formattedText);

    navigateToSelectTag();
  };

  const handleReScanClick = () => {
    resetScanData();
    navigateToHome();
  };

  return (
    <div className={styles.ReceiptEdit}>
      <div className={styles.Top}>
        <div className={styles.TitleBox}>
          <Text variant="titleM" color="primary" as="h1" truncated>
            {formData.length > 0 && Object.keys(formData[0]).length > 0 && formData[0].value}
          </Text>
          <Text variant="titleM" color="primary" as="h1">
            에
          </Text>
        </div>
        <Text variant="titleM" color="primary" as="h1" align="center">
          다녀오셨네요!
        </Text>

        <div className={styles.InfoList}>
          {formData.map((data, index) => (
            <div key={index} className={styles.InfoItem}>
              <div className={styles.InfoItem}>
                <Text variant="bodyXsm" color="secondary">
                  {data.key}
                </Text>
                <Input
                  placeholder={`${data.key} 입력`}
                  value={data.value}
                  onFocus={() => handleFocus(data.key)}
                  onBlur={() => handleBlur(data.key)}
                  isFocus={focusState[data.key] || false}
                  onChange={(e) => handleInputChange(index, data.key, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.Bottom}>
        {Object.values(focusState).some((isFocus) => isFocus) ? (
          <Button
            text="수정하기"
            disabled={formData.some((item) => Object.values(item).some((value) => !value))}
          />
        ) : (
          <>
            <Button text="다시 스캔하기" variant="secondary" onClick={handleReScanClick} />
            <Button
              text="정보가 맞아요"
              disabled={formData.some((item) => Object.values(item).some((value) => !value))}
              onClick={handleInfoRightClick}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ReceiptEdit;
