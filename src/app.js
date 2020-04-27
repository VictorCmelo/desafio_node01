const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function logRequests(request, response, next) {
  const { method, url } = request;

  const loglabel = `[${method.toUpperCase()}] ${url}`;

  console.time(loglabel);

  next();

  console.timeEnd(loglabel);
}
//app.use(logRequests);

app.get("/repositories", (request, response) => {
 
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { url, title, techs } = request.body;

  const repository = { id: uuid(), url, title, techs, likes: 0};

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { url, title, techs } = request.body;

  const repositorieIndex = repositories.findIndex( repository => repository.id === id); 

  if(repositorieIndex < 0){
    return response.status(400).json({ error: 'Repository  not found.' })
  }
 

  const repository = {
    id,
    url,
    title,
    techs,
    likes: repositories[repositorieIndex].likes
  };

  repositories[repositorieIndex] = repository;
  return response.json(repository);

});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositorieIndex = repositories.findIndex( repository => repository.id === id); 

  if(repositorieIndex < 0){
    return response.status(400).json({ error: 'Repositori  not found.' })
  }

  repositories.splice(repositorieIndex, 1);

  return response.status(204).send();

});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  
  const repositorieIndex = repositories.findIndex( repository => repository.id === id); 

  if(repositorieIndex < 0){
    return response.status(400).json({ error: 'Project  not found.' })
  }

  repositories[repositorieIndex].likes += 1
    
  return response.json(repositories[repositorieIndex]);
  
});

module.exports = app;
