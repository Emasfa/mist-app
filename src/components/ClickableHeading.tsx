import { Heading } from "@chakra-ui/react";

export default function ClickableHeading({ children, ...props }) {
  return (
    <Heading
      as="h1"
      fontSize="2xl"
      color="gray.200"
      cursor="pointer"
      transition="color 0.2s ease-in-out"
      marginY="10px"
      _hover={{
        color: "gray.500",
      }}
      {...props}
    >
      {children}
    </Heading>
  );
}
