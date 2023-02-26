import React from "react";
import { Box, keyframes, Image } from "@chakra-ui/react";

const MainPage = () => {
  const blurOnLoad = keyframes(`
    from {

    }

    to {
      filter: blur(5px)
    } 
    `);
  const unBlur = keyframes(`
    from {
      filter: blur(5px)
    }

    to {
      filter: blur(0px)
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
  }
      `);
  const drawRight = keyframes(`
      from {
        height: 0%
      }
      to {
        height: 80%;
        border-right: 2px solid white;
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
          }
              `);
  const drawLeft = keyframes(`
              from {
                height: 0%
              }
              to {
                height: 80%;
                border-left: 2px solid white;
              }
                  `);
  return (
    <Box
      w="100vw"
      h="100vh"
      backgroundColor="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
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
        src={require("/public/images/randomMainVector.svg")}
        filter="blur(5px)"
        position="absolute"
        animation={`${unBlur} 3s linear 1.5s forwards`}
      />
    </Box>
  );
};

export default MainPage;
