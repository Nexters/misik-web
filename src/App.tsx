import CameraIcon from "@/assets/svg/ic-camera.svg?react";
import CloseIcon from "@/assets/svg/ic-close.svg?react";
import GalleryIcon from "@/assets/svg/ic-gallery.svg?react";
import LeftArrowIcon from "@/assets/svg/ic-left-arrow.svg?react";
import PasteIcon from "@/assets/svg/ic-paste.svg?react";
import PlusIcon from "@/assets/svg/ic-plus.svg?react";

const App = () => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <GalleryIcon />
      <CameraIcon />
      <CloseIcon />
      <LeftArrowIcon />
      <PasteIcon />
      <PlusIcon />
      <img src="/src/assets/img/img-logo.png" style={{ width: "52px", height: "28px" }} />
    </div>
  );
};

export default App;
