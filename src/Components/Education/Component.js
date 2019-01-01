import React, { Component } from 'react'
import Section from '../Section'
import EducationItem from './Item'

import data from '../../Data/education'

export default class Education extends Component {
  render() {
    return (
      <Section label="Education">
        {data.map((item, i) => (
          <EducationItem key={i} {...item} />
        ))}
      </Section>
    )
  }
}
