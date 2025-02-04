import styles from "@/components/Home/Home.module.scss";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

const Home = () => {
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
        <IconButton text="갤러리" iconName="gallery" />
        <IconButton text="카메라" iconName="camera" />
      </div>
    </div>
  );
};

export default Home;
