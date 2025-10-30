"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface ITechnology {
  children: ReactNode;
}

const StyledTechnology = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 15px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #7b2cbf;
  border-radius: 999px;
  background-color: rgba(123, 44, 191, 0.1);
  border: 1px solid transparent;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
  cursor: default;
  white-space: nowrap;

  &:hover {
    background-color: rgba(123, 44, 191, 0.15);
    border-color: rgba(123, 44, 191, 0.3);
    color: #9333ea;
    box-shadow: 0 4px 12px rgba(123, 44, 191, 0.15);
  }
`;

export const TechnologyCard = (props: ITechnology) => {
  return (
    <StyledTechnology
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {props.children}
    </StyledTechnology>
  );
};
