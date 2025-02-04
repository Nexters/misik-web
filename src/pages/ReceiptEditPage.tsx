import Navbar from "@/components/common/Navbar/Navbar";
import ReceiptEdit from "@/components/ReceiptEdit/ReceiptEdit";
import Icon from "@/components/ui/Icon/Icon";

const ReceiptEditPage = () => {
  return (
    <>
      <Navbar>
        <Navbar.LeftButton>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>

      <ReceiptEdit />
    </>
  );
};

export default ReceiptEditPage;
