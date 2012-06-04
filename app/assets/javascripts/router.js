window.ReadyAppsRouter = new (Backbone.Router.extend({
  routes: {
    ""          : "index",
  },

  initialize: function(){
  },

  index: function(){
    var homeView = new HomeView();
    $('#app').hide();
    $('#app').html(homeView.render().el).fadeIn();
  },

  start: function(){
    Backbone.history.start();
  },

}));