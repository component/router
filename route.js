
/**
 * Module dependencies.
 */

var toRegexp = require('path-to-regexp');

module.exports = Route;

function Route(path) {
  this.path = path;
  this.keys = [];
  this.regexp = toRegexp(path, this.keys);
}

Route.prototype.matches = function(path){
  var keys = this.keys;
  var qsIndex = path.indexOf('?');
  var pathname = ~qsIndex ? path.slice(0, qsIndex) : path;
  var m = this.regexp.exec(pathname);
  var obj = {};

  if (!m) return false;

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = keys[i - 1];

    var val = 'string' == typeof m[i]
      ? decodeURIComponent(m[i])
      : m[i];

    if (key) {
      obj[key.name] = undefined !== obj[key.name]
        ? obj[key.name]
        : val;
    } else {
      obj.push(val);
    }
  }

  return obj;
};
