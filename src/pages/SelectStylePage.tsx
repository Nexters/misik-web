import Navbar from "@/components/common/Navbar/Navbar";
import SelectStyle from "@/components/SelectStyle/SelectStyle";
import Icon from "@/components/ui/Icon/Icon";

const SelectStylePage = () => {
  return (
    <>
      <Navbar>
        <Navbar.LeftButton>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>
      <SelectStyle />
    </>
  );
};

export default SelectStylePage;
