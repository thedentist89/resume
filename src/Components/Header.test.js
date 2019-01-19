import React from 'react'
import { mount, shallow } from 'enzyme'

import Header from './Header'
import data from '../Data/header'

describe('Header component', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(<Header />)
  })

  it('shows the full name', () => {
    expect(wrapper.text()).toContain(data.fullName)
  })

  it('shows the title', () => {
    expect(wrapper.text()).toContain(data.title)
  })

  it('shows the email and it opens the email client', () => {
    const emailLink = wrapper.find('.email a')
    expect(emailLink.exists()).toBeTruthy()

    expect(emailLink.text()).toMatch(data.email)
    expect(emailLink.prop('href')).toMatch(new RegExp(`mailto:${data.email}`))
  })

  it('shows the github link and it links to the github page in a new tab', () => {
    const githubLink = wrapper.find('.github a')
    expect(githubLink.exists()).toBeTruthy()

    expect(githubLink.text()).toMatch(data.github)
    expect(githubLink.prop('href')).toMatch(new RegExp(`^//${data.github}`))
    expect(githubLink.prop('target')).toMatch('_blank')
  })

  it('shows the address', () => {
    expect(wrapper.text()).toContain(data.address)
  })

  it('shows profile description', () => {
    const text = wrapper.text()
    data.profile.forEach(line => {
      expect(text).toContain(line)
    })
  })
})
