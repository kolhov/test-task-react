import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Input,
  InputGroup,
  Portal,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function SearchBar() {
  return (
    <Box
      display={"flex"}
      gap={"13px"}
      paddingInline={"40px"}
      paddingBlock={"21px"}
    >
      <InputGroup
        startElement={<Icon icon={"lucide:search"} style={{scale: 1.4}} />}
      >
        <Input placeholder="Поиск по номеру или теме заявки" />
      </InputGroup>
      <Button>
        <Icon icon={"material-symbols-light:picture-as-pdf"} />
        Экспорт
      </Button>
      <Dialog.Root placement={"center"} motionPreset="slide-in-bottom">
        <Dialog.Trigger asChild>
          <Button variant="outline">
            <Icon icon={"material-symbols-light:add-rounded"} />
            Создать новую заявку
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Dialog Title</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button>Save</Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );
}
