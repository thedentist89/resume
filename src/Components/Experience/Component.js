import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import UnitedRemote from './UnitedRemote';
import Caciopee from './Caciopee';
import M2n from './M2n';
import Rockout from './Rockout';

const StyleBase = styled(Section)`

`;

export default class Experience extends Component {
  render() {
    return (<StyleBase
      label="Experience"
    >
      <UnitedRemote />
      <Caciopee />
      <M2n />
      <Rockout />
    </StyleBase>);
  }
}
