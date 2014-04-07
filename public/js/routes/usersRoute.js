'use strict';

App.UsersRoute = App.Route.extend({
  model: function(){
    return this.store.find('user');
  }
});
