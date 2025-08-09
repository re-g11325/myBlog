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
    <Flex
      as="header"
      pos="fixed"
      top="0"
      w="100%"
      h="10%"
      bg="white"
      align="center"
      px="4"
      borderBottom="1px solid"
      borderColor="gray.200"
      justify="space-between"
      zIndex="1"
    >
      <Button onClick={props.onProfileClick}>
        <Box p={1}>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name={props.profile.surname + " " + props.profile.name}
              src="data:image/png;base64,aaa"
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
