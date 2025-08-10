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
  Collapse,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import CenterContent from "../Components/CenterContent";
import SideDetails from "../Components/SideDetails";
import TopNavbar from "../Components/TopNavbar";
import MobileHandler from "../Components/MobileHandler";

function Dashboard() {
  const [navPaths, setnavPaths] = React.useState([]);
  const [centerInfo, setCenterInfo] = React.useState([]);
  const [sideDetails, setSideDetails] = React.useState([]);

  const [userData, setuserData] = React.useState({});
  const [showProfile, setshowProfile] = React.useState(true);

  const [isMobile, setIsMobile] = React.useState(false);
  const [leftSideIsOpen, setleftSideIsOpen] = React.useState(true);
  const [rightSideIsOpen, setrightSideIsOpen] = React.useState(true);
  const leftDisclosure = useDisclosure({ defaultIsOpen: true });
  const rightDisclosure = useDisclosure({ defaultIsOpen: true });

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
        clearData();
      })
      .catch((error) => console.log("Error loading JSON:", error));
    //save json in state
    //get list of nav values
  };
  const clearData = () => {
    setshowProfile(true);
    setCenterInfo([]);
    setSideDetails([]);
  };
  const checkMobile = () => {
    const isMobile = window.innerWidth <= window.innerHeight;
    setrightSideIsOpen(true);
    setleftSideIsOpen(true);
    if (isMobile) {
      setrightSideIsOpen(false);
      setleftSideIsOpen(false);
    }
    setIsMobile(isMobile);
  };

  React.useEffect(() => {
    onLoad();
    checkMobile(); // run at mount
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <Box minH="100vh">
      <TopNavbar
        onProfileClick={() => {
          clearData();
        }}
        profile={userData.profile ?? {}}
        onLeftSideOpen={() => {
          setleftSideIsOpen(true);
        }}
        onRightSideOpen={() => {
          setrightSideIsOpen(true);
        }}
      />

      {/* main content area */}
      <Flex h="85vh">
        <MobileHandler
          direction="left"
          isOpen={leftSideIsOpen}
          isMobile={isMobile}
          onClose={() => {
            setleftSideIsOpen(false);
          }}
        >
          <Sidebar
            paths={navPaths}
            onClick={(_navPath) => {
              //get centered infos based nav path
              var centerDetails = userData.items.filter(
                (_p) => _p.nav == _navPath
              );
              clearData();
              setshowProfile(false);
              setleftSideIsOpen(false);
              setCenterInfo(centerDetails);
              // console.log("centerDetails", centerDetails);
            }}
          ></Sidebar>
        </MobileHandler>

        <CenterContent
          items={centerInfo}
          onClick={(_itemName) => {
            var _sideDetails = userData.items.filter(
              (_p) => _p.name == _itemName
            );

            setSideDetails(_sideDetails);
            setrightSideIsOpen(true);
          }}
          showProfile={showProfile}
          profile={userData.profile}
        ></CenterContent>

        <MobileHandler
          direction="right"
          isOpen={rightSideIsOpen}
          isMobile={isMobile}
          onClose={() => {
            setrightSideIsOpen(false);
          }}
        >
          <SideDetails details={sideDetails}></SideDetails>
        </MobileHandler>
      </Flex>
    </Box>
  );
}

export default Dashboard;
