import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyleBase = styled.article`
  margin-bottom: 16px;
  /* max-width: 608px; */

  &:last-child {
    margin-bottom: 0;
  }

  .label {
    font-size: 1.1em;
    letter-spacing: 1px;
    line-height: 1.25rem;
    color: ${props => props.theme.primary};
  }

  .sub-title {
    font-size: 0.9em;
    line-height: 1.25rem;
    text-transform: uppercase;
    color: ${props => props.theme.secondary};
  }

  .label a,
  .sub-title a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:after {
      font-family: icomoon;
      font-size: 0.9em;
      content: '\\e907';
      margin-left: 5px;

      @media print {
        display: none;
      }
    }
  }

  .period {
    font-weight: 400;
    white-space: nowrap;
    color: ${props => props.theme.accent};
  }

  .period-arrow {
    font-family: icomoon;
    font-size: 0.9em;
  }

  .item-content {
    line-height: 1.25rem;
    padding-top: 4px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      padding-left: calc(1em + 10px);

      li {
        margin-bottom: 6px;

        &:before {
          font-family: icomoon;
          content: '\\e906';
          color: ${props => props.theme.accent};
          margin-left: calc(-1em - 10px);
          margin-right: 10px;
        }
      }
    }
  }
`

export default class Item extends Component {
  render() {
    let period
    if (Array.isArray(this.props.period)) {
      period = (
        <Fragment>
          {this.props.period[0]}
          <span className="period-arrow"> &#xe900; </span>
          {this.props.period[1]}
        </Fragment>
      )
    } else {
      period = this.props.period
    }

    const tasks =
      this.props.tasks &&
      this.props.tasks.map((task, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: task }} />
      ))

    return (
      <StyleBase {...this.props}>
        <div className="heading">
          <div className="label">
            {this.props.labelLink ? (
              <a
                href={this.props.labelLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                {this.props.label}
              </a>
            ) : (
              this.props.label
            )}
          </div>
          <div className="sub-title">
            {this.props.subtitleLink ? (
              <a
                href={this.props.subtitleLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                {this.props.subtitle}
              </a>
            ) : (
              this.props.subtitle
            )}{' '}
            <span className="period">{period}</span>
          </div>
        </div>
        {tasks && (
          <div className="item-content">
            <ul>{tasks}</ul>
          </div>
        )}
      </StyleBase>
    )
  }
}
