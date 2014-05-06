'use strict';

App.HomeRoute = App.Route.extend({
  model: function() {
    return this.store.find('targetLite', { user_id: localStorage.user_id });
  }
});
