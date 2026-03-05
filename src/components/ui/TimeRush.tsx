import { timeToSeconds } from "@/utils";
import { Box } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface Props {
  time: string;
  minTime: string;
  maxTime: string;
}

enum timeVariant {
  less,
  normal,
  more,
}

export default function TimeRush({ time, maxTime, minTime }: Props) {
  const variant = getTimeVariant();

  let icon = "";
  let color = "#1C1C1C";
  let opacity = 1;

  switch (variant) {
    case timeVariant.less: {
      color = "#1C1C1C";
      icon = "solar:sort-by-time-broken";
      break;
    }
    case timeVariant.more: {
      color = "#B93C3C";
      icon = "si:warning-line";
      break;
    }
    case timeVariant.normal: {
      color = "#0E7411";
      icon = "ix:success";
      opacity = 0.6
      break;
    }
  }

  function getTimeVariant() {
    const sec = timeToSeconds(time);
    if (sec === undefined) return undefined

    if (sec < timeToSeconds(minTime)!) return timeVariant.less;
    if (sec > timeToSeconds(maxTime)!) return timeVariant.more;
    return timeVariant.normal;
  }

  return (
    <Box color={color} display={'flex'} gap={'5px'} alignContent={'center'}>
      <Icon icon={icon} style={{ translate: '0 3px', opacity }}/>
      {time}
    </Box>
  );
}
