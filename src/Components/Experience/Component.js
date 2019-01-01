import React, { Component } from 'react'
import Section from '../Section'
import Item from './Item'

import data from '../../Data/experience'

export default class Experience extends Component {
  render() {
    return (
      <Section label="Experience">
        {data.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </Section>
    )
  }
}
