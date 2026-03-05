import { PriorityEnum, type Priority } from "@/types";
import { Box } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface Props {
  priority: Priority;
}

export default function PriorityBadge({ priority }: Props) {
  let icon = "";
  let color = "";

  switch (priority.id) {
    case PriorityEnum.Critical: {
      icon = 'ix:double-chevron-up'
      color = '#B93C3C'
      break
    }
    case PriorityEnum.High: {
      icon = 'ix:chevron-up'
      color = '#B93C3C'
      break
    }
    case PriorityEnum.Low: {
      icon = 'ix:chevron-down'
      color = '#2D60ED'
      break
    }
    case PriorityEnum.Normal: {
      icon = 'ix:rhomb'
      color = '#CC892A'
      break
    }
  }

  return (
    <Box display={'flex'} gap={'6px'} >
      <Icon icon={icon} style={{scale: 1.2, translate: '0 3px', color}} />
      <Box opacity={0.5}>{priority.name}</Box>
    </Box>
  );
}
