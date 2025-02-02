import RecognitionFail from "@/components/RecognitionFail/RecognitionFail";
import Icon from "@/components/ui/Icon/Icon";
import NavbarV2 from "@/components/ui/NavbarV2/NavbarV2";

const RecognitionFailPage = () => {
  return (
    <>
      <NavbarV2>
        <NavbarV2.RightButton>
          <Icon name="close" />
        </NavbarV2.RightButton>
      </NavbarV2>

      <RecognitionFail />
    </>
  );
};

export default RecognitionFailPage;
