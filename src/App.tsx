import styles from "./App.module.scss";

import Button from "@/components/ui/Button/Button";
import IconButton from "@/components/ui/IconButton/IconButton";

const App = () => {
  return (
    <div className={styles.Test}>
      <Button variant="primary" text="정보가 맞아요" />
      <Button variant="secondary" text="정보가 맞아요" />
      <Button variant="disabled" text="다시 스캔하기" />
      <div className={styles.Test2}>
        <IconButton text="갤러리" iconName="gallery" />
        <IconButton text="카메라" iconName="camera" />
      </div>
      <div className={styles.Test3}>
        <IconButton size="sm" text="복사하기" iconName="paste" />
      </div>
    </div>
  );
};

export default App;
