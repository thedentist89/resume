import React, { Component } from 'react'
import Section from '../Section'
import Item from './Item'

import data from '../../Data/skills'

export default class Skills extends Component {
  render() {
    return (
      <Section label="Skills">
        {data.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </Section>
    )
  }
}
