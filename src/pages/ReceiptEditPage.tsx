import Navbar from "@/components/common/Navbar/Navbar";
import ReceiptEdit from "@/components/ReceiptEdit/ReceiptEdit";
import Icon from "@/components/ui/Icon/Icon";

import { useRoute } from "@/hooks/common/useRoute";

import { useScanDataStore } from "@/store/useScanDataStore";

const ReceiptEditPage = () => {
  const { navigateToHome } = useRoute();

  const { resetScanData } = useScanDataStore();

  const handleNavigateToHome = () => {
    resetScanData();
    navigateToHome();
  };

  return (
    <>
      <Navbar>
        <Navbar.LeftButton onClick={handleNavigateToHome}>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>

      <ReceiptEdit />
    </>
  );
};

export default ReceiptEditPage;
