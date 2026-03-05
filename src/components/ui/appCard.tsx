import type { Application } from "@/types";
import { Box } from "@chakra-ui/react";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import NumberBadge from "./NumberBadge";
import TimeRush from "./TimeRush";

interface Props {
  data: Application;
}

export default function AppCard({ data }: Props) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
      border={"1px solid #DDDDDD"}
      borderRadius={"8px"}
      p={"15px 14px"}
    >
      <Box display={"flex"} justifyContent={"space-between"} gap={'8px'}>
        {data.theme}
        <Box display={"flex"} gap={"8px"}>
          <PriorityBadge onlyIcon={true} priority={data.priority} translate={'0 3px'}/>
          <StatusBadge id={data.status.id} name={data.status.name} />
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={"6px"}>
          <NumberBadge name={data.number} />
          <Box
            as={"p"}
            display={"flex"}
            alignItems={"center"}
            fontWeight={"500"}
            fontSize={"12px"}
            color={"#A4A4A4"}
          >
            {data.pharmacy.address}
          </Box>
        </Box>
        <TimeRush time={data.resolutionTime} minTime="01:00:00" maxTime="02:00:00" />
      </Box>
    </Box>
  );
}
