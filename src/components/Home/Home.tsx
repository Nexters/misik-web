import { useEffect } from "react";

import styles from "@/components/Home/Home.module.scss";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import { useScanDataStore } from "@/store/useScanDataStore";

export interface ScanResult {
  [key: string]: string;
}

const Home = () => {
  const { send, receive } = useAppBridge();

  const { setScanData } = useScanDataStore();

  const { navigateToReceiptEdit } = useRoute();

  const handleScanResult = (jsonData: string) => {
    try {
      const data: ScanResult[] = JSON.parse(jsonData);

      receive({
        type: AppBridgeMessageType.RECEIVE_SCAN_RESULT,
        payload: data,
      });

      setScanData(data);

      navigateToReceiptEdit();
    } catch (error) {
      console.error("스캔 결과 JSON 파싱 오류:", error);
      alert("스캔 데이터를 처리하는 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  useEffect(() => {
    const responseHandler = {
      receiveScanResult: handleScanResult,
    };

    if (typeof window !== "undefined") {
      window.response = Object.assign({}, window.response, responseHandler);
    }

    return () => {
      if (typeof window !== "undefined") {
        delete window.response;
      }
    };
  }, [receive, navigateToReceiptEdit, setScanData]);

  return (
    <div className={styles.Home}>
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
      <div className={styles.HomeBottom}>
        <IconButton
          text="갤러리"
          iconName="gallery"
          onClick={() => send({ type: AppBridgeMessageType.OPEN_GALLERY, payload: "" })}
        />
        <IconButton
          text="카메라"
          iconName="camera"
          onClick={() => send({ type: AppBridgeMessageType.OPEN_CAMERA, payload: "" })}
        />
      </div>
    </div>
  );
};

export default Home;
