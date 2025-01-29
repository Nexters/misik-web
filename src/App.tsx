import styles from "./App.module.scss";

import Button from "@/components/ui/Button/Button";

const App = () => {
  return (
    <div className={styles.Test}>
      <Button variant="primary" text="정보가 맞아요" />
      <Button variant="secondary" text="정보가 맞아요" />
      <Button variant="disabled" text="다시 스캔하기" />
    </div>
  );
};

export default App;
