import { statusesData } from "@/mock/data";
import { StatusEnum } from "@/types";
import { Box, Button, ScrollArea, Separator, useMediaQuery } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface Props {
  currentStatus?: number;
  isPersonal?: boolean;
  onStatusClick: (x: number) => void;
  onPersonClick: () => void;
}

export default function FilterBar({
  currentStatus = StatusEnum.AllStatuses,
  isPersonal,
  onStatusClick,
  onPersonClick,
}: Props) {

  const [isMobile] = useMediaQuery(['(max-width: 48rem)'])
  return ( 
    <ScrollArea.Root size="xs" mb={"-12px"}>
      <ScrollArea.Viewport>
        <ScrollArea.Content pb={"12px"}>
          <Box display="flex" gap={'10px'}>
            <Button
              hideFrom={"md"}
              size={'sm'}
              variant={isPersonal ? "solid" : "surface"}
              onClick={onPersonClick}
              width={'36px'}
            >
              <Icon icon={"prime:filter"} />
            </Button>
            <Box display="flex" gap={"10px"} flexDirection={'row-reverse'}>
              {statusesData.map((status) => (
                <Button
                  key={status.id}
                  size={isMobile ? 'sm' : 'md'}
                  variant={currentStatus === status.id ? "solid" : "surface"}
                  onClick={() => onStatusClick(status.id)}
                >
                  {status.name}
                </Button>
              ))}
            </Box>
            <Separator
              hideBelow={"md"}
              margin={"0 24px 0 27px"}
              size={"lg"}
              orientation={"vertical"}
            />
            <Button
              hideBelow={"md"}
              variant={isPersonal ? "solid" : "surface"}
              onClick={onPersonClick}
            >
              <Icon icon={"prime:filter"} />
              Показать только мои
            </Button>
          </Box>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal" />
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
