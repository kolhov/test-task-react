import AppCards from "@/components/appCards/AppCards";
import AppModalForm from "@/components/applicationModalForm/AppModalForm";
import FilterBar from "@/components/filterBar/FilterBar";
import { applicationsData } from "@/mock/data";
import { StatusEnum } from "@/types";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function AppMobileLayout() {
  const [isPersonal, setIsPersonal] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(StatusEnum.AllStatuses);

  function onPersonClick() {
    setIsPersonal((x) => !x);
  }
  function onStatusClick(status: StatusEnum) {
    setCurrentStatus(status);
  }

  const MY_ID = 101;
  const filteredData = applicationsData
    .filter((x) => (isPersonal ? x.technician.id === MY_ID : true))
    .filter((x) =>
      currentStatus === StatusEnum.AllStatuses
        ? true
        : x.status.id === currentStatus,
    );

  return (
    <>
      <Box position={"fixed"} bottom={"32px"} right={"16px"} zIndex={99}>
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
