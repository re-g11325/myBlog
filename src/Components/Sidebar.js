import React from "react";
import { Box, Button } from "@chakra-ui/react";

function Sidebar(props) {
  return (
    <Box flex={"1"} h="100vh" bg="gray.100" p="4">
      <Button mb="2" w="full" onClick={props.onClose}>
        navigation steps
      </Button>
    </Box>
  );
}

export default Sidebar;
