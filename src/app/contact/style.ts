import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  min-height: 800px;
  height: 84vh;
  justify-content: center;
  align-items: center;
  gap: 4em;
  flex-direction: row;

  section {
    display: flex;
    max-width: 1243px;
    width: 65vw;

    gap: 4em;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;

    > div:first-child {
      display: flex;
      flex-direction: column;
      gap: 1.2em;
      width: 35vw;
      max-width: 565px;
      padding-bottom: 18em;

      h1 {
        font-size: clamp(28px, 3.2vw, 38px);
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-bottom: 0.5em;
        transition: color 0.3s ease;
      }

      p {
        font-size: clamp(15px, 3vw, 17px);
        font-weight: 400;
        line-height: 1.7;
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        transition: color 0.3s ease;

        span {
          font-weight: 600;
          color: ${({ theme }) => theme.COLORS.PRIMARY};
          word-wrap: break-word;
        }
      }

      @media (max-width: 1280px) {
        width: 100%;
        padding-bottom: 0;
      }
    }

    > div:last-child {
      flex: 1;

      @media (max-width: 1280px) {
        width: 100%;
      }
    }

    @media (max-width: 1280px) {
      width: 100%;
      gap: 3em;
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }

    @media (max-width: 580px) {
      width: 80vw;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 6em 0;
    align-items: flex-start;
  }
`;
