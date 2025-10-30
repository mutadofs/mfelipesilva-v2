import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.main`
  display: flex;
  width: 100%;
  min-height: 800px;
  align-items: center;
  justify-content: center;
  gap: 4em;
`;

export const MotionSection = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 75vw;
  max-width: 1240px;
  gap: 50px;
  padding: 10em 0;

  .about-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 650px;
    gap: 20px;

    h1 {
      font-size: clamp(28px, 3.2vw, 38px);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: ${({ theme }) => theme.COLORS.SECONDARY};
      margin-bottom: 0.3em;
      transition: color 0.3s ease;
    }

    p {
      font-size: clamp(15px, 3vw, 16px);
      font-weight: 300;
      line-height: 1.7;
      letter-spacing: 0.2px;
      color: ${({ theme }) => theme.COLORS.SECONDARY};
      transition: color 0.3s ease;

      strong {
        color: ${({ theme }) => theme.COLORS.PRIMARY};
        font-weight: 600;
      }
    }

    h3 {
      font-size: clamp(20px, 3vw, 24px);
      font-weight: 600;
      text-transform: uppercase;
      margin: 1.5em 0 0.5em;
      color: ${({ theme }) => theme.COLORS.SECONDARY};
      transition: color 0.3s ease;
    }

    .about-experiences {
      display: flex;
    }
  }

  .about-image {
    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      pointer-events: none;
      user-select: none;
    }
  }

  @media (max-width: 1220px) {
    width: 70vw;
  }

  @media (max-width: 992px) {
    width: 85vw;
    gap: 2.5em;
    padding: 5em 0;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const MotionList = styled(motion.ul)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  margin-left: 10px;

  &::before {
    content: "";
    position: absolute;
    left: 8px;
    bottom: 0;
    width: 2px;
    height: 98%;
    border-radius: 2px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.COLORS.PRIMARY} 0%,
      ${({ theme }) => theme.COLORS.SECONDARY} 50%,
      transparent 100%
    );
  }
`;

export const MotionListItem = styled(motion.li)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 0 10px 30px;
  transition: transform 0.3s ease;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2em;
    margin-bottom: 0.3em;

    h4 {
      display: flex;
      gap: 5px;
      font-size: 19px;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.SECONDARY};

      span {
        font-size: 17px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.TERTIARY};

        &::before {
          content: "— ";
        }
      }
    }

    span {
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.TERTIARY};
      white-space: nowrap;
    }

    @media (max-width: 1220px) {
      flex-direction: column;
      gap: 0.5em;
    }
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.COLORS.SECONDARY};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 0.5em;

    li {
      list-style: none;
      transition: transform 0.2s ease;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    width: 15px;
    height: 15px;
    border: 3px solid ${({ theme }) => theme.COLORS.PRIMARY};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.COLORS.BACKGROUND};
    transition: all 0.3s ease;
  }

  &:hover::before {
    transform: scale(1.2);
    box-shadow: 0 0 0 4px ${({ theme }) => theme.COLORS.BACKGROUND},
      0 0 15px rgba(123, 44, 191, 0.4);
  }
`;
