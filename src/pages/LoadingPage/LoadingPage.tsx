import { useEffect } from "react";

import Navbar from "@/components/common/Navbar/Navbar";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import Icon from "@/components/ui/Icon/Icon";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import styles from "@/pages/LoadingPage/LoadingPage.module.scss";

import { useGenerateReviewStore } from "@/store/useCreateReviewStore";
import { useCreateReviewStore } from "@/store/useReviewStore";
import { useScanDataStore } from "@/store/useScanDataStore";

const LoadingPage = () => {
  const { send } = useAppBridge();

  const { navigateToReviewResult, navigateToHome } = useRoute();

  const { generateReviewData, resetGenerateReviewData } = useGenerateReviewStore();
  const { resetCreateReviewData } = useCreateReviewStore();
  const { resetScanData } = useScanDataStore();

  const handleNavigateToHome = () => {
    resetGenerateReviewData();
    resetCreateReviewData();
    resetScanData();
    navigateToHome();
  };

  useEffect(() => {
    send({
      type: AppBridgeMessageType.RECEIVE_GENERATED_REVIEW,
      payload: { result: String(generateReviewData) },
    });

    if (generateReviewData.length > 0) {
      navigateToReviewResult();
    }
  }, [generateReviewData]);

  return (
    <>
      <Navbar>
        <Navbar.RightButton onClick={handleNavigateToHome}>
          <Icon name="close" />
        </Navbar.RightButton>
      </Navbar>
      <div className={styles.CreateReviewLoading}>
        <div className={styles.Title}>
          <Text variant="titleM" color="gradient" align="center" as="h1">
            리뷰를 만들고 있어요
          </Text>
          <Text variant="bodyLg" color="secondary" align="center" as="h2">
            최대 30초까지 소요될 수 있어요
          </Text>
        </div>
        <div className={styles.Image}>
          <img src="/assets/img/img-loading.webp" alt="createReviewImg" />
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
