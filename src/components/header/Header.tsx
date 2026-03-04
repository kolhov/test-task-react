import {
  Avatar,
  Float,
  Circle,
  Button,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import avatarImg from "@/assets/avatar.png";
import { Icon } from "@iconify/react";
import MobileNav from "./navigation/MobileNav";
import MainNav from "./navigation/MainNav";

const links = {
  applications: { title: "Заявки", href: "#" },
  reports: { title: "Отчеты", href: "#" },
  handbook: [
    { title: "Аптеки", href: "#" },
    { title: "Приоритеты", href: "#" },
    { title: "Темы", href: "#" },
    { title: "Категории", href: "#" },
    { title: "Техники", href: "#" },
    { title: "Статусы", href: "#" },
  ],
};

export type NavLinks = typeof links

export default function Header() {
  const [isMobile] = useMediaQuery(["(max-width: 48rem)"]);

  return (
    <Box
      borderBottom="1px solid #D9E1EC"
      height={{ base: "72px", md: "86px" }}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"16px"}
      paddingLeft={{ md: "6.8%" }}
      paddingRight={{ md: "34px" }}
    >
      {isMobile && <MobileNav links={links} />}
      {!isMobile && <MainNav links={links} />}
      <Box display={"flex"} gap={"27px"}>
        <Avatar.Root
          colorPalette="green"
          variant="subtle"
          w={"36px"}
          h={"36px"}
        >
          <Avatar.Fallback name="Dari Ann" />
          <Avatar.Image src={avatarImg} />
          <Float placement="bottom-end" offsetX="1" offsetY="1">
            <Circle
              bg="#B93C3C"
              size="20px"
              color={"#F1F1F1"}
              fontWeight="600"
              fontSize="13px"
            >
              2
            </Circle>
          </Float>
        </Avatar.Root>
        <Button variant={"surface"} fontWeight="400" hideBelow={"md"}>
          <Icon icon={"mingcute:exit-line"} />
          Выйти
        </Button>
      </Box>
    </Box>
  );
}
