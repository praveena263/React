import { Platform } from "../hoooks/useGames";
  import { HStack, Icon ,Text } from "@chakra-ui/react";
 import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap:{[key:string]: any}={
    name : FaPlaystation,
    slug :FaPlaystation,
    pc:FaWindows,
    playstation:FaPlaystation,
    xbox:FaXbox,
    nintendo:SiNintendo,
    mac:FaApple,
    linux: FaLinux,
    android:FaAndroid,
    ios: MdPhoneIphone,
    web:BsGlobe
  }
  console.log('platforms',platforms)
  return (
    
    <HStack marginY='10px' >
      {platforms.map((platform) => (
      // <Text>{platform.name}</Text>
        <Icon as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  )
};

export default PlatformIconList;
