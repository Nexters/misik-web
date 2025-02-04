import Navbar from "@/components/common/Navbar/Navbar";
import ReceiptEdit from "@/components/ReceiptEdit/ReceiptEdit";
import Icon from "@/components/ui/Icon/Icon";

import { useRoute } from "@/hooks/common/useRoute";

const ReceiptEditPage = () => {
  // 이후 영수증 인식 네이티브 라우팅으로 변경
  const { navigateToHome } = useRoute();

  return (
    <>
      <Navbar>
        <Navbar.LeftButton onClick={navigateToHome}>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>

      <ReceiptEdit />
    </>
  );
};

export default ReceiptEditPage;
