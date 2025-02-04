import { useNavigate } from "react-router-dom";

import Navbar from "@/components/common/Navbar/Navbar";
import Home from "@/components/Home/Home";
import Icon from "@/components/ui/Icon/Icon";
import Text from "@/components/ui/Text/Text";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar>
        <Navbar.LeftButton onClick={handleLogoClick}>
          <Icon name="logo" />
        </Navbar.LeftButton>
        <Navbar.RightButton>
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
