'use strict';

module.exports = function(app, passport) {

	// LOGOUT ==============================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

// AUTHENTICATE (FIRST LOGIN) ==================================================

		// process the login form
		app.post('/login', passport.authenticate('local-login', {
			successRedirect : '/#/home', // redirect to the secure profile section
			failureRedirect : '/#/login', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));

		// process the signup form
		app.post('/signup', passport.authenticate('local-signup', {
			successRedirect : '/#/home', // redirect to the secure profile section
			failureRedirect : '/#/signup', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));
};

