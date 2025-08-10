import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React from "react";

function TopNavbar(props) {
  return (
    <Flex w="100%" bg="white" borderBottom="1px" borderColor="gray.200" p={4}>
      <Button
        mr={4}
        leftIcon={<HamburgerIcon></HamburgerIcon>}
        onClick={() => {
          props.onLeftSideOpen();
        }}
      >
        Menu
      </Button>

      <Button onClick={props.onProfileClick}>
        <Box p={1}>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name={props.profile.surname + " " + props.profile.name}
              src={props.profile.iconBase64}
            />

            <Box>
              <Heading size="sm">
                {props.profile.surname + " " + props.profile.name}
              </Heading>
              <Text></Text>
            </Box>
          </Flex>
        </Box>
      </Button>
    </Flex>
  );
}

export default TopNavbar;
