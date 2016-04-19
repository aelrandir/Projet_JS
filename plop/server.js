'use strict';
const logger = require('winston');
const config = require('./config')(logger);
require('./database')(config.postgresql, function(err, client){
  if(err){
    logger.error(err);
    throw err;
  }


  const domain = require('./domain')(client);

  domain.UserRepository.findAll(function(err, users){

  });
});
