import { useState } from "react";

import styles from "@/components/SelectTag/SelectTag.module.scss";
import TagSheet from "@/components/SelectTag/TagSheet/TagSheet";
import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import { useCreateReviewStore } from "@/store/useReviewStore";

const SelectTag = () => {
  const { navigateToSelectStyle } = useRoute();

  const { setHashTag } = useCreateReviewStore();

  const [selectedTagList, setSelectedTagList] = useState<string[]>([]);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [tagList, setTagList] = useState<string[]>([
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
  ]);

  const handleTagClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const tag = e.currentTarget.textContent || "";

    setSelectedTagList((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((selectedTag) => selectedTag !== tag)
        : [...prevSelectedTags, tag],
    );
  };

  const handleTagAdd = (newTag: string) => {
    setIsBottomSheetOpen(false);
    if (!tagList.includes(newTag)) {
      setTagList((prevTagList: string[]) => [...prevTagList, newTag]);
      setSelectedTagList((prevSelectedTags) => [...prevSelectedTags, newTag]);
    }
  };

  const handleSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  const handleNextClick = () => {
    setHashTag(selectedTagList);
    navigateToSelectStyle();
  };

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
          {tagList.map((tag) => (
            <Tag
              text={tag}
              key={tag}
              onClick={handleTagClick}
              isSelect={selectedTagList.includes(tag)}
            />
          ))}
          <Tag variant="add" onClick={() => setIsBottomSheetOpen(true)} />
        </div>
      </div>

      <div className={styles.Bottom}>
        <Button text="다음" onClick={handleNextClick} />
      </div>

      <TagSheet
        isOpen={isBottomSheetOpen}
        tagList={tagList}
        handleClose={handleSheetClose}
        handleTagAdd={handleTagAdd}
      />
    </div>
  );
};

export default SelectTag;
