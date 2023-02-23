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