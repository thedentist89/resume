import React from 'react'
import { mount, shallow } from 'enzyme'

import Item from './Item'

describe('Extra section item', () => {
  it('renders label', () => {
    const label = 'My label'
    const wrapper = shallow(<Item label={label} />)

    expect(wrapper.text()).toContain(label)
  })

  it('renders details', () => {
    const details = 'My details'
    const wrapper = shallow(<Item details={details} />)

    expect(wrapper.text()).toContain(details)
  })

  it('respects the theme', () => {
    const theme = {
      primary: '#FFCC00',
      secondary: '#00FFCC',
      accent: '#CC00FF',
    }

    const props = {
      label: 'My label',
      details: 'My details',
      theme,
    }

    const wrapper = mount(<Item {...props} />)
    expect(wrapper).toMatchSnapshot()

    expect(wrapper).toHaveStyleRule('color', theme.primary, {
      modifier: '.label',
    })

    expect(wrapper).toHaveStyleRule('color', theme.secondary, {
      modifier: '.sub-title',
    })
  })
})
