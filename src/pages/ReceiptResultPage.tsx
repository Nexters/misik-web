import Navbar from "@/components/common/Navbar/Navbar";
import ReceiptResult from "@/components/ReceiptResult/ReceiptResult";
import Icon from "@/components/ui/Icon/Icon";

export default function ReceiptResultPage() {
  return (
    <>
      <Navbar>
        <Navbar.LeftButton>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>
      <ReceiptResult />
    </>
  );
}
