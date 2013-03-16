
var Route = require('../route');
var assert = require('better-assert');

describe('Route#matches(path)', function(){
  it('should match paths and return matches', function(){
    var route = new Route('/user/:id/posts/:pid');

    assert(false == route.matches('/something'));
    assert(false == route.matches('/user/123'));

    var ret = route.matches('/user/12/posts/1');
    assert('12' == ret.id);
    assert('1' == ret.pid);
  })

  it('should ignore querystrings', function(){
    var route = new Route('/user/:id/posts/:pid');

    assert(false == route.matches('/something?hey'));

    var ret = route.matches('/user/12/posts/1?something=here');
    assert('12' == ret.id);
    assert('1' == ret.pid);
  })

  it('should decode the params', function(){
    var route = new Route('/user/:name');
    var ret = route.matches('/user/tj%20holowaychuk');
    assert('tj holowaychuk' == ret.name);
  })
})
