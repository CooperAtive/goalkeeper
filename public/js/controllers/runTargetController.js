'use strict';

App.RunTargetController = Ember.ObjectController.extend({
    needs: ['application'],

    distance: '',
    date: '',
    time: '',

    resetForm: function() {
        this.set('distance', '');
        this.set('date', '');
        this.set('time', '');
    },

    calculateDistance: function(distance, unit) {
        if(unit === 'miles') {
            return distance;
        } else {
            return distance / 1.6;
        }
    },

    calculateSeconds: function(seconds, minutes) {
        return seconds + minutes * 60;
    },

    formatDate: function(date) {
        var newDate = moment(new Date(date)).format('YYYY MM DD');
        var re = / /g;

        return newDate.replace(re, '-');
    },

    actions: {
        saveEvent: function() {
            var self = this;

            var distance = this.calculateDistance($('#distance-ran').val(), $('#distance-ran-unit option:selected').val())

            var event = {
                target_id: this.get('model.id'),
                user_id: this.get('controllers.application').get('userId'),
                distance: distance,
                date: this.formatDate($('#date-picker').val()),
                time: this.calculateSeconds(+$('#seconds-ran').val(), +$('#minutes-ran').val())
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
});
