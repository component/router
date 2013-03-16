
var Router = require('..');
var assert = require('better-assert');

describe('Router#get(path)', function(){
  it('should return a route', function(){
    var router = new Router;
    var route = router.get('/something');
    assert('Route' == route.constructor.name);
  })
})
