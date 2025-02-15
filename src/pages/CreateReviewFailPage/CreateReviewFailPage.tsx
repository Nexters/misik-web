import Button from "@/components/ui/Button/Button";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import styles from "@/pages/CreateReviewFailPage/CreateReviewFailPage.module.scss";

const CreateReviewFailPage = () => {
  const { navigateToHome } = useRoute();

  return (
    <div className={styles.CreateReviewFail}>
      <div className={styles.Top}>
        <Text color="primary" variant="titleM" align="center" as="h1">
          리뷰 생성에 실패했어요
        </Text>
        <Text color="secondary" variant="bodyLg" align="center" as="h2">
          {`네트워크 오류로 인해 리뷰 생성에\n실패했어요. 다시 시도해주세요.`}
        </Text>

        <div className={styles.Image}>
          <img src="/assets/img/img-graphic-logo-blur.png" alt="createReviewFailImg" />
        </div>
      </div>
      <Button text="홈으로 가기" onClick={navigateToHome} />
    </div>
  );
};

export default CreateReviewFailPage;
