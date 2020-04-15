import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import api from '../services/api';
import Header from './components/Header';

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects')
      .then(({ data }) => setProjects(data))
      .catch(error => console.error(error));
  },[])

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <Fragment>
      <Header title="GoStack 11 Rocketseat" />
      <ul>
        {projects && projects.map(project => (
          <li key={project.id}>
            <strong>{project.title} </strong>
            (<small>autor: {project.owner}</small>)
          </li>
        ))}
      </ul>
      <button type="button" 
        onClick={handleAddProject}>Adicionar projeto</button>
    </Fragment>
  )
}