
/**
 * Module dependencies.
 */

var Router = require('..');

var router = new Router;

router
.get('*')
.before(function(path){
  console.log('before %s', path);
})
.after(function(path){
  console.log('after %s', path);
})

router
.get('/user/:id')
.before(function(id){
  console.log('show %s', id);
})
.after(function(id){
  console.log('cleanup %s', id);
})

router.dispatch('/user/2');
router.dispatch('/user/5');
