"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../../config/theme";

export function Providers({ children }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
