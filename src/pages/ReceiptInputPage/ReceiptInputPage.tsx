import { useState, useEffect } from "react";

import Navbar from "@/components/common/Navbar/Navbar";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";
import Input from "@/components/ui/Input/Input";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import styles from "@/pages/ReceiptInputPage/ReceiptInputPage.module.scss";

import { useCreateReviewStore } from "@/store/useReviewStore";
import { useScanDataStore } from "@/store/useScanDataStore";

const ReceiptInputPage = () => {
  const { navigateToHome, navigateToSelectTag } = useRoute();

  const { resetScanData } = useScanDataStore();

  const { setOcrText } = useCreateReviewStore();

  const [formData, setFormData] = useState([
    { key: "place", value: "" },
    { key: "menu", value: "" },
  ]);
  const [focusState, setFocusState] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const initialFocusState = formData.reduce(
      (acc, item) => ({ ...acc, [item.key]: false }),
      {} as { [key: string]: boolean },
    );
    setFocusState(initialFocusState);
  }, []);

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

  const handleHomeClick = () => {
    resetScanData();
    navigateToHome();
  };

  return (
    <>
      <Navbar>
        <Navbar.LeftButton onClick={handleHomeClick}>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>

      <div className={styles.ReceiptInput}>
        <div className={styles.Top}>
          <Text variant="titleM" color="primary" align="center" as="h1">
            {formData.find((item) => item.key === "place")?.value
              ? `${formData.find((item) => item.key === "place")?.value}에`
              : "영수증 정보를"}
          </Text>
          <Text variant="titleM" color="primary" as="h1" align="center">
            {formData.find((item) => item.key === "place")?.value
              ? "다녀오셨네요!"
              : "입력해주세요!"}
          </Text>

          <div className={styles.InfoList}>
            {formData.map(({ key, value }) => (
              <div className={styles.InfoItem} key={key}>
                <Text variant="bodyXsm" color="secondary">
                  {key === "place" ? "가게명" : "메뉴명"}
                </Text>
                <Input
                  placeholder={key === "place" ? "가게명을 입력해주세요" : "메뉴명을 입력해주세요"}
                  value={value}
                  onFocus={() => handleFocus(key)}
                  onBlur={() => handleBlur(key)}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.Bottom}>
          {Object.values(focusState).some((isFocus) => isFocus) ? (
            <Button key="edit" text="수정하기" />
          ) : (
            <Button
              key="confirm"
              text="다음"
              disabled={formData.some((item) => Object.values(item).some((value) => !value))}
              onClick={handleInfoRightClick}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ReceiptInputPage;
