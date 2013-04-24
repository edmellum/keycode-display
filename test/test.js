var assert = require('timoxley-assert');
var happen = require('tmcw-happen');
var keyDisplay = require('keycode-display');

describe('keycode-display', function() {
  it('should display the keyCode of the pressed key', function() {
    var el = keyDisplay();

    happen.keydown(document.body, {keyCode: 68});
    assert.equal(el.innerHTML, '68');
  });
});