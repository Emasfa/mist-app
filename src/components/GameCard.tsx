import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/use-games";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"20px"} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
