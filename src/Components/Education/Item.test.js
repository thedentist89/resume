import React from 'react'
import { mount, shallow } from 'enzyme'

import Item from './Item'

describe('Education section item', () => {
  it('renders degree', () => {
    const degree = 'My degree'
    const wrapper = shallow(<Item degree={degree} />)

    expect(wrapper.text()).toContain(degree)
  })

  it('renders info', () => {
    const info = 'My info'
    const wrapper = shallow(<Item info={info} />)

    expect(wrapper.text()).toContain(info)
  })

  it('renders year', () => {
    const year = 1337
    const wrapper = shallow(<Item period={year} />)

    const $period = wrapper.find('span.period')

    expect($period.exists()).toBe(true)
    expect($period.text()).toContain(year)
  })

  it('renders period', () => {
    const period = [1337, '20XX']
    const wrapper = shallow(<Item period={period} />)

    const $period = wrapper.find('span.period')

    expect($period.exists()).toBe(true)
    expect($period.text()).toMatch(
      new RegExp(`${period[0]}\\s+.\\s+${period[1]}`)
    )
  })

  it('respects the theme', () => {
    const theme = {
      primary: '#FFCC00',
      secondary: '#00FFCC',
      accent: '#CC00FF',
    }

    const props = {
      degree: 'My degree',
      info: 'My info',
      period: [1337, '20XX'],
      theme,
    }

    const wrapper = mount(<Item {...props} />)
    expect(wrapper).toMatchSnapshot()

    expect(wrapper).toHaveStyleRule('color', theme.primary, {
      modifier: '.title',
    })

    expect(wrapper).toHaveStyleRule('color', theme.secondary, {
      modifier: '.sub-title',
    })

    expect(wrapper).toHaveStyleRule('color', theme.accent, {
      modifier: '.period',
    })
  })
})
