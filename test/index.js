
var Router = require('..');
var assert = require('better-assert');

describe('Router#get(path)', function(){
  it('should return a route', function(){
    var router = new Router;
    var route = router.get('/something');
    assert('Route' == route.constructor.name);
  })
})

describe('Router#get(path, setup, teardown)', function(){
  it('should assign callbacks', function(){
    function setup(){}
    function teardown(){}
    var router = new Router;
    var route = router.get('/something', setup, teardown);
    assert(setup == route.callbacks.setup);
    assert(teardown == route.callbacks.teardown);
  })
})
