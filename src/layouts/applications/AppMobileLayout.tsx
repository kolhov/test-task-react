import AppCards from "@/components/appCards/AppCards";
import AppModalForm from "@/components/applicationModalForm/AppModalForm";
import FilterBar from "@/components/filterBar/FilterBar";
import SearchBarMobile from "@/components/searchBar/SearchBarMobile";
import { applicationsData } from "@/mock/data";
import { StatusEnum } from "@/types";
import { Box } from "@chakra-ui/react";
import { useState, type ChangeEvent } from "react";

export default function AppMobileLayout() {
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
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"10px"}
        position={"fixed"}
        bottom={"32px"}
        right={"16px"}
        zIndex={99}
      >
        <SearchBarMobile search={search} onChange={onSearchChange} />
        <AppModalForm />
      </Box>
      <Box padding={"25px 16px"}>
        <FilterBar
          isPersonal={isPersonal}
          currentStatus={currentStatus}
          onPersonClick={onPersonClick}
          onStatusClick={onStatusClick}
        />
        <AppCards data={filteredData} />
      </Box>
    </>
  );
}
