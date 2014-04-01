App.Router.map(function() {
  this.route('login');
  this.route('signup');
  this.resource('users', function() {
    this.resource('user', { path: '/:user_id' });
  });
  this.resource('profile', function() {
    this.route('edit');
  });
  this.route('home');
  this.resource('accomplishments');
  this.resource('catalog', function() {
    this.resource('plan', { path: '/:plan_id'});
  });
  this.resource('game_plan');
  this.resource('targets', function() {
    this.resource('runTarget', { path: '/:runTarget_id'}, function() {
      // names -> 
      this.route('edit');
    });
    this.route('create');
  });
  /*
    QUEUE

    calendar
    timeline
    tournaments
  */
});
