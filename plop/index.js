// npm install lodash --save
var _ = require('lodash');

console.log(_.toPairs([1, 2, 3, 4]));


// UserService.js

module.exports = {
  findAll: function(){
    return [1, 2, 3];
  }
};


// /UserService.js

// main.js
const UserService = require('./UserService');

UserService.findAll();
