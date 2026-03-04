import { useMediaQuery } from "@chakra-ui/react";
import AppMobileLayout from "./layouts/applications/AppMobileLayout";
import MainLayout from "./layouts/MainLayout";
import "@/assets/css/main.css";
import AppMainLayout from "./layouts/applications/AppMainLayout";

function App() {
  const [isMobile] = useMediaQuery(["(max-width: 48rem)"]);

  return (
    <>
      <MainLayout>
        {isMobile && <AppMobileLayout />}
        {!isMobile && <AppMainLayout />}
      </MainLayout>
    </>
  );
}

export default App;
