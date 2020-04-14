import React, { Fragment, useState } from 'react';

import Header from './components/Header';

export default function App() {
  const [projects, setProjects] = useState([
    'Aplicação Web Front-End',
    'Aplicativo Mobile',
  ])

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <Fragment>
      <Header title="GoStack 11 Rocketseat" />
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" 
        onClick={handleAddProject}>Adicionar projeto</button>
    </Fragment>
  )
}