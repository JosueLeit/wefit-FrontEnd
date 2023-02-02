import 'styled-components';

declare module 'styled-components' {
  export type Color = {
    main: string;
    dark: string;
  };

  export type Typography = {
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
    fontWeight: number;
  };

  export interface DefaultTheme {
    colors: {
      primary: Color;
      success: Color;
      mainBackground: Color;
      gray1: Color;
    };
    typography: {
      heading3: Typography;
      heading4: Typography;
      subtitle2: Typography;
      body1: Typography;
      body2: Typography;
      button: Typography;
    };
  }
}
