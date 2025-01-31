import styles from "@/components/ReceiptEdit/ReceiptEdit.module.scss";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Text from "@/components/ui/Text/Text";

const ReceiptEdit = () => {
  const placeName = "청담커피 앤 토스트";

  return (
    <div className={styles.ReceiptEdit}>
      <div className={styles.Top}>
        <Text variant="titleM" color="primary" align="center" as="h1">
          {`${placeName}에\n다녀오셨네요!`}
        </Text>
        <div className={styles.InfoList}>
          <div className={styles.InfoItem}>
            <p>가게명</p>
            <Input placeholder="가게 이름" />
          </div>
        </div>
      </div>

      <div className={styles.Bottom}>
        <Button text="다시 스캔하기" variant="secondary" />
        <Button text="정보가 맞아요" />
      </div>
    </div>
  );
};

export default ReceiptEdit;
