import Hapi from 'hapi';
import routesInjector from './routes-loader';
import registerInjector from './register-loader';

const server = new Hapi.Server();

function validate(decoded, request, callback) {
  return callback(null, true);
}

server.connection({
  port: process.env.PORT,
  routes: {
    cors: true
  }
});

registerInjector(server);

if (process.env.JWT) {
  server.auth.strategy('jwt', 'jwt', {
    key: process.env.JWT,
    validateFunc: validate,
    verifyOptions: { algorithms: ['HS256'] }
  });

  server.auth.default('jwt');
}

routesInjector(server);


export default server;