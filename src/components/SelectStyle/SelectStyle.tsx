import { useState } from "react";

import classNames from "classnames";

import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import styles from "@/components/SelectStyle/SelectStyle.module.scss";
import StyleExampleModal from "@/components/SelectStyle/StyleExampleModal";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";
import Text from "@/components/ui/Text/Text";

import { useOverlay } from "@/hooks/common/useOverlay";
import { useRoute } from "@/hooks/common/useRoute";

import { useCreateReviewStore } from "@/store/useReviewStore";

interface StyleProps {
  name: string;
  image: string;
}

const IMG_STYLE_DATA = [
  { name: "친근한 말투", image: "/assets/img/img-style-friendly.webp" },
  { name: "믿음직한 말투", image: "/assets/img/img-style-trust.webp" },
  { name: "귀여운 말투", image: "/assets/img/img-style-cute.webp" },
];

const STYLE_NAME_MAPPING: { [key: string]: string } = {
  "친근한 말투": "FRIENDLY",
  "유쾌한 말투": "CUTE",
  "귀여운 말투": "PROFESSIONAL",
};

const SelectStyle = () => {
  const { send } = useAppBridge();

  const { createReviewData, setReviewStyle } = useCreateReviewStore();

  const { navigateToLoading } = useRoute();

  const { isOpen, handleClose, handleOpen } = useOverlay();

  const [selectedStyle, setSelectedStyle] = useState(IMG_STYLE_DATA[0]);

  const { ocrText, hashTag } = createReviewData;

  const handleStyleClick = (style: StyleProps) => {
    setSelectedStyle((prevStyle) => (prevStyle.name === style.name ? IMG_STYLE_DATA[0] : style));
  };

  const handleCreateReview = () => {
    const mappedStyle = STYLE_NAME_MAPPING[selectedStyle.name];

    if (mappedStyle) {
      setReviewStyle(mappedStyle);
    }

    send({
      type: AppBridgeMessageType.CREATE_REVIEW,
      payload: { ocrText, hashTag, reviewStyle: mappedStyle },
    });

    navigateToLoading();
  };

  return (
    <div className={styles.SelectStyle}>
      <div className={styles.Top}>
        <div className={styles.Title}>
          <Text variant="titleM" color="purpleGradient" align="center" as="h1">
            어떤 말투로 작성할까요?
          </Text>
          <Text variant="bodyLg" color="secondary" align="center" as="h2">
            선택지에 따라 리뷰 말투가 달라져요
          </Text>
        </div>

        <div className={styles.ExampleButtonBox}>
          <button onClick={handleOpen}>
            <Text variant="bodyXsm" color="secondary">
              말투 예시보기
            </Text>
          </button>
        </div>
      </div>

      <div className={styles.Image}>
        <img src={selectedStyle.image} alt={`${selectedStyle.name}-img`} loading="lazy" />
      </div>

      <div className={styles.Bottom}>
        <div className={styles.StyleButtonList}>
          {IMG_STYLE_DATA.map((style) => (
            <div
              key={style.name}
              className={classNames({
                [styles.isSelected]: selectedStyle.name === style.name,
              })}
              onClick={() => handleStyleClick(style)}
            >
              <Text
                color={selectedStyle.name === style.name ? "white" : "secondary"}
                variant="bodyM"
              >
                {style.name}
              </Text>
              <Icon name={selectedStyle.name === style.name ? "checkCircle" : "emptyCircle"} />
            </div>
          ))}
        </div>

        <Button text="리뷰 만들기" onClick={handleCreateReview} />
      </div>

      <StyleExampleModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default SelectStyle;
