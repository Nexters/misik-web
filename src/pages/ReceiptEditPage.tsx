import ReceiptEdit from "@/components/ReceiptEdit/ReceiptEdit";
import Icon from "@/components/ui/Icon/Icon";
import NavbarV2 from "@/components/ui/NavbarV2/NavbarV2";

const ReceiptEditPage = () => {
  return (
    <>
      <NavbarV2>
        <NavbarV2.LeftButton>
          <Icon name="leftArrow" />
        </NavbarV2.LeftButton>
      </NavbarV2>

      <ReceiptEdit />
    </>
  );
};

export default ReceiptEditPage;
