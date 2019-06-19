import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { Navbar } from './components/Navbar';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    font-size: 16px;
  }

  body {
    line-height: 1.5;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar />
      </div>
    </>
  );
}

export default App;
