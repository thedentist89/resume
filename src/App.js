import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Education from './Components/Education';

const lightTheme = {
  fg: 'hsl(205, 7%, 33%)',
  bg: 'hsl(0, 0%, 98%)',

  // primary: 'hsl(200, 72%, 39%)',
  primary: 'hsl(222, 22%, 15%)',
  secondary: 'hsl(210, 8%, 46%)',
  accent: 'hsl(27, 96%, 54%)',
  accent800: 'hsl(27, 98%, 85%)',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg};
    min-width: 320px;
  }
`;

const StyleBase = styled.div`
  padding: 16px;
  color: ${props => props.theme.fg};
`;

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={lightTheme}>
        <StyleBase>
          <GlobalStyle />
          <Header />
          <Experience />
          <Education />
        </StyleBase>
      </ThemeProvider>
    );
  }
}
