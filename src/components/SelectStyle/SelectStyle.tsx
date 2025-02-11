import { useState } from "react";

import classNames from "classnames";

import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import styles from "@/components/SelectStyle/SelectStyle.module.scss";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import { useGenerateReviewStore } from "@/store/useGenerateReviewStore";
import { useCreateReviewStore } from "@/store/useReviewStore";

interface StyleProps {
  name: string;
  image: string;
}

const IMG_STYLE_DATA = [
  { name: "친절한 미식가", image: "/assets/img/img-style-friendly.png" },
  { name: "믿음직한 미식가", image: "/assets/img/img-style-trust.png" },
  { name: "귀여운 미식가", image: "/assets/img/img-style-cute.png" },
];

const STYLE_NAME_MAPPING: { [key: string]: string } = {
  "친절한 미식가": "FRIENDLY",
  "귀여운 미식가": "CUTE",
  "믿음직한 미식가": "PROFESSIONAL",
};

const SelectStyle = () => {
  const { send } = useAppBridge();

  const { createReviewData, setReviewStyle } = useCreateReviewStore();
  const { generateReviewData } = useGenerateReviewStore();

  const { navigateToReviewResult } = useRoute();

  const [selectedStyle, setSelectedStyle] = useState(IMG_STYLE_DATA[0]);

  const { ocrText, hashTag, reviewStyle } = createReviewData;

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
      payload: { ocrText, hashTag, reviewStyle },
    });

    send({
      type: AppBridgeMessageType.RECEIVE_GENERATED_REVIEW,
      payload: { result: String(generateReviewData) },
    });

    if (generateReviewData.length > 0) {
      navigateToReviewResult();
    }
  };

  return (
    <div className={styles.SelectStyle}>
      <div className={styles.Title}>
        <Text variant="titleM" color="primary" align="center" as="h1">
          어떤 말투로 작성할까요?
        </Text>
        <Text variant="bodyLg" color="secondary" align="center" as="h2">
          선택지에 따라 리뷰 말투가 달라져요
        </Text>
      </div>

      <div className={styles.Image}>
        <img src={selectedStyle.image} alt={`${selectedStyle.name}-img`} />
      </div>

      <div className={styles.StyleButtonList}>
        {IMG_STYLE_DATA.map((style) => (
          <div
            key={style.name}
            className={classNames({
              [styles.isSelected]: selectedStyle.name === style.name,
            })}
            onClick={() => handleStyleClick(style)}
          >
            <Text color={selectedStyle.name === style.name ? "white" : "secondary"} variant="bodyM">
              {style.name}
            </Text>
            <Icon name={selectedStyle.name === style.name ? "checkCircle" : "emptyCircle"} />
          </div>
        ))}
      </div>

      <div className={styles.Bottom}>
        <Button text="리뷰 만들기" onClick={handleCreateReview} />
      </div>
    </div>
  );
};

export default SelectStyle;
