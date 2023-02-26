import React from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import MainPage from "./components/Mainpage";
import Footer from "./components/footer";

const colors = {
  body: { overflowX: "hidden" },
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
  );
};

export default App;
