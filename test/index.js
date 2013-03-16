
var Router = require('..');
var assert = require('better-assert');

describe('Router#get(path)', function(){
  it('should return a route', function(){
    var router = new Router;
    var route = router.get('/something');
    assert('Route' == route.constructor.name);
  })
})

describe('Router#dispatch(path)', function(){
  it('should invoke the first matching route', function(done){
    var router = new Router;

    router.get('/user', function(){
      assert(false && 'should not be invoked');
    });

    router.get('/user/:id/:page', function(id, page){
      assert('5' == id);
      assert('posts' == page);
      done();
    });

    router.dispatch('/user/5/posts');
  })

  it('should invoke previous route teardown functions', function(done){
    var router = new Router;
    var calls = [];

    router.get('/user', function(){
      assert('s 5' == calls[0]);
      assert('t 5' == calls[1]);
      assert('s 8' == calls[2]);
      assert('t 8' == calls[3]);
      assert('s 10' == calls[4]);
      assert('t 10' == calls[5]);
      done();
    });

    router.get('/user/:id', function(id){
      calls.push('s ' + id);
    }, function(id){
      calls.push('t ' + id);
    });

    router.dispatch('/user/5');
    router.dispatch('/user/8');
    router.dispatch('/user/10');
    router.dispatch('/user');
  })
})
