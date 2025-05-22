import Navbar from "@/components/Navbar/Navbar";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";
import { useToast } from "@/hooks/common/useToast";

import styles from "@/pages/ReviewCopyGuidePage/ReviewCopyGuidePage.module.scss";

import { useGenerateReviewStore } from "@/store/useCreateReviewStore";
import { useScanDataStore } from "@/store/useScanDataStore";

import { gTagLogEvent } from "@/utils/gtag";

const ReviewCopyGuidePage = () => {
  const { send } = useAppBridge();
  const { generateReviewData } = useGenerateReviewStore();
  const { navigateToBack, navigateToHome } = useRoute();

  const { resetScanData } = useScanDataStore();

  const handleNavigateToHome = () => {
    gTagLogEvent("recognition_fail_close_button_click", {
      category: "Button",
      label: "recognition_fail_close_button",
    });

    resetScanData();
    navigateToHome();
  };

  const appInfo = [
    { iconName: "배달의 민족", iconSrc: "/assets/img/img-lcon-bm.png", url: "https://baemin.com/" },
    {
      iconName: "쿠팡이츠",
      iconSrc: "/assets/img/img-lcon-cp.png",
      url: "https://www.coupangeats.com",
    },
    { iconName: "네이버", iconSrc: "/assets/img/img-lcon-naver.png", url: "https://naver.com" },
  ];

  const { addToast } = useToast();

  return (
    <>
      <Navbar>
        <Navbar.LeftButton onClick={navigateToBack}>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>

      <div className={styles.ReviewGuide}>
        <div className={styles.Title}>
          <Text color="primary" variant="titleM" align="center" as="h1">
            생성된 리뷰를
          </Text>
          <div className={styles.TitleCont}>
            <Text color="purpleGradient" variant="titleM" align="center" as="h1">
              복사해서
            </Text>
            <Text color="primary" variant="titleM" align="center" as="h1">
              사용할땐
            </Text>
          </div>
        </div>
        <div className={styles.ReviewGuideWrap}>
          <div className={styles.ReviewGuideList}>
            <Text className={styles.ReviewGuideNum} color="secondary" as="p">
              1
            </Text>
            <div className={styles.ReviewGuideItemContainer}>
              <Text variant="titleXsm"> 생성된 리뷰를 복사해서</Text>
              <div className={styles.ReviewGuideItem}>
                <Text variant="bodyLg">{generateReviewData}</Text>
                {/* <Button
                text="복사하기"
                variant="primary"
                className={styles.btn}
                onClick={()=>{
              send({ type: AppBridgeMessageType.COPY, payload: { review: generateReviewData } });
              addToast("리뷰가 복사되었어요");
                }}
              /> */}
                <button
                  className={styles.btn}
                  onClick={() => {
                    send({
                      type: AppBridgeMessageType.COPY,
                      payload: { review: generateReviewData },
                    });
                    addToast("리뷰가 복사되었어요");
                  }}
                >
                  복사하기
                </button>
              </div>
            </div>
          </div>
          <div className={styles.ReviewGuideList}>
            <Text className={styles.ReviewGuideNum} color="secondary" as="p">
              2
            </Text>
            <div className={styles.ReviewGuideItemContainer}>
              <Text variant="titleXsm">앱을 열고 붙여넣기 해보세요</Text>
              <div className={styles.ReviewGuideItemBox}>
                {appInfo.map(({ iconName, iconSrc }, index) => (
                  <div key={index} className={styles.ReviewGuideItem}>
                    <div className={styles.appInfo}>
                      <img src={iconSrc} alt="배민 앱 아이콘" className={styles.appIcon} />
                      <span className={styles.appName}>{iconName}</span>
                    </div>
                    <button className={styles.btn}>앱 열기</button>
                    {/* <Button
            text="앱 열기"
            variant="primary"
            className={styles.appButton}
            onClick={()=>{}}
          /> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Bottom}>
          <Button text="홈으로 가기" variant="primary" onClick={handleNavigateToHome} />
        </div>
      </div>
    </>
  );
};

export default ReviewCopyGuidePage;
