'use client'
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Main from "@/components/Main";
import { lightTheme } from "@/components/Themes";
import { AnimatePresence } from "framer-motion";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}


body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
}

`


export default function Home() {
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme}>
    <AnimatePresence mode="wait">
     <Main/>
     </AnimatePresence>
    </ThemeProvider>
     </>
  );
}
