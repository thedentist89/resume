import React, { Component } from 'react';
import styled from 'styled-components';
import Section from './Section';
import UnitedRemote from './Experience/UnitedRemote';
import Caciopee from './Experience/Caciopee';
import M2n from './Experience/M2n';
import Rockout from './Experience/Rockout';

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
