import styles from "@/components/Home/Home.module.scss";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

const Home = () => {
  // 이후 네이티브 라우팅으로 변경
  const { navigateToReceiptEdit, navigateToRecognitionFail } = useRoute();

  return (
    <div className={styles.Home}>
      <div className={styles.HomeTitle}>
        <Text variant="titleLg" color="gradient" align="center" as="h1">
          {`영수증으로\nAI 음식 리뷰 남겨요`}
        </Text>
        <Text variant="bodyLg" color="secondary" align="center">
          손쉬운 음식 리뷰 작성
        </Text>
      </div>
      <div className={styles.HomeImage}>
        <img src="/assets/img/img-graphic-logo.png" alt="mainLogo" />
      </div>
      <div className={styles.HomeBottom}>
        <IconButton text="갤러리" iconName="gallery" onClick={navigateToRecognitionFail} />
        <IconButton text="카메라" iconName="camera" onClick={navigateToReceiptEdit} />
      </div>
    </div>
  );
};

export default Home;
