import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 84vh;
  width: 100%;
  align-items: center;
  justify-content: center;

  & > .content {
    display: flex;
    width: 85vw;
    max-width: 1434px;
    gap: clamp(2em, 5vw, 4em);
    align-items: center;
    justify-content: space-between;

    .left-content {
      flex: 1;
      display: flex;
      flex-direction: column;

      .icons-content {
        display: flex;
        gap: 0.8em;
        margin-top: 1em;
      }

      p {
        font-size: clamp(26px, 2.8vw, 44px);
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        font-weight: 300;
      }

      h1 {
        font-size: clamp(36px, 3.6vw, 60px);
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        font-weight: 800;
        text-transform: uppercase;
      }

      h2 {
        font-size: clamp(20px, 2.2vw, 36px);
        color: ${({ theme }) => theme.COLORS.TERTIARY};
        font-weight: 300;
      }
    }

    .right-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
        filter: drop-shadow(0 10px 30px rgba(123, 44, 191, 0.2));
      }
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 2.5em;
      align-items: center;

      .left-content,
      .right-content {
        width: 100%;
      }

      .right-content img {
        max-width: 80%;
      }
    }

    @media (max-width: 768px) {
      .left-content > .icons-content {
        gap: 0.4em;
      }
    }
  }
`;
