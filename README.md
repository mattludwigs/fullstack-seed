# fullstack-seed v0.0.2

A fullstack seed project for apps written in React, Hapi, and MongoDB.

## What you get

1. Hapi
2. React
3. Mongoose
4. Lodash
5. Webpack
6. Babel 6 (client and serverside)
7. Eslint
8. SASS
9. JWT (optional)

## Requirements
1. Node v4+
2. MongoDB or Docker

## Usage

```
git clone git@github.com:mattludwigs/fullstack-seed.git my-awesome-project
cd my-awesome-project && npm install
touch .env
```

### The env file

Look at the assert.env file to see what is expected to be passed in.

If you want to work with JWT the be sure to add your JWT token in the .env file like so:

```
JWT=Batman
```

### Run the server

```
npm run server:dev
```

### run the client
```
npm run client:dev
```

Currenly you will need to terminal tabs open to run them at the same time

## Testing

```
npm test
```

## Contributing

In yoru PR make sure you have your branch being merged into the develop branch

