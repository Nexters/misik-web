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
  const { send } = useAppBridge();

  const { scanData, setScanData } = useScanDataStore();

  const { navigateToReceiptEdit } = useRoute();

  useEffect(() => {
    window.response = {
      receiveScanResult: (jsonData: string) => {
        try {
          const data: ScanResult[] = JSON.parse(jsonData);
          setScanData(data);
          // navigateToReceiptEdit();
        } catch (error) {
          console.error("Error parsing scan result JSON:", error);
        }
      },
    };
  }, [setScanData, navigateToReceiptEdit]);

  return (
    <div className={styles.Home}>
      <div className={styles.HomeTitle}>
        <Text variant="titleLg" color="gradient" align="center" as="h1">
          {`영수증으로\nAI 음식 리뷰 남겨요`}
        </Text>
        <Text variant="bodyLg" color="secondary" align="center">
          {scanData.length > 0 &&
            scanData.map((data) => (
              <>
                {Object.keys(data).map((key) => (
                  <div key={key}>
                    <Text variant="bodyXsm" color="secondary">
                      {key}
                    </Text>
                    <Text variant="bodyXsm" color="secondary">
                      {data[key]}
                    </Text>
                  </div>
                ))}
              </>
            ))}
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

        <button
          onClick={() => {
            if (window.response) {
              window.response.receiveScanResult(
                JSON.stringify([{ sampleKey: "sampleValue" }, { sampleKey2: "sampleValue2" }]),
              );
            }
          }}
        >
          테스트 데이터 전송
        </button>
      </div>
    </div>
  );
};

export default Home;
