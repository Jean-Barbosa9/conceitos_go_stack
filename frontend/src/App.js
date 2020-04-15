import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import sampleImg from'./assets/sample-image.jpg';

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
      <img width={300} src={sampleImg} alt="Imagem de exemplo para importação"/>
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" 
        onClick={handleAddProject}>Adicionar projeto</button>
    </Fragment>
  )
}