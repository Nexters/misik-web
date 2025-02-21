import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";
import Input from "@/components/ui/Input/Input";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import styles from "@/pages/ReceiptEditPage/ReceiptEditPage.module.scss";

import { useCreateReviewStore } from "@/store/useReviewStore";
import { useScanDataStore } from "@/store/useScanDataStore";

const ReceiptEditPage = () => {
  const { navigateToHome, navigateToSelectTag } = useRoute();

  const { scanData, resetScanData } = useScanDataStore();

  const { setOcrText, resetCreateReviewData } = useCreateReviewStore();

  const [formData, setFormData] = useState<{ key: string; value: string }[]>([]);
  const [focusState, setFocusState] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (
      typeof scanData !== "string" &&
      Array.isArray(scanData.parsed) &&
      scanData.parsed.length > 0
    ) {
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

  const handleInputChange = (index: number, value: string) => {
    setFormData((prevData) =>
      prevData.map((item, idx) => (idx === index ? { ...item, value } : item)),
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

  const handleNavigateToHome = () => {
    resetScanData();
    resetCreateReviewData();
    navigateToHome();
  };

  return (
    <div className={styles.ReceiptEdit}>
      <div className={styles.Container}>
        <Navbar className={styles.Navbar}>
          <Navbar.LeftButton onClick={handleNavigateToHome}>
            <Icon name="leftArrow" />
          </Navbar.LeftButton>
        </Navbar>

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
                <Text variant="bodyXsm" color="secondary">
                  {data.key}
                </Text>
                <Input
                  placeholder={`${data.key} 입력`}
                  value={data.value}
                  onFocus={() => handleFocus(index.toString())}
                  onBlur={() => handleBlur(index.toString())}
                  isFocus={focusState[index.toString()] || false}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.Bottom}>
        {Object.values(focusState).some((isFocus) => isFocus) ? (
          <Button
            key="edit"
            text="수정하기"
            disabled={formData.some((item) => Object.values(item).some((value) => !value))}
          />
        ) : (
          <>
            <Button
              key="scan"
              text="다시 스캔하기"
              variant="secondary"
              onClick={handleNavigateToHome}
            />
            <Button
              key="confirm"
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

export default ReceiptEditPage;
