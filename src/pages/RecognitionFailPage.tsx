import Navbar from "@/components/common/Navbar/Navbar";
import RecognitionFail from "@/components/RecognitionFail/RecognitionFail";
import Icon from "@/components/ui/Icon/Icon";

import { useRoute } from "@/hooks/common/useRoute";

import { useScanDataStore } from "@/store/useScanDataStore";

const RecognitionFailPage = () => {
  const { navigateToHome } = useRoute();

  const { resetScanData } = useScanDataStore();

  const handleNavigateToHome = () => {
    resetScanData();
    navigateToHome();
  };

  return (
    <>
      <Navbar>
        <Navbar.RightButton onClick={handleNavigateToHome}>
          <Icon name="close" />
        </Navbar.RightButton>
      </Navbar>

      <RecognitionFail />
    </>
  );
};

export default RecognitionFailPage;
