# TypeScript NodeJS Starter Project

Starter Project for TypeScript, NodeJS and Express.

## Installation

Clone the repository, install the dependencies and get started right away. Make sure you already have `nodejs`, `npm` and `yarn` installed in your system.
```
$ yarn
```

## Configuration
Create a `.env` file for application specific environment variables and update it according to your env specific params.
```bash
$ cp .env.example .env
```

## Migrations
You'll need to run migrations to get your database ready.
```bash
# Run Migration
$ yarn migrate
```

## Local Development
Run the server locally using nodemon on typescript watch mode.
```bash
$ yarn start # or npm start
```

## Production
First, build the application.

```bash
$ yarn transpile # or npm run transpile
```
## License
Licensed under [MIT](LICENSE) License.
