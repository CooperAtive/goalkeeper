'use strict';

App.RunTargetController = Ember.ObjectController.extend({
    distance: '',
    date: '',
    time: '',

    resetForm: function() {
        console.log('resetform');
        this.set('distance', '');
        this.set('date', '');
        this.set('time', '');
        console.log('resetform');
    },

    actions: {
        saveEvent: function() {
            var self = this;
            var event = {
                target_id: this.get('model.id'),
                user_id: localStorage.user_id,
                distance: this.get('distance'),
                date: this.get('date'),
                time: this.get('time')
            };

            $.post('api/v1/runEvents', event, function(response) {
                    var savedEvent = self.store.push('runEvent', response.event);
                    self.get('runEvents').addObject(savedEvent);
                })
                .fail( function() {
                    alert('Invalid Event');
            });
            this.resetForm();
        }
    }
    /*
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
*/
});
