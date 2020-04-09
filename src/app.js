const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repositorio = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(repositorio);

  return response.json(repositorio);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if(repoIndex < 0) {
    return response.status(400).json({ error: 'Repositorio not found' });
  }

  const { likes } = repositories[repoIndex];

  const repositorio = {
    id,
    title,
    url,
    techs,
    likes
  };

  repositories[repoIndex] = repositorio;

  return response.json(repositorio);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if(repoIndex < 0){
    return response.status(400).json({ error: 'Repository not found' });
  }

  repositories.splice(repoIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if(repoIndex < 0){
    return response.status(400).json({ error: 'Repositorio not found' });
  }

  const { title, url, techs, likes } = repositories[repoIndex];

  const like = likes+1;

  const repositorio = {
    id,
    title,
    url,
    techs,
    likes: like
  };

  repositories[repoIndex] = repositorio;

  return response.json(repositorio);
});

module.exports = app;
