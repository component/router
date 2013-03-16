
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
 * Create route `path` with optional `before`
 * and `after` callbacks. If you omit these
 * they may be added later with the `Route` returned.
 *
 *   router.get('/user/:id', showUser, hideUser);
 *
 *   router.get('/user/:id')
 *     .before(showUser)
 *     .after(hideUser)
 *
 * @param {String} path
 * @param {Function} before
 * @param {Function} after
 * @return {Route}
 * @api public
 */

Router.prototype.get = function(path, before, after){
  var route = new Route(path);
  this.routes.push(route);
  if (before) route.before(before);
  if (after) route.after(after);
  return route;
};

/**
 * Dispatch the given `path`, matching routes
 * sequentially.
 *
 * @param {String} path
 * @api public
 */

Router.prototype.dispatch = function(path){
  var ret;
  this.teardown();
  for (var i = 0; i < this.routes.length; i++) {
    var route = this.routes[i];
    if (ret = route.match(path)) {
      this.route = route;
      this.args = ret.args;
      route.call('before', ret.args);
      break;
    }
  }
};

/**
 * Invoke teardown callbacks of previous route.
 *
 * @api private
 */

Router.prototype.teardown = function(){
  var route = this.route;
  if (!route) return;
  route.call('after', this.args);
};
