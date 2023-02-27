import React from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import MainPage from "./components/Mainpage";
import Footer from "./components/footer";
import { Global } from "@emotion/react";

const colors = {
  body: { overflowX: "hidden" },
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const fonts = {
  heading: "Retrolight",
};

const Fonts = () => (
  <Global
    styles={`
         /* latin */
         @font-face {
           font-family: 'Retrolight';
           src: local("Retrolight"), url("../fonts/Retrolight.ttf") format("truetype");
        }
        `}
  />
);
const theme = extendTheme({ colors, fonts });

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <MainPage />
    </ChakraProvider>
  );
};

export default App;
