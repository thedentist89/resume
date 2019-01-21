import React, { Component } from 'react'
import styled from 'styled-components'
import style from '../style'
import AppContext from '../AppContext'

const StyledBase = styled.div`
  @media print {
    display: none;
  }

  .menu-bg {
    position: fixed;
    z-index: 80;
    background: ${props => props.theme.bg};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;

    @media screen and (min-width: 1140px) {
      display: none;
    }
  }

  .menu-items {
    position: fixed;
    z-index: 100;
    right: 10px;
    width: 56px;
    display: flex;
    top: 10px;
    flex-direction: column;

    @media (max-width: 425px) {
      top: unset;
      bottom: 10px;
      flex-direction: column-reverse;
    }
  }

  .menu-item {
    padding: 10px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
    text-shadow: 0 0 10px ${props => props.theme.bg};
    height: 36px;
    user-select: none;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    color: ${props => props.theme.fg};
    text-decoration: none;
    transition: opacity 0.2s;

    @media screen and (min-width: 1140px) {
      opacity: unset;
      pointer-events: unset;
      font-size: 1rem;
    }

    &:first-child {
      margin-bottom: 0;
    }

    .label {
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transform: translateX(30px);
      transition: opacity 0.2s, transform 0.2s;
      overflow: hidden;
      position: absolute;
      right: 56px;
      text-transform: uppercase;

      @media screen and (min-width: 1140px) {
        opacity: unset;
        pointer-events: unset;
        transform: unset;
      }
    }

    .icon {
      width: 36px;
      height: 36px;
      font-size: 1.4em;
      content: '\\e909';
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: icomoon;
      background-color: ${props => props.theme.bg};
      border-radius: 100px;

      @media screen and (min-width: 1140px) {
        font-size: 1.1rem;
      }
    }
  }

  .menu-item.toggle {
    opacity: 1;
    pointer-events: auto;

    .icon {
      transform: rotate(90deg);
      transition: transform 0.2s;
    }

    @media screen and (min-width: 1140px) {
      display: none;
    }
  }

  &.on .menu-bg {
    opacity: 0.9;
    pointer-events: unset;
  }

  &.on .menu-items {
    width: calc(100% - 20px);
  }

  &.on .menu-item {
    opacity: 1;
    pointer-events: auto;

    .label {
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
    }
  }

  &.on .menu-item.toggle .icon {
    transform: rotate(0);
    background-color: none;
  }
`

export default class Menu extends Component {
  static contextType = AppContext

  constructor(props) {
    super(props)

    this.state = {
      on: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleMenu() {
    this.setState({
      on: !this.state.on,
    })
  }

  toggleTheme() {
    this.context.toggleTheme()
    this.setState({
      on: false,
    })
  }

  render() {
    const classList = ['menu']
    if (this.state.on) classList.push('on')

    const toggleLabel = this.state.on ? 'Hide menu' : 'Show menu'
    const toggleIcon = this.state.on ? '' : ''

    const themeIcon = this.context.theme === style.light ? '' : ''
    const themeLabel =
      this.context.theme === style.light ? 'Dark mode' : 'Light mode'

    return (
      <StyledBase className={classList.join(' ')}>
        <div className="menu-bg" />
        <div className="menu-items">
          <span
            className="menu-item toggle"
            role="button"
            onClick={this.toggleMenu}
          >
            <span className="icon">{toggleIcon}</span>
            <span className="label">
              {toggleLabel} {process.env.ENV}
            </span>
          </span>
          {this.props.pdfLink && (
            <a
              className="menu-item pdf-download"
              href="/resume.pdf"
              download="sdermoumi.pdf"
            >
              <span className="icon">&#xe90b;</span>
              <span className="label">Download as PDF</span>
            </a>
          )}
          <span
            className="menu-item theme-toggle"
            role="button"
            onClick={this.toggleTheme}
          >
            <span className="icon">{themeIcon}</span>
            <span className="label">{themeLabel}</span>
          </span>
        </div>
      </StyledBase>
    )
  }
}
