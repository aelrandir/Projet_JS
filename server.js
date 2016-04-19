'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const path = require('path');
const request = require('request');
server.connection({
  port: 3000
});


// register plugins
server.register(require('inert'), (err) => {

});

// setup routes
server.route({
  method: 'GET',
  path: '/api/linkqsqss',
  handler: function(request, reply){
    reply([{
      title: 'lien 1',
      url: 'http://sdfsdf.com',
      description: 'plop'
    },{
      title: 'lien 2',
      url: 'http://sdfsdf.com',
      description: 'plop'
    },{
      title: 'lien 3',
      url: 'http://sdfsdf.com',
      description: 'plop'
    }]);
  }
});



// setup routes
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.resolve(__dirname, './dist')
    }
  }
});


// listen
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server rusdfsdfnning at:', server.info.uri);
});
