import { useEffect } from "react";

import Navbar from "@/components/Navbar/Navbar";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import IconButton from "@/components/ui/IconButton/IconButton";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

import styles from "@/pages/HomePage/HomePage.module.scss";

import { useScanDataStore } from "@/store/useScanDataStore";

const SHARE_TEXT =
  "영수증을 촬영하면 AI가 자동으로 맛집 리뷰를 생성! 🍽️✨ 간편하게 추억을 남기고, 나만의 미식 기록을 완성하세요. 미식 경험을 더욱 스마트하게, 미식 MISIK!";

const HomePage = () => {
  const { send } = useAppBridge();

  const { scanData } = useScanDataStore();

  const { navigateToReceiptEdit, navigateToRecognitionFail } = useRoute();

  useEffect(() => {
    if (scanData === "error") {
      navigateToRecognitionFail();
    }

    if (typeof scanData !== "string" && scanData.parsed && scanData.parsed.length > 0) {
      navigateToReceiptEdit();
    }
  }, [scanData]);

  return (
    <>
      <Navbar>
        <Navbar.RightButton
          onClick={() =>
            send({ type: AppBridgeMessageType.SHARE, payload: { shareText: SHARE_TEXT } })
          }
        >
          <Text variant="bodySm" color="secondary">
            앱 공유하기
          </Text>
        </Navbar.RightButton>
      </Navbar>

      <div className={styles.Home}>
        <div className={styles.HomeTop}>
          <div className={styles.HomeTitle}>
            <h1 className={styles.Title}>{`영수증으로\nAI 음식 리뷰 남겨요`}</h1>
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
    </>
  );
};

export default HomePage;
