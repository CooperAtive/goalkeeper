'use strict';

window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true
});

FB.init({appId: 1429116610680315});

App.initializer({
    name: 'authentication',
    initialize: function(container, application) {
        container.register('authenticator:facebook', App.FacebookAuthenticator);
        Ember.SimpleAuth.setup(container, application, {
            authorizerFactory: 'authorizer:facebook',
            routeAfterAuthentication: '/home'
        });
    }
});

App.Route = Ember.Route.extend({
    /*
  beforeModel: function() {
    if(this.controllerFor('application').get('logout') ||
      !this.get('router.url') ||
      this.get('router.url') === '/signup') {
      this.controllerFor('application').set('logout', false);
      return;
    } else if (!localStorage.user_id) {
      return this.transitionTo('login');
    }
  }
  */
});

App.FacebookAuthenticator = Ember.SimpleAuth.Authenticators.Base.extend({
    restore: function(properties) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if (!Ember.isEmpty(properties.accessToken)) {
                resolve(properties);
            } else {
                reject();
            }
        });
    },
    authenticate: function() {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            FB.getLoginStatus(function(fbResponse) {
                if (fbResponse.status === 'connected') {
                    Ember.run(function() {
                        resolve({ accessToken: fbResponse.authResponse.accessToken });
                    });
                } else if (fbResponse.status === 'not_authorized') {
                    reject();
                } else {
                    FB.login(function(fbResponse) {
                        if (fbResponse.authResponse) {
                            Ember.run(function() {
                                resolve({ accessToken: fbResponse.authResponse.accessToken });
                            });
                        } else {
                            reject();
                        }
                    });
                }
            });
        });
    },
    invalidate: function() {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            FB.logout(function(response) {
                Ember.run(resolve);
            });
        });
    }
});
