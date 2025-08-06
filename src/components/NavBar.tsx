import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" paddingY="0.5rem"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
