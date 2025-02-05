import Navbar from "@/components/common/Navbar/Navbar";
import Home from "@/components/Home/Home";
import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import { useAppBridge } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import Icon from "@/components/ui/Icon/Icon";
import Text from "@/components/ui/Text/Text";

import { useRoute } from "@/hooks/common/useRoute";

const HomePage = () => {
  const { send } = useAppBridge();

  const { navigateToHome } = useRoute();

  return (
    <>
      <Navbar>
        <Navbar.LeftButton onClick={navigateToHome}>
          <Icon name="logo" />
        </Navbar.LeftButton>
        <Navbar.RightButton onClick={() => send({ type: AppBridgeMessageType.SHARE })}>
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
