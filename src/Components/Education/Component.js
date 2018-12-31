import React, { Component } from 'react'
import Section from '../Section'
import EducationItem from './Item'

export default class Education extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }

    import('../../Data/education').then(module =>
      this.setState({ data: module.default })
    )
  }

  render() {
    if (!this.state.data) return null

    return (
      <Section label="Education">
        {this.state.data.map((item, i) => (
          <EducationItem key={i} {...item} />
        ))}
      </Section>
    )
  }
}
