import Navbar from "@/components/common/Navbar/Navbar";
import SelectTag from "@/components/SelectTag/SelectTag";
import Icon from "@/components/ui/Icon/Icon";

import { useRoute } from "@/hooks/common/useRoute";

const SelectTagPage = () => {
  const { navigateToBack } = useRoute();

  return (
    <>
      <Navbar>
        <Navbar.LeftButton onClick={navigateToBack}>
          <Icon name="leftArrow" />
        </Navbar.LeftButton>
      </Navbar>
      <SelectTag />
    </>
  );
};

export default SelectTagPage;
