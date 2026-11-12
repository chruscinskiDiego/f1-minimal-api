# F1 Minimal API

API de estudo em TypeScript e Fastify para consultar equipes e pilotos de Fórmula 1 a partir de uma coleção local.

## Funcionalidades

- GET /teams: lista equipes.
- GET /teams/:id: consulta uma equipe.
- GET /drivers: lista pilotos.
- GET /drivers/:id: consulta um piloto.

## Tecnologias

Node.js, TypeScript, Fastify, @fastify/cors, tsx e tsup.

## Executar localmente

O script de desenvolvimento carrega um arquivo .env; mantenha esse arquivo local, mesmo vazio. O servidor usa a porta 3333 definida em src/server.ts.

```bash
git clone https://github.com/chruscinskiDiego/f1-minimal-api.git
cd f1-minimal-api
npm ci
npm run start:dev
```

## Escopo e limitações

Os registros são exemplos fixos em memória, não dados esportivos atualizados. Não há banco de dados, escrita de registros ou autenticação.

