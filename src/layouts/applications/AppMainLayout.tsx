import AppTable from "@/components/appTable/AppTable";
import FilterBar from "@/components/filterBar/FilterBar";
import SearchBar from "@/components/searchBar/SearchBar";
import { applicationsData } from "@/mock/data";
import { StatusEnum } from "@/types";
import { Bleed, Box, Separator } from "@chakra-ui/react";
import { useState, type ChangeEvent } from "react";

export default function AppMainLayout() {
  const [isPersonal, setIsPersonal] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(StatusEnum.AllStatuses);
  const [search, setSearch] = useState<string>("");

  function onPersonClick() {
    setIsPersonal((x) => !x);
  }
  function onStatusClick(status: StatusEnum) {
    setCurrentStatus(status);
  }
  function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const MY_ID = 101;
  let filteredData = applicationsData;
  if (isPersonal)
    filteredData = filteredData.filter((x) => x.technician.id === MY_ID);
  if (currentStatus !== StatusEnum.AllStatuses)
    filteredData = filteredData.filter((x) => x.status.id === currentStatus);
  if (search?.length > 0) {
    const formatedSearch = search.toLowerCase();
    filteredData = filteredData.filter(
      ({ number, theme }) =>
        number.toLowerCase().includes(formatedSearch) ||
        theme.toLowerCase().includes(formatedSearch),
    );
  }

  return (
    <Box
      display={"flex"}
      gap={"21px"}
      marginInline={"40px"}
      mt={"21px"}
      flexDirection={"column"}
    >
      <SearchBar search={search} onChange={onSearchChange}  />
      <FilterBar
        isPersonal={isPersonal}
        currentStatus={currentStatus}
        onPersonClick={onPersonClick}
        onStatusClick={onStatusClick}
      />
      <Bleed inline={10}>
        <Separator size={"sm"} />
      </Bleed>
      <Box>
        <AppTable data={filteredData} />
      </Box>
    </Box>
  );
}
