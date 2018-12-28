import React, { Component } from 'react';
import styled from 'styled-components';
import Mugshot from './Mugshot';

const StyleBase = styled.header`
  h1, h2 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <StyleBase>
        <Mugshot />
        <h1>Saïd Dermoumi</h1>
        <h2>Full-stack developer</h2>
        <div className="info">
          Lorem ipsum dolor sit amet
        </div>
      </StyleBase>
    );
  }
}
