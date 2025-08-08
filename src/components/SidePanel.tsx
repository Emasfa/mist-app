import { Grid, GridItem, Heading, HStack, Icon } from "@chakra-ui/react";
import ClickableHeading from "./ClickableHeading";
import { CgProfile } from "react-icons/cg";

const SidePanel = () => {
  return (
    <Grid templateRows="repeat(8, 1fr)" w="200px">
      <GridItem>
        <ClickableHeading>Home</ClickableHeading>
      </GridItem>
      <GridItem>
        <ClickableHeading>Reviews</ClickableHeading>
      </GridItem>
      <HStack>
        <ClickableHeading>Your profile</ClickableHeading>
        <Icon as={CgProfile} boxSize={"1.6rem"}></Icon>
      </HStack>
      <GridItem bg="gray.400">Headerless subsection</GridItem>
      <GridItem bg="gray.400">Subsection</GridItem>
      <GridItem bg="gray.400">Subsection</GridItem>
      <GridItem bg="gray.400">Subsection</GridItem>
      <GridItem bg="gray.400">Subsection</GridItem>
    </Grid>
  );
};

export default SidePanel;
