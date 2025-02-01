import styles from "@/components/SelectTag/SelectTag.module.scss";
import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import Text from "@/components/ui/Text/Text";

const TAG_LIST = [
  "음식이 맛있어요",
  "양이 많아요",
  "가성비가 좋아요",
  "메뉴 구성이 알차요",
  "매장이 넓어요",
  "단체모임 하기 좋아요",
  "뷰가 좋아요",
  "아늑해요",
  "분위기가 좋아요",
  "친절해요",
  "매장이 청결해요",
];

const SelectTag = () => {
  return (
    <div className={styles.SelectTag}>
      <div className={styles.Top}>
        <div className={styles.Title}>
          <Text variant="titleM" color="primary">
            어떠셨나요?
          </Text>
          <Text variant="bodySm" color="tertiary">
            복수 가능
          </Text>
        </div>
        <div className={styles.TagList}>
          {TAG_LIST.map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
          <Tag variant="add" />
        </div>
      </div>

      <div className={styles.Bottom}>
        <Button text="다음" />
      </div>
    </div>
  );
};

export default SelectTag;
