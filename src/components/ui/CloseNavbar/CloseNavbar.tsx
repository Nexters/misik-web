import { useNavigate } from "react-router-dom";

import Navbar from "@/components/ui/Navbar/Navbar";

export default function CloseNavbar() {
  const navigate = useNavigate();

  const onClose = () => {
    navigate("/");
  };

  return (
    <Navbar rightButton={{ icon: "/src/assets/svg/ic-close.svg", alt: "닫기", onClick: onClose }} />
  );
}
