import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item';

const StyleBase = styled(Item)`

`;

export default class Caciopee extends Component {
  render() {
    return (<StyleBase
      label="Internship"
      period={['01/2015', '02/2015']}
      info="Caciopée (Rabat, Morocco)"
    >
      <ul>
        <li>
          Work with an in-house app involving the jBOSS stack; maingly design jBPM workflows and write DROOLS rules.
        </li>
      </ul>
    </StyleBase>);
  }
}
