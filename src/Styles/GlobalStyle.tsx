import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: poppins;
  }
  
  body, html {
    width: 100%;
    height: 100%;
    color: #fff;
    
     &::-webkit-scrollbar { 
      display: none;
    }
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
    --main-gradient: linear-gradient( 45deg, #FF8A00, #E52E71);
    --black: #0D0E1A;
    --gray-blue: #494F5A;
  }
`;