import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-family: 'Lexend', sans-serif;

  &::-moz-selection {
    background: #7b2cbf;
  }

  &::selection {
    background: #7b2cbf;
  }
}

body {
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  &::before {
    content: "";
    height: 100vh;
    width: 100vw;
    color: ${({ theme }) =>
      theme.typeTheme === "dark"
        ? "rgba(255, 255, 255, 0.03)"
        : "rgba(0, 0, 0, 0.04)"};
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    pointer-events: none;
    background:
      linear-gradient(currentcolor 1px, transparent 1px) 0% 0% / 94px 90px,
      linear-gradient(to right, currentcolor 1px, transparent 1px) 0% 0% / 94px 90px;
    transition: color 0.5s linear;
  }
}
`;
