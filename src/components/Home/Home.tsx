import { useEffect } from "react";

import styles from "@/components/Home/Home.module.scss";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import { WebBridgeMessageType } from "@/components/provider/WebBridgeProvider/WebBridgeProvider";
import { useWebBridge } from "@/components/provider/WebBridgeProvider/WebBridgeProvider";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import { useScanDataStore } from "@/store/useScanDataStore";

export interface ScanResult {
  [key: string]: string;
}

const Home = () => {
  const { send } = useAppBridge();

  const { receive } = useWebBridge();

  const { setScanData } = useScanDataStore();

  const { navigateToReceiptEdit } = useRoute();

  useEffect(() => {
    if (typeof window !== "undefined" && !window.response) {
      window.response = {
        receiveScanResult: (jsonData: string) => {
          try {
            const data: ScanResult[] = JSON.parse(jsonData);
            receive({
              type: WebBridgeMessageType.RECEIVE_SCAN_RESULT,
              payload: data,
            });

            setScanData(data);
            setTimeout(() => {
              navigateToReceiptEdit();
            }, 0);
          } catch (error) {
            console.error("Error parsing scan result JSON:", error);
          }
        },
      };
    }
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
          onClick={() => {
            send({ type: AppBridgeMessageType.OPEN_CAMERA, payload: "" });
            if (typeof window !== "undefined" && !window.response) {
              window.response = {
                receiveScanResult: (jsonData: string) => {
                  try {
                    const data: ScanResult[] = JSON.parse(jsonData);
                    receive({
                      type: WebBridgeMessageType.RECEIVE_SCAN_RESULT,
                      payload: data,
                    });

                    setScanData(data);
                    setTimeout(() => {
                      navigateToReceiptEdit();
                    }, 0);
                  } catch (error) {
                    console.error("Error parsing scan result JSON:", error);
                  }
                },
              };
            }
          }}
        />
      </div>
    </div>
  );
};

export default Home;
