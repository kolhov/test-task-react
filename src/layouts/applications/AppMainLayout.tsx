import AppTable from "@/components/appTable/AppTable";
import FilterBar from "@/components/filterBar/FilterBar";
import SearchBar from "@/components/searchBar/SearchBar";
import { applicationsData } from "@/mock/data";
import { StatusEnum } from "@/types";
import { Bleed, Box, Separator } from "@chakra-ui/react";
import { useState } from "react";

export default function AppMainLayout() {
  const [isPersonal, setIsPersonal] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(StatusEnum.AllStatuses);

  function onPersonClick() {
    setIsPersonal((x) => !x);
  }
  function onStatusClick(status: StatusEnum) {
    setCurrentStatus(status);
  }

  return (
    <Box display={"flex"} gap={"21px"} marginInline={"40px"} mt={'21px'} flexDirection={"column"}>
      <SearchBar />
      <FilterBar
        isPersonal={isPersonal}
        currentStatus={currentStatus}
        onPersonClick={onPersonClick}
        onStatusClick={onStatusClick}
      />
      <Bleed inline={10}> 
        <Separator size={"sm"} />
      </Bleed>
      <AppTable data={applicationsData} />
    </Box>
  );
}
