import React, { useEffect, useState } from "react";

import classNames from "classnames";

import styles from "@/components/ui/Text/Text.module.scss";

interface Letter {
  char: string;
  id: number;
}

const AnimationText: React.FC = () => {
  const [firstLineLetters, setFirstLineLetters] = useState<Letter[]>([]);
  const [secondLineLetters, setSecondLineLetters] = useState<Letter[]>([]);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const firstLine = "영수증으로";
    const firstLetters = firstLine.split("").map((char, index) => ({
      char,
      id: index,
    }));
    setFirstLineLetters(firstLetters);

    const firstLineDelay = firstLine.length * 20 + 100;
    setTimeout(() => {
      const secondLine = "AI 음식 리뷰 남겨요";
      const secondLetters = [...secondLine].map((char, index) => ({
        // split("") 대신 [...string] 사용
        char,
        id: index,
      }));
      setSecondLineLetters(secondLetters);
    }, firstLineDelay);
  }, [hasAnimated]);

  return (
    <div className={styles.TitleWrapper}>
      <h1 className={classNames(styles.word)}>
        {firstLineLetters.map((letter, index) => (
          <span
            key={letter.id}
            className={classNames(
              styles.letter,
              styles.Text,
              styles["color-gradient"],
              styles[`variant-titleLg`],
              styles[`align-center`],
              letter.char === " " && styles.space,
            )}
            style={{
              animationDelay: `${index * 50}ms`,
              animationName: letter.char === " " ? "none" : styles.textBlur,
              animationDuration: "0.5s",
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {letter.char}
          </span>
        ))}
      </h1>
      <h1 className={styles.word}>
        {secondLineLetters.map((letter, index) => (
          <span
            key={letter.id}
            className={classNames(
              styles.letter,
              styles.Text,
              styles["color-gradient"],
              styles[`variant-titleLg`],
              styles[`align-center`],
              letter.char === " " && styles.space,
            )}
            style={{
              animationDelay: `${index * 20}ms`,
              animationName: letter.char === " " ? "none" : styles.textBlur,
              animationDuration: "0.5s",
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {letter.char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimationText;
