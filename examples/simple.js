
/**
 * Module dependencies.
 */

var Router = require('..');

var router = new Router;

router.get('*', function(path){
  console.log('before %s', path);
});

router.get('/user/:id', function(id){
  console.log('show %s', id);
});

router.dispatch('/user/2');
