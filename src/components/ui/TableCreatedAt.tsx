import type { CreatedAt } from "@/types";
import { Box } from "@chakra-ui/react";

interface Props {
  date: CreatedAt
}

export default function TableCreatedAt({ date }: Props) {
  return (
    <Box display={'flex'} gap={'6px'}>
      {date.day}
      <Box as={"p"} opacity={0.3}>{date.time}</Box>
    </Box>
  );
}
