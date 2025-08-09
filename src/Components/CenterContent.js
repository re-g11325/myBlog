import React from "react";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";

function CenterContent(props) {
  //   console.log("center content props", props);

  return (
    <Box flex="4" p="4" bg="gray.50">
      <Card
        h={"100%"}
        border={"1px"}
        borderRight={"4px"}
        borderBottom={"4px"}
        borderColor={(props.items[0] ?? { color: "" }).color}
      >
        <CardBody>
          <UnorderedList spacing={3}>
            {props.items.map((_p, _i) => (
              <ListItem key={_i}>
                <Button
                  onClick={() => {
                    props.onClick(_p.name);
                  }}
                >
                  {_p.name}
                </Button>
              </ListItem>
            ))}
          </UnorderedList>
        </CardBody>
      </Card>
    </Box>
  );
}

export default CenterContent;
