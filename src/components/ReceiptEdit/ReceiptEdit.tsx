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

  const [formData, setFormData] = useState<{ [key: string]: string }[]>([
    { test: "abc" },
    { test2: "aadsasf" },
  ]);
  const [focusState, setFocusState] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (Array.isArray(scanData) && scanData.length > 0) {
      setFormData(scanData);

      const initialFocusState = scanData.reduce(
        (acc, data) => {
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
      prevData.map((item, idx) => (idx === index ? { ...item, [key]: value } : item)),
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
            {formData.length > 0 &&
              Object.keys(formData[0]).length > 0 &&
              formData[0][Object.keys(formData[0])[0]]}
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
              {Object.keys(data).map((key) => (
                <div key={key} className={styles.InfoItem}>
                  <Text variant="bodyXsm" color="secondary">
                    {key}
                  </Text>
                  <Input
                    placeholder={`${key} 입력`}
                    value={data[key]}
                    onFocus={() => handleFocus(key)}
                    onBlur={() => handleBlur(key)}
                    isFocus={focusState[key] || false}
                    onChange={(e) => handleInputChange(index, key, e.target.value)}
                  />
                </div>
              ))}
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
