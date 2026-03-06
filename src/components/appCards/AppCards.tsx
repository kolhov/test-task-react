import type { Application } from "@/types";
import AppCard from "../ui/appCard";
import { ScrollArea } from "@chakra-ui/react";

interface Props {
  data: Application[];
}

export default function AppCards({ data }: Props) {
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
          {data.map((x) => (
            <AppCard data={x} key={x.id} />
          ))}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  );
}
