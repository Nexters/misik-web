import CameraIcon from "@/assets/svg/ic-camera.svg?react";
import CheckCircleIcon from "@/assets/svg/ic-check-circle.svg?react";
import CloseIcon from "@/assets/svg/ic-close.svg?react";
import EmptyCircleIcon from "@/assets/svg/ic-empty-circle.svg?react";
import GalleryIcon from "@/assets/svg/ic-gallery.svg?react";
import LeftArrowIcon from "@/assets/svg/ic-left-arrow.svg?react";
import PasteIcon from "@/assets/svg/ic-paste.svg?react";
import PlusIcon from "@/assets/svg/ic-plus.svg?react";

export type IconNameType =
  | "camera"
  | "close"
  | "gallery"
  | "leftArrow"
  | "paste"
  | "plus"
  | "checkCircle"
  | "emptyCircle";

export interface IconProps {
  name: IconNameType;
}

export const ICONS = {
  camera: CameraIcon,
  close: CloseIcon,
  gallery: GalleryIcon,
  leftArrow: LeftArrowIcon,
  paste: PasteIcon,
  plus: PlusIcon,
  checkCircle: CheckCircleIcon,
  emptyCircle: EmptyCircleIcon,
};

// 추후 사이즈, 컬러등 추가 가능
const Icon = ({ name }: IconProps) => {
  const SvgIcon = ICONS[name];

  return <SvgIcon />;
};

export default Icon;
