import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik';
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
