import { useEffect, useState } from "react";

import styles from "@/components/ReceiptEdit/ReceiptEdit.module.scss";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import { useCreateReviewStore } from "@/store/useReviewStore";
import { useScanDataStore } from "@/store/useScanDataStore";

const useKeyboardAvoidance = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const handleVisualViewportChange = () => {
      const isKeyboardVisible = !!(
        window.visualViewport && window.visualViewport.height < window.innerHeight
      );
      setKeyboardVisible(isKeyboardVisible);

      if (isKeyboardVisible) {
        setKeyboardHeight(
          window.visualViewport ? window.innerHeight - window.visualViewport.height : 0,
        );
      } else {
        setKeyboardHeight(0);
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleVisualViewportChange);
      handleVisualViewportChange();
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleVisualViewportChange);
      }
    };
  }, []);

  return { keyboardVisible, keyboardHeight };
};

const ReceiptEdit = () => {
  const { keyboardVisible, keyboardHeight } = useKeyboardAvoidance();

  const { navigateToHome, navigateToSelectTag } = useRoute();

  const { scanData, resetScanData } = useScanDataStore();

  const { setOcrText } = useCreateReviewStore();

  const [formData, setFormData] = useState<{ key: string; value: string }[]>([]);
  const [focusState, setFocusState] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (Array.isArray(scanData.parsed) && scanData.parsed.length > 0) {
      setFormData(scanData.parsed);

      const initialFocusState = scanData.parsed.reduce(
        (acc: { [key: string]: boolean }, data: { key: string; value: string }) => {
          acc[data.key] = false;
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

  const handleInputChange = (key: string, value: string) => {
    setFormData((prevData) =>
      prevData.map((item) => (item.key === key ? { ...item, value } : item)),
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
                  onChange={(e) => handleInputChange(data.key, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={styles.Bottom}
        style={{
          marginBottom: keyboardVisible ? `${keyboardHeight}px` : "0",
        }}
      >
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
