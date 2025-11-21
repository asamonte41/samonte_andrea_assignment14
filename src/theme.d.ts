import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      danger: string;
      success: string;
      text: string;
      background: string;
      disabled: string;
    };
    fontSize: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
