import React, { Component } from 'react';
import styled from 'styled-components';

const StyleBase = styled.section`
  margin-bottom: 38px;

  &:last-child {
    margin-bottom: 16px;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 1em;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    color: ${props => props.theme.primary};
  }

  a {
    color: ${props => props.theme.primary};
  }
`;

export default class Section extends Component {
  render() {
    return (<StyleBase {...this.props}>
      <h3>{this.props.label}</h3>
      <div className="section-content">
        {this.props.children}
      </div>
    </StyleBase>);
  }
}
