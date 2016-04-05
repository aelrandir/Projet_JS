// npm i common-env winston -S

module.exports = function(logger){
  var env = require('common-env/withLogger')(logger);
  return env.getOrElseAll({
    postgresql: 'postgres://username:password@localhost/database'
  });
}
