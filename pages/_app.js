import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import theme from "../config/theme";

import Layout from "@/components/layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";


export default function App({ Component, pageProps }) {
  return (
    <ChakraBaseProvider theme={theme}>
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </ChakraBaseProvider>
  );
}
