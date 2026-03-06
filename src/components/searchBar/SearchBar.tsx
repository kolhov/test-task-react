import { Box, Button, Input, InputGroup } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import AppModalForm from "../applicationModalForm/AppModalForm";
import type { ChangeEvent } from "react";

interface Props {
  search: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ search, onChange }: Props) {
  return (
    <Box display={"flex"} gap={"13px"}>
      <InputGroup
        startElement={
          <Icon
            icon={"lucide:search"}
            style={{ scale: 1.4, color: "#B0B0B0" }}
          />
        }
      >
        <Input
          placeholder="Поиск по номеру или теме заявки"
          _placeholder={{ color: "#ABABAB", fontSize: "16px" }}
          value={search}
          onChange={onChange}
        />
      </InputGroup>
      <Button
        variant={"surface"}
        fontWeight={"400"}
        fontSize={"16px"}
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
