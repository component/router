
# router

  Simple client-side router.

## Installation

    $ component install component/router

## Examples

  Example with only setup callbacks:

```js
var Router = require('component/router');

var router = new Router;

router.get('/user/:id', function(id){
  console.log('show %s', id);
});

router.dispatch('/user/2');
```

  Setup and teardown callbacks for unbinding
  events etc:

```js
var Router = require('component/router');

var router = new Router;

router.get('/user/:id', function(id){
  console.log('show %s', id);
}, function(id){
  console.log('hide %s', id);
});

router.dispatch('/user/2');
router.dispatch('/user/5');
router.dispatch('/user/10');
```

  Fluent api equivalent of above:

```js
var Router = require('component/router');

var router = new Router;

router.get('/user/:id')
.before(function(id){
  console.log('show %s', id);
})
.after(function(id){
  console.log('hide %s', id);
});

router.dispatch('/user/2');
router.dispatch('/user/5');
router.dispatch('/user/10');
```

## License

  MIT
