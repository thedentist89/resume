import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Education from './Components/Education';
import style from './style';

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
      <ThemeProvider theme={style.light}>
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
