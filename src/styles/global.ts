import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  :root {
    --yellow: #ffcc29;
    --blue: #1d539e;
    --gray: #828799;
    --page-background: #f9fbfc;
  }

  body {
    background: var(--page-background);

  }
`