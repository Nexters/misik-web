import styles from "./App.module.scss";

import Button from "@/components/ui/Button/Button";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

const App = () => {
  return (
    <div className={styles.Test}>
      <Button variant="primary" text="정보가 맞아요" />
      <Button variant="secondary" text="정보가 맞아요" />
      <Button variant="tertiary" text="다시 스캔하기" />
      <div className={styles.Test2}>
        <IconButton text="갤러리" iconName="gallery" />
        <IconButton text="카메라" iconName="camera" />
      </div>
      <div className={styles.Test3}>
        <IconButton size="sm" text="복사하기" iconName="paste" />
      </div>
      <div className={styles.Test3}>
        <Text align="center" color="gradient" size="lg" weight="bold">
          영수증으로
        </Text>
        <Text align="center" color="gradient" size="lg" weight="bold">
          AI 음식 리뷰 남겨요
        </Text>
        <Text color="primary" weight="medium">
          손쉬운 음식 리뷰 작성
        </Text>
      </div>
    </div>
  );
};

export default App;
