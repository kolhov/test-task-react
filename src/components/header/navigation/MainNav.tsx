import { Button, Menu, Portal, Box } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import type { NavLinks } from "../Header";

interface Props {
  links: NavLinks;
}

export default function MainNav({ links }: Props) {
  return (
    <>
      <Box
        as={"nav"}
        display={"flex"}
        gap={"22px"}
        alignItems={"center"}
        fontSize={"16px"}
      >
        <Box display={"flex"} gap={"14px"}>
          <a href={links.applications.href}>{links.applications.title}</a>
          <a style={{ color: "#B0B0B0" }} href={links.reports.href}>
            {links.reports.title}
          </a>
        </Box>
        <Menu.Root>
          <Menu.Trigger asChild border={"none"}>
            <Button
              variant="outline"
              size="sm"
              color={"#B0B0B0"}
              fontWeight={"400"}
              fontSize={"16px"}
            >
              Справочники
              <Icon
                icon={"material-symbols-light:arrow-drop-down-rounded"}
                style={{ scale: 1.5, translate: "-9px 1px", color: "#1C1C1C" }}
              />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {links.handbook.map((link) => (
                  <Menu.Item key={link.title} asChild value={link.title}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.title}
                    </a>
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Box>
    </>
  );
}
