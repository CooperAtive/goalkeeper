//users_test.js

'use strict';
/*global casper*/

casper.test.begin('users', 2, function suite(test) {

  casper.start('http://localhost:3000#users', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function(){
    test.assertVisible('p.full_name', 'full name selector is visible');
  });

  casper.run(function(){
    test.done();
  });

});
