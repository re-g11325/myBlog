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
    <Box flex="3" p="4" bg="gray.100" h="100%">
      <Card>
        <CardBody>
          <Stack spacing={3}>
            {props.details.map((_p, _i) => (
              <Text as="samp" key={_i}>
                {_p.description}
              </Text>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default SideDetails;
