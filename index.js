
/**
 * Module dependencies.
 */

try {
  var Route = require('route-component');
} catch (err) {
  var Route = require('route');
}

/**
 * Expose `Router`.
 */

module.exports = Router;

/**
 * Initialize a new Router.
 *
 * @api public
 */

function Router() {
  this.routes = [];
}

/**
 * Create route `path` with optional `setup`
 * and `teardown` callbacks. If you omit these
 * they may be added later with the `Route` returned.
 *
 *   router.get('/user/:id', showUser, hideUser);
 *
 *   router.get('/user/:id')
 *     .setup(showUser)
 *     .teardown(hideUser)
 *
 * @param {String} path
 * @param {Function} setup
 * @param {Function} teardown
 * @return {Route}
 * @api public
 */

Router.prototype.get = function(path, setup, teardown){
  var route = new Route(path);
  this.routes.push(route);
  if (setup) route.setup(setup);
  if (teardown) route.teardown(teardown);
  return route;
};
