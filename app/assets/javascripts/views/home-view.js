window.HomeView = Backbone.View.extend({

  events: {
  },

  navCallback: function(e) {
    console.log(e);
  },

  className: 'home-view',

  initialize: function() {
  },

  render: function() {
    var compiledTemplate = JST['templates/home'];
    this.$el.html(compiledTemplate());
    return this;
  }
});