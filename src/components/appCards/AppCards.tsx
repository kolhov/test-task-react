import type { Application } from "@/types";
import AppCard from "../ui/appCard";
import { Box, ScrollArea } from "@chakra-ui/react";
import { getMonthName } from "@/utils";

interface Props {
  data: Application[];
}

export default function AppCards({ data }: Props) {
  const groupedByMonth = data.reduce(
    (acc, date) => {
      const monthKey = getMonthName(date.createdAt.day);

      if (!acc[monthKey]) {
        acc[monthKey] = [];
      }

      acc[monthKey].push(date);
      return acc;
    },
    {} as Record<string, Application[]>,
  );

  return (
    <ScrollArea.Root height="82vh">
      <ScrollArea.Viewport
        css={{
          "--scroll-shadow-size": "9rem",
          maskImage: "linear-gradient(#000, #000000)",
          "&[data-overflow-y]": {
            maskImage:
              "linear-gradient(#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent)",
            "&[data-at-top]": {
              maskImage:
                "linear-gradient(180deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
            },
            "&[data-at-bottom]": {
              maskImage:
                "linear-gradient(0deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
            },
          },
        }}
      >
        <ScrollArea.Content spaceY="10px" mt={"30px"}>
          {Object.keys(groupedByMonth).map((key) => (
            <Box display={'flex'} gap={'10px'} flexDirection={'column'} key={key}>
              <Box
                as={"h2"}
                fontWeight={600}
                fontSize={"14px"}
                textTransform={"uppercase"}
              >
                {key}
              </Box>
              {groupedByMonth[key].map((x) => (
                <AppCard data={x} key={x.id} />
              ))}
            </Box>
          ))}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  );
}
