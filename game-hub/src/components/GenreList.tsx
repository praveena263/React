import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hoooks/useGenres";
import getCroppedImageUrl from "../services/imagge-url";
// import useData from '../hoooks/useData'

const GenreList = () => {
  const { data } = useGenres();
  // const {data} =useData<Genre>('/genres')
  console.log(data)
  return (
    <List>
      {data.map((genre) => {
          return (
              <ListItem key={genre.id} paddingY='5px'>
                  <HStack>
                      <Image
                          boxSize="32px"
                          borderRadius={8}
                          src={(genre.image_background)}
                      ></Image>
                      <Text>{genre.name}</Text>
                  </HStack>
              </ListItem>
          );
      })}
    </List>
  );
};

export default GenreList;
