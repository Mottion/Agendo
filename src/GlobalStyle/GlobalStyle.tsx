import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    color: #fff;
    font-family: poppins;

  }
  
  body, html {
    width: 100%;
    height: 100%;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
  }

  input, button {
    outline: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  :root{
    --main-gradient: linear-gradient( 45deg, #FF8A00, #E52E71) ;
  }
`;