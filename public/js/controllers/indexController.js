App.IndexController = Ember.Controller.extend({
    actions: {
        go_login: function() {
            console.log(this.get('session').isAuthenticated);
            if(this.get('session').isAuthenticated) {
                this.transitionToRoute('home');
            } else {
                this.transitionToRoute('login');
            }
        }
    }
});
