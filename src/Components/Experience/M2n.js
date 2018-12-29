import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item';

const StyleBase = styled(Item)`

`;

export default class M2n extends Component {
  render() {
    return (<StyleBase
      label="M2N – a 2D multi-platform Game Engine"
      period="2014"
      info="Personal project – C++"
    >
      <ul>
        <li>
          Work with SDL2, OpenGL, GLES2, LuaJIT, FreeType2...
        </li>
        <li>
          Manage thread safety accross GPU calls, implement a threading API for Lua.
        </li>
        <li>
          Keep code portable, with support for Android through the NDK.
        </li>
        <li>
          Work with Unicode and implement hard-coded ligatures for Arabic characters.
        </li>
      </ul>
    </StyleBase>);
  }
}
