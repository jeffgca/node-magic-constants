// based on http://stackoverflow.com/questions/14172455/get-name-and-line-of-calling-function-in-node-js
function args(a) { return [].slice.call(a); }

function main(top) {

  Object.defineProperty(top, '__stack', {
  get: function() {
      var orig = Error.prepareStackTrace;
      Error.prepareStackTrace = function(_, stack) {
        return stack;
      };
      var err = new Error;
      Error.captureStackTrace(err, arguments.callee);
      var stack = err.stack;
      Error.prepareStackTrace = orig;
      return stack;
    }
  });

  Object.defineProperty(top, '__caller_lineno', {
  get: function() {
      return __stack[2].getLineNumber();
    }
  });

  Object.defineProperty(top, '__lineno', {
  get: function() {
      return __stack[1].getLineNumber();
    }
  });

  Object.defineProperty(top, '__caller', {
  get: function() {
      var name = __stack[2].getFunctionName();
      if (name) {
        return name;  
      }
      return 'global';
    }
  });

  Object.defineProperty(top, '__function', {
  get: function() {
      var name = __stack[1].getFunctionName();
      if (name) {
        return name;  
      }
      return 'global';
    }
  });
}

module.exports = main;
