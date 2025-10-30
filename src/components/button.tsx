"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

interface IButton {
  children: ReactNode;
  size?: "large" | "middle" | "small";
  icon?: "auto";
  variant?: "fill" | "outline";
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

const StyledButton = styled(motion.button)<IButton>`
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 0.5em;
  height: ${({ size }) =>
    size === "large"
      ? "clamp(45px, 6vw, 55px)"
      : size === "small"
      ? "clamp(30px, 4vw, 35px)"
      : "clamp(38px, 5.5vw, 45px)"};
  padding: 0
    ${({ size }) =>
      size === "large" ? "30px" : size === "small" ? "15px" : "20px"};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${({ size }) =>
    size === "large"
      ? "clamp(14px, 2.2vw, 16px)"
      : size === "small"
      ? "clamp(11px, 1.8vw, 12px)"
      : "clamp(12px, 2vw, 14px)"};
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 13px;
  text-transform: uppercase;
  color: ${({ theme, variant }) =>
    variant === "fill" ? "#FFFFFF" : theme.COLORS.SECONDARY};
  background-color: ${({ theme, variant }) =>
    variant === "fill" ? theme.COLORS.PRIMARY : "transparent"};
  border: 2px solid
    ${({ theme, variant }) =>
      variant === "fill" ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY};
  transition: border-color 0.3s ease, background-color 0.3s ease,
    transform 0.2s ease, box-shadow 0.3s ease;

  & > a {
    display: flex;
    gap: 0.7em;
    align-items: center;
    justify-content: center;
    color: inherit;
    white-space: nowrap;
    text-decoration: none;
    transition: color 0.3s ease;

    & > div {
      display: flex;
      align-items: center;

      & > svg {
        color: inherit;
        transition: transform 0.3s ease;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ variant }) =>
      variant === "fill"
        ? "linear-gradient(-50deg, rgba(248, 94, 159, 0.3) 0%, rgba(123, 44, 191, 0.3) 100%)"
        : "linear-gradient(-50deg, rgba(123, 44, 191, 0.15) 0%, rgba(248, 94, 159, 0.15) 100%)"};
    transition: left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    ${({ variant }) =>
      variant === "fill"
        ? `
      background-color: #9333ea;
      border-color: #9333ea;
      box-shadow: 0 8px 20px rgba(123, 44, 191, 0.3);
    `
        : `
      border-color: #7b2cbf;
      box-shadow: 0 5px 15px rgba(123, 44, 191, 0.2);
    `}

    &::before {
      left: 0;
    }

    & a > div > svg {
      transform: translateX(3px);
    }
  }

  &:active {
    transform: scale(0.97);

    &::after {
      width: 300px;
      height: 300px;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 0 10px;
  }
`;

export const PrimaryButton = StyledButton;

export const Button = (props: IButton) => {
  return (
    <StyledButton
      variant={props.variant || "outline"}
      size={props.size || "middle"}
      type={props.type || "button"}
      onClick={props.onClick}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {props.children}
    </StyledButton>
  );
};
