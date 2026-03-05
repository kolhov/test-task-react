import { Box } from "@chakra-ui/react";
import "@fontsource/golos-text";

interface Props {
  name: string;
}

export default function NumberBadge({ name }: Props) {
  return (
    <Box
      fontFamily={"Golos Text"}
      bgColor={"#F3F3F3"}
      borderRadius={"4px"}
      fontWeight={"500"}
      fontSize={"14px"}
      h={"24px"}
      display={"inline-flex"}
      justifyContent={"center"}
      alignContent={"center"}
      minW={"74px"}
      letterSpacing={"1px"}
      alignItems={'center'}
    >
      {name}
    </Box>
  );
}
