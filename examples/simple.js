
/**
 * Module dependencies.
 */

var Router = require('..');

var router = new Router;

router.get('/user/:id', function(id){
  console.log('show %s', id);
});

router.dispatch('/user/2');
