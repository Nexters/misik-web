import Navbar from "@/components/common/Navbar/Navbar";
import RecognitionFail from "@/components/RecognitionFail/RecognitionFail";
import Icon from "@/components/ui/Icon/Icon";

const RecognitionFailPage = () => {
  return (
    <>
      <Navbar>
        <Navbar.RightButton>
          <Icon name="close" />
        </Navbar.RightButton>
      </Navbar>

      <RecognitionFail />
    </>
  );
};

export default RecognitionFailPage;
