import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import EducationItem from './Item';

import data from '../../Data/education.json';

const StyleBase = styled(Section)`

`;

export default class Education extends Component {
  render() {
    const children = data.map((item, i) => (
      <EducationItem key={i} {...item} />
    ));

    return (<StyleBase
      label="Education"
    >
      {children}
    </StyleBase>);
  }
}
