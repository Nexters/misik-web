import CameraIcon from "@/assets/svg/ic-camera.svg?react";
import CloseIcon from "@/assets/svg/ic-close.svg?react";
import GalleryIcon from "@/assets/svg/ic-gallery.svg?react";
import LeftArrowIcon from "@/assets/svg/ic-left-arrow.svg?react";
import PasteIcon from "@/assets/svg/ic-paste.svg?react";
import PlusIcon from "@/assets/svg/ic-plus.svg?react";

type IconNameType = "camera" | "close" | "gallery" | "leftArrow" | "paste" | "plus";

export const ICONS = {
  camera: CameraIcon,
  close: CloseIcon,
  gallery: GalleryIcon,
  leftArrow: LeftArrowIcon,
  paste: PasteIcon,
  plus: PlusIcon,
};

// 추후 사이즈, 컬러등 추가 가능
const Icon = ({ name }: { name: IconNameType }) => {
  const SvgIcon = ICONS[name];

  return <SvgIcon />;
};

export default Icon;
