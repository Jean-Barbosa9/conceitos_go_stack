// Uma simulação da criação de uma API com Node;

const express = require('express');
const { uuid, isUuid } = require('uuidv4');
const cors = require('cors');

const projects = [];
const app = express();
app.use(cors());
app.use(express.json());

function logRequest(request, response, next) {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);
  next();
  console.timeEnd(logLabel);
}

function validateUuid(request, response, next) {
  const { id } = request.params;
  if(!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID!'});
  }

  return next();
}

app.use(logRequest);
app.use('/projects/:id', validateUuid);

app.get('/projects', (request, response) => {

  const { title, owner } = request.query;

  const results = title
                    ? projects.filter(project => project.title.includes(title))
                    : projects;

  return response.json(results);
});

app.post('/projects', (request, response) => {

  const { title, owner } = request.body;
  const id = uuid();
  const project = {
    id,
    title,
    owner,
  }

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {

  const { id } = request.params;
  const { title, owner } = request.body;
  
  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0) {
    return response.status(400).json({ message: "No projects found with this id!" });
  }

  const project = {
    id,
    title,
    owner
  };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params
  
  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0) {
    return response.status(400).json({ messagem: 'No projects found with this id!' })
  }
  
  projects.splice(projectIndex, 1);

  return response.status(204).send()
});

app.listen('3333', () => {
  console.log('🚀️ Back-End started!')
})