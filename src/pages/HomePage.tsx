import Navbar from "@/components/common/Navbar/Navbar";
import Home from "@/components/Home/Home";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import Text from "@/components/ui/Text/Text";

const HomePage = () => {
  const { send } = useAppBridge();

  return (
    <>
      <Navbar>
        <Navbar.RightButton onClick={() => send({ type: AppBridgeMessageType.SHARE, payload: "" })}>
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
