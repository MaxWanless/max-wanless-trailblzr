import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ParkDetailsTab from "./DetailsTabs/ParkDetailsTab/ParkDetailsTab";
import ParkHighlightsTab from "./DetailsTabs/ParkHighlightsTab/ParkHighlightsTab";
import ParkTrailsTab from "./DetailsTabs/ParkTrailsTab/ParkTrailsTab";

const ParkDetailsTabs = ({ currentPark }) => {
  const [activeTab, setActiveTab] = useState("0");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <TabContext value={activeTab}>
      <CardContent sx={{ paddingTop: "0" }}>
        <TabList onChange={handleTabChange} centered>
          <Tab label="Details" value="2" />
          <Tab label="Highlights" value="0" />
          <Tab label="Trails" value="1" />
        </TabList>
        <TabPanel value="2" sx={{ padding: "0" }}>
          <ParkDetailsTab currentPark={currentPark} />
        </TabPanel>
        <TabPanel value="0" sx={{ padding: "0" }}>
          <ParkHighlightsTab currentPark={currentPark} />
        </TabPanel>
        <TabPanel value="1" sx={{ padding: "0", overflow: "auto" }}>
          <ParkTrailsTab currentPark={currentPark} />
        </TabPanel>
      </CardContent>
    </TabContext>
  );
};

export default ParkDetailsTabs;
