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

function MobileNav({ onOpen }) {
  return (
    <Flex
      as="header"
      pos="fixed"
      top="0"
      w="100%"
      h="60px"
      bg="white"
      align="center"
      px="4"
      borderBottom="1px solid"
      borderColor="gray.200"
      justify="space-between"
      zIndex="1"
    >
      <IconButton aria-label="Open menu" icon={<div></div>} onClick={onOpen} />
    </Flex>
  );
}

function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
      {/* top nav */}
      <Box>
        <MobileNav onOpen={onOpen} />

        {/* main content area */}
        <Flex pt="60px">
          <Sidebar></Sidebar>
          <Box flex="4" p="4" bg="gray.50" minH="calc(100vh - 60px)">
            <h2>step items</h2>
            {/* your product list here */}
          </Box>

          {/* cart panel */}
          <Box
            flex="3"
            p="4"
            bg="gray.100"
            minH="calc(100vh - 60px)"
            borderLeft="1px solid"
            borderColor="gray.200"
          >
            <h2>item detail</h2>
            {/* cart details */}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Dashboard;
