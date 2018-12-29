import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item';

const StyleBase = styled(Item)`

`;

export default class Rockout extends Component {
  render() {
    return (<StyleBase
      label="Rockout – a Web-based Guitar Hero clone"
      period="2011"
      info="Personal Project – Javascript / PHP"
    >
      <ul>
        <li>
          Work with HTML5 Canvas and several Video sites' APIs (YouTube, Dailymotion, Vimeo...).
        </li>
        <li>
          CodeIgniter backend for server-side song database and score leaderbords.
        </li>
      </ul>
    </StyleBase>);
  }
}
