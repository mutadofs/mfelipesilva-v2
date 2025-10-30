import React, { ReactNode, useEffect, useState } from "react";

import styled, { ThemeProvider } from "styled-components";

import { motion } from "framer-motion";

import "@/utils/i18n";

import GlobalStyle from "@/styles/global";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

import dark from "@/themes/dark";
import light from "@/themes/light";

interface ILayoutProps {
  children: ReactNode;
}

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Layout = ({ children }: ILayoutProps) => {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(() => {
    // Aplicar atributo data-theme no body para melhor controle do tema
    document.body.setAttribute("data-theme", theme.typeTheme);
  }, [theme]);

  const toggleTheme = () => {
    const changedTheme = theme.typeTheme === "dark" ? light : dark;
    setTheme(changedTheme);
    localStorage.setItem("theme", JSON.stringify(changedTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutContainer data-theme={theme.typeTheme}>
        <Navbar theme={theme} toggleName={toggleTheme} />
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  );
};
