(function(){

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function() {
      Backbone.history.start();
      console.log('router loaded');
    },

    routes:{
      '' : 'home',
      'featured' : 'featured',
      'updated/:id' : 'updated'
    },

    home: function() {
      // Calls each View for the page
      new App.Views.ClassView({ collection: App.entire_group });
      new App.Views.FormView({});
      new App.Views.FeedView({ collection: App.feed_collection });
    },

    featured: function() {
      // Calls up individual's profile
      // in a separate view

      // Has "featured" box with individual
      // avatar, name, hi, lo, eventually
      // gif and video

      // Grid is still located on the bottom
    }


  });


}());
