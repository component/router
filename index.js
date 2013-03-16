
/**
 * Module dependencies.
 */

try {
  var Route = require('route-component');
} catch (err) {
  var Route = require('route');
}

module.exports = Router;

function Router() {
  this.routes = [];
}

Router.prototype.get = function(path, setup, teardown){
  var route = new Route(path);
  this.routes.push(route);
  if (setup) route.setup(setup);
  if (teardown) route.teardown(teardown);
  return route;
};
