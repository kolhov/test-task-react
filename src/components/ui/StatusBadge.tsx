import { StatusEnum } from "@/types";
import { Box } from "@chakra-ui/react";

interface Props {
  id: StatusEnum;
  name: string;
}

export default function StatusBadge({ id, name }: Props) {
  let bg = "wheat";

  switch (id) {
    case StatusEnum.AllStatuses: {
      bg = "gray.200";
      break;
    }
    case StatusEnum.Closed: {
      bg = "#F1F1F1";
      break;
    }
    case StatusEnum.AwaitingParts: {
      bg = "gray.400";
      break;
    }
    case StatusEnum.InProgress: {
      bg = "#FFEBB3";
      break;
    }
    case StatusEnum.New: {
      bg = "#F0CDFA";
      break;
    }
    case StatusEnum.Ready: {
      bg = "#A2E3A4";
      break;
    }
    case StatusEnum.Rejected: {
      bg = "red.200";
      break;
    }
    case StatusEnum.UnderReview: {
      bg = "yellow.200";
      break;
    }
  }

  return (
    <Box display={'inline-flex'} borderRadius={"4px"} bgColor={bg} p={"2px 6px"}>
      {name}
    </Box>
  );
}
