import { Button, Input, Popover, Portal } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import type { ChangeEvent } from "react";

interface Props {
  search: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBarMobile({search, onChange}: Props) {
  return (
    <Popover.Root positioning={{ placement: "top-end" }}>
      <Popover.Trigger asChild>
        <Button
          alignSelf={"end"}
          w={"104px"}
          size="md"
          variant="outline"
          bgColor={"white"}
          border={"2px solid black"}
          fontWeight={'500'}
          fontSize={"16px"}
        >
          <Icon icon={"lucide:search"} style={{ scale: 1, color: "#B0B0B0" }} />
          Поиск
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content w={'340px'}>
            <Popover.Arrow />
            <Popover.Body>
              <Input
                placeholder="Поиск по номеру или теме заявки"
                _placeholder={{ color: "#ABABAB", fontSize: "16px" }}
                value={search}
                onChange={onChange}
              />
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
