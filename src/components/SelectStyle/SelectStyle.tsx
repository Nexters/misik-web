import { useState } from "react";

import classNames from "classnames";

import styles from "@/components/SelectStyle/SelectStyle.module.scss";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

interface StyleProps {
  name: string;
  image: string;
}

const IMG_STYLE_DATA = [
  { name: "default", image: "/assets/img/img-graphic-logo.png" },
  { name: "친절한 미식가", image: "/assets/img/img-style-friendly.png" },
  { name: "믿음직한 미식가", image: "/assets/img/img-style-trust.png" },
  { name: "귀여운 미식가", image: "/assets/img/img-style-cute.png" },
];

const SelectStyle = () => {
  const { navigateToReviewResult } = useRoute();

  const [selectedStyle, setSelectedStyle] = useState(IMG_STYLE_DATA[0]);

  const handleStyleClick = (style: StyleProps) => {
    setSelectedStyle((prevStyle) => (prevStyle.name === style.name ? IMG_STYLE_DATA[0] : style));
  };

  return (
    <div className={styles.SelectStyle}>
      <div className={styles.Title}>
        <Text variant="titleM" color="primary" align="center" as="h1">
          나는 어떤 미식가인가요?
        </Text>
        <Text variant="bodyLg" color="secondary" align="center" as="h2">
          선택지에 따라 리뷰 어조가 달라져요
        </Text>
      </div>

      <div className={styles.Image}>
        <img src={selectedStyle.image} alt={`${selectedStyle.name}-img`} />
      </div>

      <div className={styles.StyleButtonList}>
        {IMG_STYLE_DATA.slice(1, 4).map((style) => (
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
        <Button text="리뷰 만들기" onClick={navigateToReviewResult} />
      </div>
    </div>
  );
};

export default SelectStyle;
