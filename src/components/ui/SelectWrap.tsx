import { createListCollection, Portal, Select } from "@chakra-ui/react";
import { useMemo } from "react";

interface Props {
  placeholder: string;
  rawData: { label: string; value: string | number }[];
  height?: object | string;
}

export default function SelectWrap({ placeholder, rawData, height }: Props) {
  const data = useMemo(
    () => createListCollection({ items: rawData }),
    [rawData],
  );

  return (
    <Select.Root collection={data} width="full">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger
          h={height ?? { base: "42px", md: "40px" }}
          borderRadius={"8px"}
        >
          <Select.ValueText
            placeholder={placeholder}
          />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator scale={1.6} translate={"-4px"} />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {data.items.map((x) => (
              <Select.Item item={x} key={x.value}>
                {x.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
