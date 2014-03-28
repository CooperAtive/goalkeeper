'use strict';
/*global casper*/

casper.test.begin('users', 2, function suite(test) {

    casper.start('http://localhost:3000/signup', function() {
        test.assertHttpStatus(200);
    });

    casper.then(function(){
        var date = new Date();
        var email_date = date.toString().replace(/\ |:|\(.{3}\)/g, '');
        test.info(email_date);
        this.fill('form#signupForm', {

            'email': 'test@example.com' + email_date,
            'password': 'valid-pass-word'
        }, true);
    });

    casper.then(function(){
        // for debugging
        // test.info(this.getHTML('.mainContent'));
        test.assertTextExists('Profile','page body contains profile');
    });

    casper.run(function(){
        test.done();
    });

});
