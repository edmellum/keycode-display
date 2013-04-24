var events = require('event');
var domify = require('domify');

var template = require('./template');

module.exports = function() {
  var el = domify(template)[0];

  el.innerHTML = 'Press a key!';

  events.bind(document.body, 'keydown', function(event) {
    el.innerHTML = event.keyCode;
  });

  return el;
}