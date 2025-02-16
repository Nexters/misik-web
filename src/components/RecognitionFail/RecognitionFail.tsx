import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import styles from "@/components/RecognitionFail/RecognitionFail.module.scss";
import Button from "@/components/ui/Button/Button";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

const RecognitionFail = () => {
  const { send } = useAppBridge();

  const { navgateToReceiptInput } = useRoute();

  return (
    <div className={styles.RecognitionFail}>
      <div className={styles.Title}>
        <Text color="primary" variant="titleM" align="center" as="h1">
          영수증 인식에 실패했어요
        </Text>
        <Text color="secondary" variant="bodyLg" align="center">
          {`깨끗한 배경에 영수증을 놓고\n전체가 잘 나오도록 촬영해 주세요`}
        </Text>
      </div>
      <div className={styles.Image}>
        <img src="/assets/img/img-recognition-fail.png" alt="recognitionFailImg" />
      </div>
      <div className={styles.Bottom}>
        <Button text="직접 입력하기" variant="secondary" onClick={navgateToReceiptInput} />
        <Button
          text="다시 촬영하기"
          variant="secondary"
          onClick={() => send({ type: AppBridgeMessageType.OPEN_CAMERA, payload: "" })}
        />
      </div>
    </div>
  );
};

export default RecognitionFail;
