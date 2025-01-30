import { useState } from "react";

import styles from "@/components/Home/Home.module.scss";
import IconButton from "@/components/ui/IconButton/IconButton";
import Input from "@/components/ui/Input/Input";
import Text from "@/components/ui/Text/Text";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.Home}>
      <div className={styles.HomeTitle}>
        <Text size="xl" color="gradient" weight="bold" align="center" as="h1">
          {`영수증으로\nAI 음식 리뷰 남겨요`}
        </Text>
        <Text color="secondary" weight="medium" align="center">
          손쉬운 음식 리뷰 작성
        </Text>
      </div>
      <Input
        type="text"
        placeholder="가게명을 입력해주세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={styles.HomeImage}>
        <img src="/src/assets/img/img-graphic-logo.png" alt="mainLogo" />
      </div>
      <div className={styles.HomeBottom}>
        <IconButton text="갤러리" iconName="gallery" />
        <IconButton text="카메라" iconName="camera" />
      </div>
    </div>
  );
};

export default Home;
