# Magic Constants

Adds some ( yes ) [PHP-esque](http://php.net/manual/en/language.constants.predefined.php) / [Python](http://docs.python.org/library/inspect.html)-esque magic constants to the current module. Includes naive tests.

#### Credits

This code is almost completely based on [this Stackoverflow post](based on http://stackoverflow.com/questions/14172455/get-name-and-line-of-calling-function-in-node-js).

#### Why???

So you can write a logging function like this, for example:

        var colors = require('colors');
        var format = require('utils').format;
        require('magic-constants')(global);

        function log2(m) {
          var _prefix = colors.green(format('[%s @%d]', caller, __caller_lineno));
          var args = [].slice.call(arguments);
          args.push(_prefix);
          console.log.apply(this, args);
        }

        function main() {
          function bar() {
            log2("Some message", "something else", [1, 2, 3, 4]);
          }
          bar();
          log2("in Main??")
        }
        main();
        log2("in global");
        console.log(__lineno, __function);

I swear, I'm going to go blind printf-debugging node and trying to figure out which log call came from where. This helps me, YMMV.

#### Install

`npm install magic-constants`

#### Test

`npm test`