(function(){

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function() {
      Backbone.history.start();
    },

    routes:{
      '' : 'home',
      'featuredItem/:id' : 'featuredItem'
    },

    home: function() {
      // Calls each View for the page
      new App.Views.ClassView({ collection: App.entire_group });
      new App.Views.FormView({});
      new App.Views.FeedView({ collection: App.feed_collection });
    },

    featuredItem: function(id) {

      var f = App.entire_group.get(id)
      // Instantiates Individual's Profile View
      new App.Views.SingleView({id: f});
      new App.Views.ClassView({ collection: App.entire_group });
      new App.Views.FeedView({ collection: App.feed_collection });

      // Has "featured" box with individual
      // avatar, name, hi, lo, eventually
      // gif and video

      // Grid is still located on the bottom
    }


  });


}());
