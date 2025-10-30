"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import { Popover } from "antd";

import i18n from "@/utils/i18n";

import { useTranslation } from "react-i18next";

import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion";

import {
  IconBrazil,
  IconClose,
  IconDarkMode,
  IconGlobe1,
  IconLightMode,
  IconMenu,
  IconUnitedStates,
} from "./icons";

interface IHeaderProps {
  isOpen: boolean;
}

export const StyledHeader = styled.header<IHeaderProps>`
  display: flex;
  width: 100%;
  height: 5em;
  align-items: end;
  flex-direction: row;
  justify-content: center;

  & > nav {
    display: flex;
    max-width: 1434px;
    width: 85vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > div > a > img {
      width: 55px;
      height: auto;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    & > ul {
      display: flex;
      gap: 0.5em;
      list-style: none;
      flex-direction: row;

      & > li > a {
        position: relative;
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        font-size: 16px;
        font-weight: 500;
        padding: 9.5px 15px;
        border-radius: 13px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: color 0.3s ease;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            -50deg,
            rgba(123, 44, 191, 0.15) 0%,
            rgba(248, 94, 159, 0.15) 100%
          );
          opacity: 0;
          transform: scale(0.8);
          transition:
            opacity 0.3s ease,
            transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: inherit;
          z-index: -1;
        }

        &::after {
          content: "";
          position: absolute;
          bottom: 5px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(123, 44, 191, 1) 0%,
            rgba(248, 94, 159, 1) 100%
          );
          transform: translateX(-50%);
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        &:hover {
          color: #7b2cbf;

          &::before {
            opacity: 1;
            transform: scale(1);
          }

          &::after {
            width: calc(100% - 30px);
          }
        }
      }

      @media (max-width: 768px) {
        & > li > a {
          display: none;
        }
      }
    }

    @media (max-width: 768px) {
      justify-content: space-between;
    }

    & > div {
      display: flex;
      gap: 5px;

      & > div > button {
        position: relative;
        display: flex;
        padding: 7px;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        border-radius: 13px;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        transition:
          color 0.3s ease,
          background-color 0.3s ease,
          transform 0.2s ease;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            -50deg,
            rgba(123, 44, 191, 0.15) 0%,
            rgba(248, 94, 159, 0.15) 100%
          );
          opacity: 0;
          transform: scale(0.8);
          transition:
            opacity 0.3s ease,
            transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: inherit;
          z-index: -1;
        }

        &:hover {
          transform: scale(1.05);

          &::before {
            opacity: 1;
            transform: scale(1);
          }
        }

        &:active {
          transform: scale(0.95);
        }

        & > svg {
          transition: transform 0.3s ease;
        }
      }

      & > div {
        cursor: pointer;
      }

      & > div:nth-child(3) {
        display: none;
      }

      @media (max-width: 768px) {
        & > div:nth-child(1),
        :nth-child(2) {
          display: flex;

          & > button > svg {
            width: 30px;
          }
        }

        & > div:nth-child(3) {
          display: flex;
          z-index: 4;
        }
      }
    }
  }

  & > div {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    backdrop-filter: ${({ isOpen }) => (isOpen ? "blur(3px)" : "blur(0)")};
    -webkit-backdrop-filter: ${({ isOpen }) =>
      isOpen ? "blur(3px)" : "blur(0)"};
    transition:
      backdrop-filter 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-backdrop-filter 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    @media (max-width: 768px) {
      display: flex;
    }
  }

  & > aside {
    display: none;
    position: fixed;
    width: min(75vw, 350px);
    height: 100vh;
    top: 0;
    bottom: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    z-index: 3;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    box-shadow: ${({ isOpen }) =>
      isOpen ? "-5px 0 30px rgba(0, 0, 0, 0.15)" : "none"};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition:
      right 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    & > ul {
      display: flex;
      width: 100%;
      gap: 2em;
      list-style: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > li > a {
        position: relative;
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        font-size: 25px;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        transition:
          color 0.3s ease,
          transform 0.3s ease;
        display: inline-block;

        &::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            rgba(123, 44, 191, 1) 0%,
            rgba(248, 94, 159, 1) 100%
          );
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        &:hover {
          color: #7b2cbf;
          transform: translateX(5px);

          &::after {
            width: 100%;
          }
        }
      }
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

const Content = styled.div`
  display: flex;
  gap: 0.5em;
  flex-direction: column;

  span {
    display: flex;
    gap: 0.7em;
    padding: 7px 15px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 8px;
    align-items: center;
    text-transform: uppercase;
    transition:
      color 0.3s ease,
      background-color 0.3s ease,
      transform 0.2s ease;

    &:hover {
      background-color: rgba(123, 44, 191, 0.1);
      transform: translateX(3px);
    }

    &:active {
      transform: scale(0.97);
    }
  }
`;

interface INavbarProps {
  theme: any;
  toggleName: any;
}

export const Navbar = ({ theme, toggleName }: INavbarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const content = (
    <Content>
      <motion.span
        onClick={() => i18n.changeLanguage("pt")}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <IconBrazil />
        Pt-br
      </motion.span>
      <motion.span
        onClick={() => i18n.changeLanguage("en")}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <IconUnitedStates />
        En
      </motion.span>
    </Content>
  );

  return (
    <StyledHeader isOpen={isOpen}>
      <nav>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/">
            <img
              src="https://i.ibb.co/BGpwgzb/portfolio-logo-200x.png"
              alt="logo"
            />
          </Link>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/about">{t("navbar.about")}</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/projects">{t("navbar.projects")}</Link>
          </motion.li>
          <motion.li
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/contact">{t("navbar.contact")}</Link>
          </motion.li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <Popover placement="bottomRight" trigger="click" content={content}>
              <button>
                <IconGlobe1 />
              </button>
            </Popover>
          </div>
          <div>
            <motion.button
              onClick={toggleName}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
            >
              {theme.typeTheme === "light" ? (
                <IconLightMode />
              ) : (
                <IconDarkMode />
              )}
            </motion.button>
          </div>
          <div>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.button
                  key="close"
                  onClick={() => setIsOpen(!isOpen)}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconClose />
                </motion.button>
              ) : (
                <motion.button
                  key="menu"
                  onClick={() => setIsOpen(!isOpen)}
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconMenu />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </nav>
      <div onClick={() => setIsOpen(!isOpen)} />
      <aside>
        <ul>
          <motion.li
            initial={{ opacity: 0, x: 50 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link href="/about" onClick={() => setIsOpen(false)}>
              {t("navbar.about")}
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 50 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              {t("navbar.projects")}
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: 50 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              {t("navbar.contact")}
            </Link>
          </motion.li>
        </ul>
      </aside>
    </StyledHeader>
  );
};
