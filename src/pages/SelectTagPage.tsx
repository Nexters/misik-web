import Navbar from "@/components/common/Navbar/Navbar";
import SelectTag from "@/components/SelectTag/SelectTag";
import Icon from "@/components/ui/Icon/Icon";

const SelectTagPage = () => {
  return (
    <>
      <Navbar>
        <Navbar.LeftButton>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>
      <SelectTag />
    </>
  );
};

export default SelectTagPage;
