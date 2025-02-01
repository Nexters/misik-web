import { forwardRef } from "react";

import classNames from "classnames";

import Icon from "@/components/ui/Icon/Icon";
import styles from "@/components/ui/Tag/Tag.module.scss";
import type { TagProps } from "@/components/ui/Tag/Tag.types";
import Text from "@/components/ui/Text/Text";

const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ variant = "primary", text, isSelect, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          styles.Tag,
          styles[`style-${variant}`],
          { [styles.Selected]: isSelect },
          className,
        )}
        {...props}
      >
        {variant === "primary" && (
          <Text variant="bodyM" color={isSelect ? "white" : "secondary"}>
            {text}
          </Text>
        )}

        {variant === "add" && <Icon name="plus" />}
      </div>
    );
  },
);

export default Tag;
