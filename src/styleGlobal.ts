import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    font-family: Arial;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    list-style: none;

    ::-webkit-scrollbar{
      width: 0px;
    }

    > body {
      img {
        max-width: 100%;
      }
    }
  }
`;

export default GlobalStyle;