import React from "react";
import { Box, keyframes, Image, Link } from "@chakra-ui/react";

const MainPage = () => {
  //Animations
  const blurOnLoad = keyframes(`
    from {

    }

    to {
      filter: blur(5px)
    } 
    `);
  const unBlur = keyframes(`
    from {
      filter: blur(5px);
      opacity: 0%;
    }

    to {
      filter: blur(0px);
      opacity: 100%;
    } 
    `);
  const drawTop = keyframes(`
  from {
    width: 0%;
    border-top: 2px solid white;
  }
  to {
    width: 100%;
    border-top: 2px solid white;
    border-radius: 5px;
  }
    `);
  const drawRight = keyframes(`
      from {
        height: 0%
      }
      to {
        height: 80%;
        border-right: 2px solid white;
        border-radius: 5px;
      }
    `);
  const drawBottom = keyframes(`
          from {
            width: 0%;
            border-bottom: 2px solid white;
          }
          to {
            width: 100%;
            border-bottom: 2px solid white;
            border-radius: 5px;
          }
    `);
  const drawLeft = keyframes(`
              from {
                height: 0%
              }
              to {
                height: 80%;
                border-left: 2px solid white;
                border-radius: 5px;
              }
    `);
  const navBarScroll = keyframes(`
  from{
    height: 0px;
  }
  to {
    height: 70px;
  }`);
  return (
    <Box
      w="100vw"
      h="100vh"
      backgroundColor="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      overflow="hidden"
    >
      <Box
        w="full"
        h="full"
        bgColor="black"
        overflow="hidden"
        display="flex"
        backgroundImage={require("/public/images/theme-photos-kPHYuzqoaz0-unsplash.jpg")}
        backgroundPosition="center"
        backgroundSize="cover"
        animation={`${blurOnLoad} 3s linear 1.5s forwards`}
        alt="Background"
      ></Box>
      <Box
        w="50vw"
        maxW="50vw"
        h="80vh"
        position="absolute"
        animation={`${drawTop} 2s linear 1.5s forwards`}
      ></Box>
      <Box
        w="50vw"
        maxW="50vw"
        h="80vh"
        position="absolute"
        animation={`${drawRight} 2s linear 1.5s forwards`}
      ></Box>
      <Box
        w="50vw"
        maxW="50vw"
        h="80vh"
        position="absolute"
        animation={`${drawBottom} 2s linear 1.5s forwards`}
      ></Box>
      <Box
        w="50vw"
        maxW="50vw"
        h="80vh"
        position="absolute"
        animation={`${drawLeft} 2s linear 1.5s forwards`}
      ></Box>
      <Image
        alt="logo"
        maxW="35%"
        opacity="0%"
        src={require("/public/images/randomMainVector.svg")}
        filter="blur(5px)"
        position="absolute"
        animation={`${unBlur} 3s linear 1.5s forwards`}
      />
      {/*NavBar*/}
      <Box
        w="full"
        m={-1}
        h="0"
        border="1px solid #1a1a1a"
        display="flex"
        flexDirection="row"
        alignItems="center"
        animation={`${navBarScroll} 2.5s linear 1.5s forwards`}
      >
        <Image
          alt="navLogo"
          src={require("/public/images/randomMainVector.svg")}
          h="50px"
          w="50px"
          ml="5%"
        />
        <Box
          display="flex"
          w="full"
          h="full"
          alignSelf="flex-end"
          alignItems="center"
          justifyContent="space-evenly"
          p={5}
          color="white"
          fontFamily="Retrolight"
        >
          <Link>Menu</Link>
          <Link>Notre Histoire</Link>
          <Link>Location</Link>
          <Link>Album</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
