"use client";

import styled from "styled-components";

export const IconLinkedin = () => {
  return (
    <StyledSVG
      width="44"
      height="44"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="gradient_linkedin"
          x1="100%"
          y1="60%"
          x2="0%"
          y2="40%"
        >
          <stop offset="0%" style={{ stopColor: "#7b2cbf", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#f85e9f", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        d="M45 13.2222V32.7778C45 39.5279 39.5279 45 32.7778 45H13.2222C6.47208 45 1 39.5279 1 32.7778V13.2222C1 6.47208 6.47208 1 13.2222 1H32.7778C39.5279 1 45 6.47208 45 13.2222Z"
        className="main-path"
      />
      <path d="M10.7778 35.2222V26.6667V18.1111" className="frame-path" />
      <path
        d="M20.5555 35.2222V27.2778M20.5555 27.2778V18.1111M20.5555 27.2778C20.5555 18.1111 35.2222 18.1111 35.2222 27.2778V35.2222"
        className="frame-path"
      />
      <path d="M10.7778 10.8022L10.8022 10.7751" className="dot-path" />
    </StyledSVG>
  );
};

const StyledSVG = styled.svg`
  width: 44px;
  height: clamp(38px, 5.5vw, 45px);
  fill: none;
  overflow: visible;

  .main-path,
  .frame-path,
  .dot-path {
    stroke: ${({ theme }) => theme.COLORS.SECONDARY};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    transition: stroke 0.3s ease;
  }

  &:hover {
    .main-path,
    .frame-path,
    .dot-path {
      stroke: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }
`;
