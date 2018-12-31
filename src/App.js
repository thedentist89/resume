import React, { Component } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import style from './style'
import Header from './Components/Header'
import Experience from './Components/Experience/Component'
import Skills from './Components/Skills/Component'
import Education from './Components/Education/Component'
import Extra from './Components/Extra/Component'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg};
    min-width: 320px;

    @media print {
      background-color: transparent;
    }
  }
`

const StyleBase = styled.div`
  padding: 16px;
  color: ${props => props.theme.fg};

  .side {
    margin-top: 38px;
  }

  @media print {
    width: 1024px;
    display: grid;
    grid-gap: 80px;
    grid-template-columns: 320px 1fr;
    grid-template-rows: auto 1fr;
    padding: 0;

    .main {
      grid-column: 2;
      grid-row: 1 / -1;
    }

    .side {
      margin-top: 0;
    }
  }
`

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={style.light}>
        <StyleBase>
          <GlobalStyle />
          <Header />
          <div className="main">
            <Experience />
            <Skills />
            <Education />
          </div>
          <div className="side">
            <Extra />
          </div>
        </StyleBase>
      </ThemeProvider>
    )
  }
}
