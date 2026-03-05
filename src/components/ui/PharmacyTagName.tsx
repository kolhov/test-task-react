import { Box } from "@chakra-ui/react";

interface Props {
  name: string;
  id: number;
}

export default function PharmacyTagName({ id, name }: Props) {
  return (
    <Box display={'flex'} gap={'10px'}>
      <Box
        bgColor={"#F1F1F1"}
        borderRadius={"4px"}
        fontWeight={"600"}
        fontSize={"12px"}
        h={'20px'}
        display={'flex'}
        justifyContent={'center'}
        alignContent={'center'}
        minW={'28px'}
      >
        {id}
      </Box>
      {name}
    </Box>
  );
}
