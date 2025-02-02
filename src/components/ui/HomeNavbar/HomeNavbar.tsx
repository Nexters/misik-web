import Text from "../Text/Text";

import Navbar from "@/components/ui/Navbar/Navbar";

export default function SecondaryNavbar() {
  return (
    <Navbar
      leftButton={{
        className: "logo",
        icon: "/src/assets/img/img-logo.png",
        alt: "로고",
        onClick: () => {},
      }}
      rightButton={{
        content: (
          <Text variant="bodyXsm" color="secondary" align="center" as="span">
            앱 공유하기
          </Text>
        ),
        onClick: () => {},
      }}
    ></Navbar>
  );
}
