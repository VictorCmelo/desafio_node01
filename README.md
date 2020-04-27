

#  :heavy_check_mark: Desafio 01 - Node.Js 

Aplicando os primeiros conceitos aprendidos no BootCamp

## O que é o Node.js

Node é basicamente javascript no backend, ele não é uma linguagem de programação. É uma plataforma com base na engine do Chrome o V8

## Como funciona uma API Rest

Básicamente um cliente faz a requisição

```
http://localhost:3333/repositories
```

O servidor retorna uma estrura de dados - JSON
```
{
  "id": "7015b619-a29b-4850-8e75-171f666e7de5",
  "url": "https://github.com/Rocketseat/umbriel",
  "title": "Umbriel",
  "techs": [
    "Node",
    "Express",
    "TypeScript"
  ],
  "likes": 10
}
```


### HTTP CODEs

- 1xx - informações
- 2xx - sucesso
    - 200 : Succes
    - 201: Created
- 3xx - Redirecionamento
- 4xx - erro no cliente - falta algo na requisição
- 5xx - erros no servidor

## O que são e pra que servem os Middlewares

São interceptadores de requisições, podem alterá-las ou não. Interromper ou não. Requisições GET, POST, PUT, DELETE são exemplos de Middlewares. Neste exemplo temos um Middleware que intercepta e mostra a rota e qual methodo foi requisitado. 


```
function logRequests(request, response, next) {
  const { method, url } = request;

  const loglabel = `[${method.toUpperCase()}] ${url}`;

  console.time(loglabel);

  next();

  console.timeEnd(loglabel);
}
```

#  :pushpin: O DESAFIO: 
Essa é uma aplicação para armazenar repositórios do portfólio, que permite a criação, listagem, atualização e remoção dos repositórios, e além disso permite que os repositórios recebam "likes".

![índice](https://user-images.githubusercontent.com/21694466/78795195-18b2af80-798b-11ea-95ce-9830780a79c7.png)

