import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  HStack,
  Button,
  VStack,
  MenuIcon,
  ListIcon,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import CenterContent from "../Components/CenterContent";
import SideDetails from "../Components/SideDetails";
import TopNavbar from "../Components/TopNavbar";

function Dashboard() {
  const [navPaths, setnavPaths] = React.useState([]);
  const [centerInfo, setCenterInfo] = React.useState([]);
  const [sideDetails, setSideDetails] = React.useState([]);

  const [userData, setuserData] = React.useState({});

  const onLoad = () => {
    //read from json
    // const customData = require("/JsonData/items.json");
    // console.log("customData", customData);
    fetch(`${process.env.PUBLIC_URL}/JsonData/items.json`) // relative to public folder
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);

        var navigationPaths = json.items.map((_p) => ({
          nav: _p.nav,
          color: _p.color,
        }));
        navigationPaths = navigationPaths.filter(
          (obj, index, self) =>
            index === self.findIndex((o) => o.nav === obj.nav)
        );
        //console.log("navigationPaths", navigationPaths);
        setnavPaths(navigationPaths);
        setuserData(json);
      })
      .catch((error) => console.log("Error loading JSON:", error));
    //save json in state
    //get list of nav values
  };

  React.useEffect(() => {
    onLoad();
    return () => {};
  }, []);

  return (
    <Box>
      {/* top nav */}
      <Box>
        <TopNavbar onProfileClick={() => {}} profile={userData.profile ?? {}} />

        {/* main content area */}
        <Flex pt="60px">
          <Sidebar
            paths={navPaths}
            onClick={(_navPath) => {
              //get centered infos based nav path
              var centerDetails = userData.items.filter(
                (_p) => _p.nav == _navPath
              );
              setCenterInfo(centerDetails);
              setSideDetails([]);
              // console.log("centerDetails", centerDetails);
            }}
          ></Sidebar>

          <CenterContent
            items={centerInfo}
            onClick={(_itemName) => {
              var _sideDetails = userData.items.filter(
                (_p) => _p.name == _itemName
              );
              setSideDetails(_sideDetails);
            }}
          ></CenterContent>

          <SideDetails details={sideDetails}></SideDetails>
        </Flex>
      </Box>
    </Box>
  );
}

export default Dashboard;
