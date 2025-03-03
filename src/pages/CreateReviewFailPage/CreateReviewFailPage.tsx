import Button from "@/components/ui/Button/Button";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import styles from "@/pages/CreateReviewFailPage/CreateReviewFailPage.module.scss";

import { useGenerateReviewStore } from "@/store/useCreateReviewStore";
import { useCreateReviewStore } from "@/store/useReviewStore";
import { useScanDataStore } from "@/store/useScanDataStore";

import { gTagLogEvent } from "@/utils/gtag";

const CreateReviewFailPage = () => {
  const { navigateToHome } = useRoute();

  const { resetGenerateReviewData } = useGenerateReviewStore();
  const { resetCreateReviewData } = useCreateReviewStore();
  const { resetScanData } = useScanDataStore();

  const handleNavigateHome = () => {
    gTagLogEvent("create_review_fail_home_button");
    resetGenerateReviewData();
    resetCreateReviewData();
    resetScanData();
    navigateToHome();
  };

  return (
    <div className={styles.CreateReviewFail}>
      <div className={styles.Top}>
        <Text color="primary" variant="titleM" align="center" as="h1">
          리뷰 생성에 실패했어요
        </Text>
        <Text color="secondary" variant="bodyLg" align="center" as="h2">
          {`네트워크 오류로 인해 리뷰 생성에\n실패했어요. 다시 시도해주세요.`}
        </Text>
      </div>

      <div className={styles.Image}>
        <img src="/assets/img/img-graphic-logo-blur.webp" alt="createReviewFailImg" />
      </div>
      <Button text="홈으로 가기" onClick={handleNavigateHome} />
    </div>
  );
};

export default CreateReviewFailPage;
