import React from 'react'
import { shallow } from 'enzyme'

import Item from './Item'
import SkillsComponent from './Component'

import data from '../../Data/skills'

describe('Skills section component', () => {
  it('renders all the items', () => {
    const wrapper = shallow(<SkillsComponent />)

    const items = wrapper.find(Item)
    expect(items).toHaveLength(data.length)
  })
})
