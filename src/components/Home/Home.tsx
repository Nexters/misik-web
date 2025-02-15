import { useEffect } from "react";

import styles from "@/components/Home/Home.module.scss";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import { useScanDataStore } from "@/store/useScanDataStore";

const Home = () => {
  const { send } = useAppBridge();

  const { scanData } = useScanDataStore();

  const { navigateToReceiptEdit } = useRoute();

  useEffect(() => {
    if (scanData.parsed && scanData.parsed.length > 0) {
      navigateToReceiptEdit();
    }
  }, [scanData]);

  return (
    <div className={styles.Home}>
      <div className={styles.HomeTop}>
        <div className={styles.HomeTitle}>
          <Text variant="titleLg" color="gradient" align="center" as="h1">
            {`영수증으로\nAI 음식 리뷰 남겨요`}
          </Text>
          <Text variant="bodyLg" color="secondary" align="center">
            손쉬운 음식 리뷰 작성
          </Text>
        </div>
        <div className={styles.HomeImage}>
          <img src="/assets/img/img-graphic-logo.png" alt="mainLogo" />
        </div>
      </div>

      <div className={styles.HomeBottom}>
        <IconButton
          text="갤러리"
          iconName="gallery"
          onClick={() => {
            send({ type: AppBridgeMessageType.OPEN_GALLERY, payload: "" });

            send({ type: AppBridgeMessageType.RECEIVE_SCAN_RESULT, payload: { result: "" } });
          }}
        />
        <IconButton
          text="카메라"
          iconName="camera"
          onClick={() => {
            send({ type: AppBridgeMessageType.OPEN_CAMERA, payload: "" });

            send({ type: AppBridgeMessageType.RECEIVE_SCAN_RESULT, payload: { result: "" } });
          }}
        />
      </div>
    </div>
  );
};

export default Home;
