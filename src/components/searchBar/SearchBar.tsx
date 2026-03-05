import {
  Box,
  Button,
  Input,
  InputGroup
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import AppModalForm from "../applicationModalForm/AppModalForm";

export default function SearchBar() {
  return (
    <Box
      display={"flex"}
      gap={"13px"}
      paddingInline={"40px"}
      pt={"21px"}
    >
      <InputGroup
        startElement={<Icon icon={"lucide:search"} style={{ scale: 1.4, color: '#B0B0B0' }} />}
      >
        <Input
          placeholder="Поиск по номеру или теме заявки"
          _placeholder={{ color: "#ABABAB", fontSize: '16px' }}
        />
      </InputGroup>
      <Button
        variant={"surface"}
        w={"112px"}
      >
        <Icon
          icon={"material-symbols-light:picture-as-pdf"}
          style={{ opacity: 0.5 }}
        />
        Экспорт
      </Button>
      <AppModalForm />
    </Box>
  );
}
