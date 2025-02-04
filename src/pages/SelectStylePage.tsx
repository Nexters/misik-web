import Navbar from "@/components/common/Navbar/Navbar";
import SelectStyle from "@/components/SelectStyle/SelectStyle";
import Icon from "@/components/ui/Icon/Icon";

import { useRoute } from "@/hooks/common/useRoute";

const SelectStylePage = () => {
  const { navigateToBack } = useRoute();

  return (
    <>
      <Navbar>
        <Navbar.LeftButton onClick={navigateToBack}>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>
      <SelectStyle />
    </>
  );
};

export default SelectStylePage;
