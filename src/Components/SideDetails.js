import {
  Box,
  Button,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import React from "react";

function SideDetails(props) {
  return (
    <Box
      flex="3"
      p="4"
      bg="gray.100"
      minH="calc(100vh - 60px)"
      borderLeft="1px solid"
      borderColor="gray.200"
    >
      <Card h={"100%"}>
        <CardBody>
          <Stack spacing={3}>
            {props.details.map((_p) => (
              <Text as="samp">{_p.description}</Text>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default SideDetails;
