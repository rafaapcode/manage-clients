# Manage Clients

## Sobre o Desafio

- Este projeto tem como intuito praticar conceitos de Clean Architecture e também fazer o uso de Testes.
- Este desafio foi retirado de um processo seletivo que ja foi realizado.

## Tecnologias Utilizadas

- NestJS
- Mysql
- Prisma

## Funcionalidades

- [x] Criar clientes
- [x] Editar e Atualizar clientes
- [x] Buscar um único cliente
- [x] Buscar todos os clientes
- [x] Retornar os 10 clientes com maior risco de saúde

## Aprendizado

- Neste desafio aprendi a criar uma API, usando CLEAN ARCHITECTURE junto com o NestJS.
- Neste desafio aprendi a fazer testes junto com o NestJS
- Também que os Controllers no NestJs possuem uma ordem em alguns casos, principalmente quando utilizamos ENDPOINTS com parâmetros e endpoints sem parâmetros, exemplo :

  - /api/client - (GET) (Este endpoint que não possui parâmetros e somente retorna algo deve vir antes de todos)

  - /api/client/1 - (GET)
  - /api/client/1 - (PUT)
  - /api/client - (post)

## Endpoints

/api/client - (POST) - Retorna o cliente adicionado
``` 
  {
    "name": "Jorge",
    "birthdate": "20/06/1960",
    "sex": "male",
    "healthIssues": [
      {
        "name": "Pressão Alta",
        "classification": 1
      }
    ]
  }

```

/api/client/1 - (PUT) - Retorna o cliente atualizado
``` 
  {
    "name": "Jorge 2",
    "birthdate": "20/06/1960",
    "sex": "male",
    "healthIssues": [
      {
        "name": "Pressão Alta",
        "classification": 1
      }
    ]
  }

```

/api/client/update/1 - (PATCH) - Retorna o cliente com o campo ja atualizado
``` 
  {
    "name": "Jorge Oliveira",
  }

```

**/api/client/:id - (GET)** - Retorna o cliente de acordo com o ID
**/api/client - (GET)** - Retorna todos os clientes
**/api/client/risk - (GET)** - Retorna os 10 clientes com maior risco de saúde




https://user-images.githubusercontent.com/83471941/220889507-1287d84f-cba7-44ec-8ffa-53771a31fd6b.mp4




