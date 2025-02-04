import styles from "@/components/CreateReviewLoading/CreateReviewLoading.module.scss";
import Text from "@/components/ui/Text/Text";

const CreateReviewLoading = () => {
  return (
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
  );
};

export default CreateReviewLoading;
