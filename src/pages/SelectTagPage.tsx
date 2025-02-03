import SelectTag from "@/components/SelectTag/SelectTag";
import Icon from "@/components/ui/Icon/Icon";
import NavbarV2 from "@/components/ui/NavbarV2/NavbarV2";

const SelectTagPage = () => {
  return (
    <>
      <NavbarV2>
        <NavbarV2.LeftButton>
          <Icon name="leftArrow" />
        </NavbarV2.LeftButton>
      </NavbarV2>
      <SelectTag />
    </>
  );
};

export default SelectTagPage;
