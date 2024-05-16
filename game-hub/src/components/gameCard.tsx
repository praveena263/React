import { Game } from "../hoooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
interface Props {
  game: Game;
}

const gameCard = ({ game }: Props) => {
  return (
    <Card width='265px' borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)}/>
        <CriticScore score={game.metacritic} />
        </HStack>
        {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
      </CardBody>
    </Card>
  );
};

export default gameCard;
