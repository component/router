
/**
 * Module dependencies.
 */

var Route = require('./route');

module.exports = Router;

function Router() {

}

Router.prototype.get = function(path){
  return new Route(path);
};
