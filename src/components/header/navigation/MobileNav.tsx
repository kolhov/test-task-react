import { Button, Menu, Portal, Box } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import type { NavLinks } from "../Header";

interface Props {
  links: NavLinks
}

export default function MobileNav({ links }: Props) {
  return (
    <>
      <Box as={"nav"} display={"flex"} alignSelf={"start"} fontSize={"16px"}>
        <Menu.Root>
          <Menu.Trigger asChild border={"none"}>
            <Button
              variant="outline"
              size="sm"
              fontWeight={"600"}
              fontSize={"20px"}
              height={'24px'}
              padding={'0'}
            >
              Заявки
              <Icon
                icon={"material-symbols-light:arrow-drop-down"}
                style={{ scale: 2.1, translate: "-2px 2px" }}
              />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value={links.applications.title}>
                  <a href={links.applications.href}>{links.applications.title}</a>
                </Menu.Item>
                <Menu.Item value={links.reports.title}>
                  <a href={links.reports.href}>{links.reports.title}</a>
                </Menu.Item>
                <Menu.Root
                  positioning={{ placement: "right-start", gutter: 2 }}
                >
                  <Menu.TriggerItem>
                    Справочники
                    <Icon
                      icon={"material-symbols-light:arrow-right-rounded"}
                      style={{ scale: 1.5, translate: "-1px 2px" }}
                    />
                  </Menu.TriggerItem>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content>
                        {links.handbook.map((link) => (
                          <Menu.Item
                            key={link.title}
                            asChild
                            value={link.title}
                          >
                            <a href={link.href}>{link.title}</a>
                          </Menu.Item>
                        ))}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Box>
    </>
  );
}
