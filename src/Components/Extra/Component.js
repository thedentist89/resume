import React, { Component } from 'react'
import Section from '../Section'
import Item from './Item'

import data from '../../Data/extra'

export default class Extra extends Component {
  render() {
    return (
      <Section label="Other">
        {data.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </Section>
    )
  }
}
