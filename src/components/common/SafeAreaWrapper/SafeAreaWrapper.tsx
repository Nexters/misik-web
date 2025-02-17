import styles from "@/components/common/SafeAreaWrapper/SafeAreaWrapper.module.scss";

const SafeAreaWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.SafeArea}>{children}</div>;
};

export default SafeAreaWrapper;
