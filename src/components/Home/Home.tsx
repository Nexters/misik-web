import styles from "@/components/Home/Home.module.scss";
import IconButton from "@/components/ui/IconButton/IconButton";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.HomeBottom}>
        <IconButton text="갤러리" iconName="gallery" />
        <IconButton text="카메라" iconName="camera" />
      </div>
    </div>
  );
};

export default Home;
