import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Components/Header';

const StyleBase = styled.div`
  padding: 16px;
`;

export default class App extends Component {
  render() {
    return (
      <StyleBase>
        <Header />
      </StyleBase>
    );
  }
}
