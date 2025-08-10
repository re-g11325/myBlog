import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";

function CenterContent(props) {
  // console.log("center content props", props);

  return (
    <Box flex="4" p="4" bg="gray.50">
      <Card
        h={"100%"}
        border={"1px"}
        borderRight={"4px"}
        borderBottom={"4px"}
        borderColor={
          props.showProfile ? "black" : (props.items[0] ?? { color: "" }).color
        }
      >
        <CardBody>
          {props.showProfile && props.profile ? (
            <Box py={3}>
              <Image src={props.profile.iconBase64 ?? ""}></Image>
              <Heading>
                {props.profile.surname + " " + props.profile.name}
              </Heading>
              <Text fontSize="lg">{"Born on: " + props.profile.birthDate}</Text>
              <Text fontSize="lg">
                {"Based in " +
                  props.profile.city +
                  ", " +
                  props.profile.country}
              </Text>
              <br></br>
              <Text fontSize="lg">{props.profile.introduction}</Text>
            </Box>
          ) : (
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
          )}
        </CardBody>
      </Card>
    </Box>
  );
}

export default CenterContent;
