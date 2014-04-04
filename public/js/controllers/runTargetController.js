'use strict';

App.RunTargetController = Ember.ObjectController.extend({
    distance: '',
    date: '',
    time: '',

    resetForm: function() {
        this.set('distance', '');
        this.set('date', '');
        this.set('time', '');
    },

    actions: {
        saveEvent: function() {
            console.log(this.get('model'));
            var event = this.store.createRecord('runEvent',  {
                target_id: this.get('model.id'),
                distance: this.get('distance'),
                date: this.get('date'),
                time: this.get('time')
            });
            console.log(event);
        }
    }
});
