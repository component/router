
/**
 * Module dependencies.
 */

var Router = require('..');

// some user view to muck with the dom

function UserView() {

}

// render the view and inject junk into
// the dom or whatever you need to do

UserView.prototype.show = function(id){
  this.id = id;
  console.log('show user %s', id);
};

// perform "garbage collection" and
// clean up after the view, unbinding
// events etc

UserView.prototype.unbind = function(){
  console.log('clean up after %s', this.id);
};

var view = new UserView;
var router = new Router;

router
.get('/user/:id')
.before(view.show.bind(view))
.after(view.unbind.bind(view))

router.dispatch('/user/2');
router.dispatch('/user/5');
