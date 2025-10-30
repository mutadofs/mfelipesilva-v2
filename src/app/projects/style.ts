import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  min-height: 843px;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 75vw;
    max-width: 1240px;
    padding: 10em 0;

    h1 {
      font-size: clamp(25px, 3vw, 35px);
      color: ${({ theme }) => theme.COLORS.SECONDARY};
      font-weight: 700;
      text-transform: uppercase;
      transition: color 0.3s ease;
    }

    @media (max-width: 1440px) {
      width: 70vw;
    }

    @media (max-width: 992px) {
      width: 85vw;
      padding: 5em 0;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 3em;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border: 1px solid
    ${({ theme }) =>
      theme.typeTheme === "dark"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.08)"};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(123, 44, 191, 0.2),
      0 0 0 1px ${({ theme }) => theme.COLORS.PRIMARY};

    .card-wrapper header h2 {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }

  .card-wrapper {
    z-index: 2;
    width: 100%;
    height: 100%;
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5em;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};

    header {
      display: flex;
      flex-direction: column;
      gap: 1em;
      width: 100%;

      h2 {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 0.3px;
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        transition: color 0.3s ease;

        @media (max-width: 480px) {
          font-size: 22px;
        }
      }

      p {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.6;
        color: ${({ theme }) => theme.COLORS.TERTIARY};
        transition: color 0.3s ease;
      }
    }

    .links-content {
      display: flex;
      gap: 0.8em;
      flex-wrap: wrap;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        padding: 8px 16px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.SECONDARY};
        text-decoration: none;
        background-color: ${({ theme }) =>
          theme.typeTheme === "dark"
            ? "rgba(255,255,255,0.05)"
            : "rgba(0,0,0,0.03)"};
        border: 1px solid
          ${({ theme }) =>
            theme.typeTheme === "dark"
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.08)"};
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        svg {
          width: 16px;
          height: 16px;
          color: inherit;
          transition: transform 0.3s ease;
        }

        &:hover {
          color: #ffffff;
          background-color: ${({ theme }) => theme.COLORS.PRIMARY};
          border-color: ${({ theme }) => theme.COLORS.PRIMARY};
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(123, 44, 191, 0.3);

          svg {
            transform: translateX(2px);
          }
        }

        &:active {
          transform: translateY(0);
        }
      }
    }

    .technologies-content {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6em;
      align-items: center;

      > div {
        display: flex;
      }
    }

    @media (max-width: 480px) {
      padding: 24px;
    }
  }

  @media (max-width: 1280px) {
    width: 100%;
  }
`;
