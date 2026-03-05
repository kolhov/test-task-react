import type { Application } from "@/types";
import AppCard from "../ui/appCard";
import { Box } from "@chakra-ui/react";

interface Props {
  data: Application[];
}

export default function AppCards({ data }: Props) {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"10px"} mt={'32px'}>
      {data.map((x) => (
        <AppCard data={x} key={x.id} />
      ))}
    </Box>
  );
}
