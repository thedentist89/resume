import React from 'react'
import { shallow } from 'enzyme'

import Item from './Item'
import ExperienceComponent from './Component'

import data from '../../Data/experience'

describe('Experience section component', () => {
  it('renders all the items', () => {
    const wrapper = shallow(<ExperienceComponent />)

    const items = wrapper.find(Item)
    expect(items).toHaveLength(data.length)
  })
})
