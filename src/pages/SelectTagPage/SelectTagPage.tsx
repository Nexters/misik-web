import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar/Navbar";
import TagSheet from "@/components/TagSheet/TagSheet";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";
import Tag from "@/components/ui/Tag/Tag";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import styles from "@/pages/SelectTagPage/SelectTagPage.module.scss";

import { useCreateReviewStore } from "@/store/useReviewStore";

import { gTagLogEvent } from "@/utils/gtag";

const SelectTagPage = () => {
  const { navigateToSelectStyle, navigateToBack } = useRoute();

  const { createReviewData, setHashTag, setTagList } = useCreateReviewStore();

  const { tagList, hashTag } = createReviewData;

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  useEffect(() => {
    setHashTag(hashTag);
  }, [hashTag, setHashTag]);

  const handleTagClick = (tag: string) => {
    const newSelectedTags = hashTag.includes(tag)
      ? hashTag.filter((selectedTag) => selectedTag !== tag)
      : [...hashTag, tag];

    setHashTag(newSelectedTags);
  };

  const handleTagAdd = (newTag: string) => {
    setIsBottomSheetOpen(false);
    setTagList([...tagList, newTag]);
    setHashTag([...hashTag, newTag]);
  };

  const handleSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  const handleNextClick = () => {
    navigateToSelectStyle();
  };

  return (
    <>
      <Navbar>
        <Navbar.LeftButton onClick={navigateToBack}>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>

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
                onClick={() => handleTagClick(tag)}
                isSelect={hashTag.includes(tag)}
              />
            ))}
            <Tag
              variant="add"
              onClick={() => {
                gTagLogEvent("add_tag_button");
                setIsBottomSheetOpen(true);
              }}
            />
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
    </>
  );
};

export default SelectTagPage;
