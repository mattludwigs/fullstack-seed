export default [
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply({ it: 'Works' });
    }
  }
]
