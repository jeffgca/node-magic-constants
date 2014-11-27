var assert = require('chai').assert;

require('../index')(global);

describe('tests constants', function() {
  it('tests stack constant', function() {
    assert.equal(__stack.length, 10); // brittle?
  });

  it('tests line number constant', function() {
    assert.equal(__lineno, 11);
  });

  it('tests function constant', function someFunction() {
    assert.equal(__function, 'someFunction');
  });

  it('tests caller\'s line number constant', function foo(done) {

    function inside() {
      assert.equal(__caller_lineno, 24);
      done();
    }
    inside();
  });

  it('tests caller\'s function name constant', function bar(done) {
    function inside() {
      assert.equal(__caller, "bar");
      done();
    }
    inside();
  });
})