"use client";

import styled from "styled-components";

export const IconGithub1 = () => {
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
          id="gradient_github"
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
      <path
        d="M28.6666 36V32.274C28.7166 31.655 28.6308 31.0326 28.4146 30.4484C28.1986 29.8642 27.8572 29.3314 27.4134 28.8856C31.6 28.4312 36 26.8862 36 19.7978C35.9996 17.9851 35.2836 16.242 34 14.9292C34.6078 13.3434 34.5648 11.5906 33.88 10.0348C33.88 10.0348 32.3066 9.5804 28.6666 11.9562C25.6107 11.1498 22.3895 11.1498 19.3334 11.9562C15.6934 9.5804 14.1201 10.0348 14.1201 10.0348C13.4353 11.5906 13.3923 13.3434 14.0001 14.9292C12.7069 16.2518 11.9901 18.0106 12.0001 19.8366C12.0001 26.8732 16.4001 28.4182 20.5867 28.9244C20.1481 29.3658 19.8097 29.8922 19.5938 30.4694C19.3779 31.0464 19.2891 31.6612 19.3334 32.274V36"
        className="frame-path"
      />
      <path
        d="M19 32.5675C15.1429 33.7248 11.9286 32.5675 10 29"
        className="dot-path"
      />
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
