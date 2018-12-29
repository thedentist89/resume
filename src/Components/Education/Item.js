import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const StyleBase = styled.article`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  .title {
    font-size: 1.1em;
    letter-spacing: 1px;
    line-height: 1.5rem;
    color: ${props => props.theme.primary};
  }

  .sub-title {
    font-size: 0.9em;
    line-height: 1.25rem;
    text-transform: uppercase;
    color: ${props => props.theme.secondary};
  }

  .period {
    font-weight: 400;
    margin-left: 8px;
    white-space: nowrap;
    color: ${props => props.theme.accent};
  }

  .period-arrow {
    font-family: icomoon;
    font-size: 0.9em;
  }
`;

export default class Item extends Component {
  render() {
    let period;
    if (Array.isArray(this.props.period) && typeof this.props.period[0] === 'string') {
      period = (<Fragment>
        {this.props.period[0]}
        <span className="period-arrow"> &#xe900; </span>
        {this.props.period[1]}
      </Fragment>);
    } else {
      period = this.props.period
    }

    return (<StyleBase {...this.props}>
      <div className="heading">
        <div className="title">{this.props.degree}</div>
        <div className="sub-title">{this.props.info} <span className="period">{period}</span></div>
      </div>
    </StyleBase>);
  }
}
