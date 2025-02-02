import { useNavigate } from "react-router-dom";

import Home from "@/components/Home/Home";
import Icon from "@/components/ui/Icon/Icon";
import NavbarV2 from "@/components/ui/NavbarV2/NavbarV2";
import Text from "@/components/ui/Text/Text";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <>
      <NavbarV2>
        <NavbarV2.LeftButton onClick={handleLogoClick}>
          <Icon name="logo" />
        </NavbarV2.LeftButton>
        <NavbarV2.RightButton>
          <Text variant="bodySm" color="secondary">
            앱 공유하기
          </Text>
        </NavbarV2.RightButton>
      </NavbarV2>

      <Home />
    </>
  );
};

export default HomePage;
