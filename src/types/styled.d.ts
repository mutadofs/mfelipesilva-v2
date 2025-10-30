import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    typeTheme: string;
    COLORS: {
      BACKGROUND: string;
      PRIMARY: string;
      SECONDARY: string;
      TERTIARY: string;
      QUATERNARY: string;
      QUINARY: string;
    };
  }
}
