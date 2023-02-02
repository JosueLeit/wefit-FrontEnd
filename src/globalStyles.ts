import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    background-color: ${props => props.theme.colors.mainBackground.main};
  }

  h1, h2, h3, h4, h5, h6, p, span, div {
    font-family: 'Open Sans', sans-serif;
  }
`;
