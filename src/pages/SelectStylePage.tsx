import SelectStyle from "@/components/SelectStyle/SelectStyle";
import Icon from "@/components/ui/Icon/Icon";
import NavbarV2 from "@/components/ui/NavbarV2/NavbarV2";

const SelectStylePage = () => {
  return (
    <>
      <NavbarV2>
        <NavbarV2.LeftButton>
          <Icon name="leftArrow" />
        </NavbarV2.LeftButton>
      </NavbarV2>
      <SelectStyle />
    </>
  );
};

export default SelectStylePage;
