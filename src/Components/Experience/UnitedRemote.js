import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item';

const StyleBase = styled(Item)`

`;

export default class UnitedRemote extends Component {
  render() {
    return (<StyleBase
      label="Full Stack Python / DevOps"
      period={['04/2017', 'Current']}
      info="United Remote (Rabat, Morocco)"
    >
      <ul>
        <li>
          Work as an active member of a remote team, <a href="https://efficity.com">effiCity (Paris, France)</a>.
        </li>
        <li>
          Work on several services using the Django/Celery stack.
        </li>
        <li>
          Setup staging CI using Docker, Gitlab-CI, Rancher, ZFS as well as PostgresQL's logical replication.
        </li>
        <li>
          Setup and write tests for a couple projects, ranging from unit tests with coverage to functional tests with Selenium.
          With full CI integration.
        </li>
      </ul>
    </StyleBase>);
  }
}
