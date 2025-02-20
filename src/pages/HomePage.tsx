import Navbar from "@/components/common/Navbar/Navbar";
import Home from "@/components/Home/Home";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import Text from "@/components/ui/Text/Text";

const SHARE_TEXT =
  "영수증을 촬영하면 AI가 자동으로 맛집 리뷰를 생성! 🍽️✨ 간편하게 추억을 남기고, 나만의 미식 기록을 완성하세요. 미식 경험을 더욱 스마트하게, 미식 MISIK!";

const HomePage = () => {
  const { send } = useAppBridge();
  alert("디버깅 메시지: 홈 " + JSON.stringify(SHARE_TEXT));

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

      <Home />
    </>
  );
};

export default HomePage;
