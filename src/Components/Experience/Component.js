import React, { Component } from 'react'
import styled from 'styled-components'
import Section from '../Section'
import Item from './Item'
import data from '../../Data/experience.json'

const StyleBase = styled(Section)``

export default class Experience extends Component {
  render() {
    const children = data.map((item, i) => <Item key={i} {...item} />)

    return <StyleBase label="Experience">{children}</StyleBase>
  }
}
