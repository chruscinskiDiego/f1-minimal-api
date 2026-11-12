# F1 Minimal API

TypeScript and Fastify practice API for querying Formula 1 teams and drivers from a local collection.

## Endpoints

- GET /teams: lists teams.
- GET /teams/:id: retrieves a team.
- GET /drivers: lists drivers.
- GET /drivers/:id: retrieves a driver.

## Technologies

Node.js, TypeScript, Fastify, @fastify/cors, tsx and tsup.

## Run locally

The development script loads a local .env file, which may be empty. The server uses port 3333 as defined in src/server.ts.

```bash
git clone https://github.com/chruscinskiDiego/f1-minimal-api.git
cd f1-minimal-api
npm ci
npm run start:dev
```

## Scope and limitations

Records are fixed in-memory examples, not current sports data. There is no database, write API or authentication.
