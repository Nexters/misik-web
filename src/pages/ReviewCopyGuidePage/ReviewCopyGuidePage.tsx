import Navbar from "@/components/Navbar/Navbar";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import styles from "@/pages/ReviewCopyGuidePage/ReviewCopyGuidePage.module.scss";

import { useGenerateReviewStore } from "@/store/useCreateReviewStore";
import { useScanDataStore } from "@/store/useScanDataStore";

import { gTagLogEvent } from "@/utils/gtag";

const ReviewCopyGuidePage = () => {
  const { send } = useAppBridge();
  const { generateReviewData, setGenerateReviewData, resetGenerateReviewData } =
    useGenerateReviewStore();
  const { navigateToBack, navgateToReceiptInput } = useRoute();

  const { resetScanData } = useScanDataStore();

  const handleNavigateToHome = () => {
    gTagLogEvent("recognition_fail_close_button_click", {
      category: "Button",
      label: "recognition_fail_close_button",
    });

    resetScanData();
    navigateToHome();
  };

  const handleNavgateToReceiptInput = () => {
    gTagLogEvent("receipt_input_button_click", {
      category: "Button",
      label: "receipt_input_button",
    });

    resetScanData();
    navgateToReceiptInput();
  };

  return (
    <>
      <Navbar>
        <Navbar.LeftButton onClick={navigateToBack}>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>

      <div className={styles.RecognitionFail}>
        <div className={styles.Title}>
          <Text color="primary" variant="titleM" align="center" as="h1">
            생성된 리뷰를
          </Text>
          <Text color="primary" variant="titleM" align="center" as="h1">
            복사해서 사용할땐
          </Text>
        </div>
        <div className={styles.ReviewGuideList}>
          <Text className={styles.ReviewGuideNum} color="secondary" as="p">
            1
          </Text>
          <div>
            <Text variant="bodyXsm"> 생성된 리뷰를 복사해서</Text>
            <div className={styles.ReviewGuideItem}>
              {/* <Text>{generateReviewData}</Text> */}
              <Text>생성된 리뷰의 첫부분,텍스트필드 영역 만큼 보여짐,말줄…</Text>
              <Button
                text="홈으로 가기"
                variant="secondary"
                className={styles.btn}
                onClick={handleNavgateToReceiptInput}
              />
            </div>
          </div>
        </div>
        <div className={styles.Bottom}>
          <Button text="홈으로 가기" variant="secondary" onClick={handleNavgateToReceiptInput} />
        </div>
      </div>
    </>
  );
};

export default ReviewCopyGuidePage;
