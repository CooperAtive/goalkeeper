App.TargetLinkComponent = Ember.Component.extend({
  classNames: ['target-link'],

  didInsertElement: function() {
    this.$().addClass(this.type);

    var rotation = Math.floor(this.target.get('percentComplete') * 180);
    var styles = {
      '-webkit-transform': 'rotate(' + rotation + 'deg)',
      '-ms-transform': 'rotate(' + rotation + 'deg)',
      'transform': 'rotate(' + rotation + 'deg)'
    }
    
    this.$().find('.circle .fill, .circle .mask.full').css(styles);
  }
});
