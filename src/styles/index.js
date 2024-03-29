import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const globalVars = {
  black: '#3D3D5C',
  fontPrimary: 'Lato, sans-serif',
  fontHeadline: 'Rambla, sans-serif',
};

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  * { box-sizing: border-box }

  html { 
    height: 100%;
    padding: 0.5rem;
    background-color: #fff;
    font-size: 16px;
  }

  body { 
    min-height: 100%;
    padding: 1rem 1rem 2rem;
    background-color: #F9FAFE;
    color: ${globalVars.black};
    font-family: ${globalVars.fontPrimary};
    line-height: 1.5;
  }

  #root { 
    margin: auto;
    width: 100%;
    @media (min-width: 768px) { width: 75vw }

    @media (min-width: 1020px) { width: 50vw }
  }
`;

export default GlobalStyle;
