import { useNavigate } from "react-router-dom";

import Navbar from "@/components/ui/Navbar/Navbar";

export default function ArrowNavbar() {
  const navigate = useNavigate();

  const onBackBtn = () => {
    navigate(-1);
  };

  return (
    <Navbar
      leftButton={{
        icon: "/src/assets/svg/ic-left-arrow.svg",
        alt: "뒤로 가기",
        onClick: onBackBtn,
      }}
    />
  );
}
