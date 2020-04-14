import React, { Fragment } from 'react';

import Header from './components/Header';

export default function App() {
  return (
    <Fragment>
      <Header title="GoStack 11 Rocketseat">
        <ul>
          <li>Node com banco SQL</li>
          <li>ReactJS</li>
          <li>React Native</li>
        </ul>
      </Header>
      <Header title="React Front to Back Udemy">
        <ul>
          <li>ReactJS com Context API</li>
          <li>ReactJS com Redux</li>
          <li>Integração com Firestore</li>
        </ul>
      </Header>
    </Fragment>
  )
}