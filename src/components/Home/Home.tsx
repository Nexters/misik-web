import { useEffect, useState } from "react";

import styles from "@/components/Home/Home.module.scss";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

const Home = () => {
  const { send } = useAppBridge();
  const { navigateToReceiptEdit } = useRoute();

  const testNavigate = () => {
    setTimeout(() => {
      navigateToReceiptEdit();
    }, 3000);
  };

  interface ScanResult {
    [key: string]: string;
  }

  // const [results, setResults] = useState<ScanResult[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { navigateToReceiptEdit } = useRoute();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.response =
        window.response || ({} as { receiveScanResult: (jsonData: string) => void });

      window.response.receiveScanResult = (jsonData: string) => {
        try {
          const data: ScanResult[] = JSON.parse(jsonData);
          // setResults(data);
          console.log(data);
          setIsSuccess(true);
          navigateToReceiptEdit();
        } catch (error) {
          console.error("Error parsing scan result JSON:", error);
        }
      };
    }
  }, []);

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
      {isSuccess && <div>성공</div>}
      <div className={styles.HomeBottom}>
        <IconButton
          text="갤러리"
          iconName="gallery"
          onClick={() => {
            send({ type: AppBridgeMessageType.OPEN_GALLERY, payload: "" });
            testNavigate();
          }}
        />
        <IconButton
          text="카메라"
          iconName="camera"
          onClick={() => {
            send({ type: AppBridgeMessageType.OPEN_CAMERA, payload: "" });
            testNavigate();
          }}
        />
      </div>
    </div>
  );
};

export default Home;
