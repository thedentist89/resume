import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Item from './Item';

import data from '../../Data/skills.json';

const StyleBase = styled(Section)`

`;

export default class Skills extends Component {
  render() {
    const children = data.map((item, i) => (
      <Item key={i} {...item} />
    ));

    return (<StyleBase
      label="Skills"
    >
      {children}
    </StyleBase>);
  }
}
