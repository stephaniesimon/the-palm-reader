'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register(require('inert'), (err) => {

  if (err) {
    throw err;
  }
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('./index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/bundle.js',
    handler: function (request, reply) {
      reply.file('./public/bundle.js');
    }
  });

  server.start((err) => {

    if (err) {
      throw err;
    }

    console.log('Server running at:', server.info.uri);
  });
});