import React from 'react'
import { shallow } from 'enzyme'

import Menu from './Menu'

describe('Menu component', () => {
  it('shows a toggle button in small and medium screens', () => {
    const wrapper = shallow(<Menu />)

    const $toggle = wrapper.find('.toggle')
    expect($toggle.exists()).toBeTruthy()

    expect(wrapper).not.toHaveStyleRule('display', 'none', {
      modifier: '.menu-item.toggle',
    })
  })

  it.skip('does not show a toggle button in big screens', () => {
    // SKIPPED: jest-styled-component does not support media with enzyme wrappers

    const wrapper = shallow(<Menu />)

    const $toggle = wrapper.find('.toggle')
    expect($toggle.exists()).toBeTruthy()

    expect(wrapper).toHaveStyleRule('display', 'none', {
      media: '(min-width:1140px)',
      modifier: '.menu-item.toggle',
    })
  })

  it('shows PDF download when pdfLink === true', () => {
    const wrapper = shallow(<Menu pdfLink />)

    const $downloadPdfLink = wrapper.find('.pdf-download')
    expect($downloadPdfLink.exists()).toBeTruthy()

    expect($downloadPdfLink.prop('download')).toEqual('sdermoumi.pdf')
  })

  it('does not show a PDF link if pdfLink !== true', () => {
    const wrapper = shallow(<Menu />)

    const $downloadPdfLink = wrapper.find('.pdf-download')
    expect($downloadPdfLink.exists()).not.toBeTruthy()
  })

  it('shows a theme toggle button', () => {
    const wrapper = shallow(<Menu />)

    const $themeToggle = wrapper.find('.theme-toggle')
    expect($themeToggle.exists()).toBeTruthy()
  })
})
