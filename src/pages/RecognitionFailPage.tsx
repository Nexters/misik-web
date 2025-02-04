import Navbar from "@/components/common/Navbar/Navbar";
import RecognitionFail from "@/components/RecognitionFail/RecognitionFail";
import Icon from "@/components/ui/Icon/Icon";

import { useRoute } from "@/hooks/common/useRoute";

const RecognitionFailPage = () => {
  const { navigateToHome } = useRoute();

  return (
    <>
      <Navbar>
        <Navbar.RightButton onClick={navigateToHome}>
          <Icon name="close" />
        </Navbar.RightButton>
      </Navbar>

      <RecognitionFail />
    </>
  );
};

export default RecognitionFailPage;
