window.App = {};
App.Models = {};
App.Collections = {};
App.Views = {};
App.Routers = {};

(function(){

  App.Models.Classmate = Backbone.Model.extend({

    defaults: {

      name: '',
      class: 'Front End Hackorz',
      sID: '', // secret id
      low: '',
      high: '',
      avatar: '',
      gif: ''
    },

    idAttribute: '_id', // need because we are using MongoDB

    initialize: function() {}

  });

}()); // end of IIF

(function(){

  App.Collections.Group = Backbone.Collection.extend({

    model: App.Models.Classmate,

    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/feelings6'// server url,

  });

  App.Collections.Feed = Backbone.Collection.extend({

    model: App.Models.Classmate,
    comparator: 'created',
    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/feelingsFeed5'// server url,
  });

}());

// Classmate instances
// --------------------------------------------------------------------------------------------------------------------------------------------

var andrew = new App.Models.Classmate ({
  name: 'Andrew El-Masry',
  class: 'Front End Hackorz',
  sID: 'an17',
  avatar: 'https://avatars3.githubusercontent.com/u/8506868?v=2&s=460'
});

var chelsea = new App.Models.Classmate ({
  name: 'Chelsea Franz',
  class: 'Front End Hackorz',
  sID: 'ch16', // secret id
  avatar: 'https://avatars0.githubusercontent.com/u/8863457?v=2&s=460'
});

var chase = new App.Models.Classmate ({
  name: 'Chase Simpson',
  class: 'Front End Hackorz',
  sID: 'ch15', // secret id
  avatar: 'https://avatars3.githubusercontent.com/u/8864004?v=2&s=460'
});
var dean = new App.Models.Classmate ({
  name: 'Dean Gili',
  class: 'Front End Hackorz',
  sID: 'de14', // secret id
  avatar: 'https://avatars0.githubusercontent.com/u/8864519?v=2&s=460'
});

var emory = new App.Models.Classmate ({
  name: 'Emory Grifif',
  class: 'Front End Hackorz',
  sID: 'em13', // secret id
  avatar: 'https://avatars0.githubusercontent.com/u/8863456?v=2&s=460'
});
var john = new App.Models.Classmate ({
  name: 'John Crocker',
  class: 'Front End Hackorz',
  sID: 'jo12', // secret id
  avatar: 'https://avatars1.githubusercontent.com/u/8863455?v=2&s=460'
});
var joanna = new App.Models.Classmate ({
  name: 'Joanna Edgal',
  class: 'Front End Hackorz',
  sID: 'jo11', // secret id
  avatar: 'https://avatars2.githubusercontent.com/u/8863463?v=2&s=460'
});
var maggie = new App.Models.Classmate ({
  name: 'Maggie Martin',
  class: 'Front End Hackorz',
  sID: 'ma10', // secret id
  avatar: 'https://avatars1.githubusercontent.com/u/8229633?v=2&s=460'
});
var matthew = new App.Models.Classmate ({
  name: 'Matthew Griffeth',
  class: 'Front End Hackorz',
  sID: 'ma09', // secret id
  avatar: 'https://avatars3.githubusercontent.com/u/8284438?v=2&s=460'
});
var max = new App.Models.Classmate ({
  name: 'Max Ehnert',
  class: 'Front End Hackorz',
  sID: 'ma08', // secret id
  avatar: 'https://avatars3.githubusercontent.com/u/8755250?v=2&s=460'
});
var mike = new App.Models.Classmate ({
  name: 'Mike Zevitas',
  class: 'Front End Hackorz',
  sID: 'mi07', // secret id
  avatar: 'https://avatars0.githubusercontent.com/u/8862531?v=2&s=460'
});
var paul = new App.Models.Classmate ({
  name: 'Paul Park',
  class: 'Front End Hackorz',
  sID: 'pa06', // secret id
  avatar: 'https://avatars2.githubusercontent.com/u/8863462?v=2&s=460'
});
var richard = new App.Models.Classmate ({
  name: 'Richard Daniel',
  class: 'Front End Hackorz',
  sID: 'ri05', // secret id
  avatar: 'https://avatars3.githubusercontent.com/u/4088267?v=2&s=460',
  property: 'testing'
});
var tim = new App.Models.Classmate ({
  name: 'Tim Whitacre',
  class: 'Front End Hackorz',
  sID: 'ti04', // secret id
  avatar: 'https://avatars2.githubusercontent.com/u/425938?v=2&s=460'
});
var thomas = new App.Models.Classmate ({
  name: 'Thomas McCracken',
  class: 'Front End Hackorz',
  sID: 'th03', // secret id
  avatar: 'https://avatars3.githubusercontent.com/u/2215681?v=2&s=460'
});
var victoria = new App.Models.Classmate ({
  name: 'Victoria Nicholson',
  class: 'Front End Hackorz',
  sID: 'vi02', // secret id
  avatar: 'https://avatars1.githubusercontent.com/u/8070653?v=2&s=460'
});
var wendy = new App.Models.Classmate ({
  name: 'Wendy Nichols',
  class: 'Front End Hackorz',
  sID: 'we01', // secret id
  avatar: 'https://avatars1.githubusercontent.com/u/8864632?v=2&s=460'
});
var sarah = new App.Models.Classmate ({
  name: "Sarah Lodato",
  sID: "lodato",
  avatar: "https://pbs.twimg.com/profile_images/515249052431052800/xaVWxMV0_400x400.png",
  class: "Front End Hackorz"
});
var james = new App.Models.Classmate ({
  name: "James Dabbs",
  sID: "dabbs",
  avatar: "https://pbs.twimg.com/profile_images/490535209578680320/T6WhBSGG_400x400.jpeg",
  class: "Front End Hackorz"
});

var laura = new App.Models.Classmate ({
  name: "Laura Lindeman",
  sID: "lindeman",
  avatar: "https://pbs.twimg.com/profile_images/515159398667137024/1cLAmyws_400x400.jpeg",
  class: "Front End Hackorz"
});

// [andrew, chelsea, chase, dean, emory, john, joanna, maggie, matthew, max, mike, paul, richard, tim, thomas, victoria, wendy, placeholder1, placeholder2, placeholder3]

var groupArray = [andrew, chelsea, chase, dean, emory, john, joanna, maggie, matthew, max, mike, paul, richard, tim, thomas, victoria, wendy];

App.entire_group = new App.Collections.Group ();

App.feed_collection = new App.Collections.Feed ();


/* DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE
// THE GOD FUNCTION
// Replace App.entire_group with the one here */
// Replace App.entire_group.fetch().done(function() {}); with the Backbone.sync function
// Use these to populate a new server

// App.entire_group = new App.Collections.Group([andrew, chelsea, chase, dean, emory, john, joanna, maggie, matthew, max, mike, paul, richard, tim, thomas, victoria, wendy, sarah, james, laura]); // new collection instance with all classmates
//
// Backbone.sync("create", App.entire_group); // creates the entire group on the server
/*
DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE */

(function(){
  // ClassView
  // -------------------------------------------------------------------------------------- //
  App.Views.ClassView = Backbone.View.extend({

    tagName: 'ul',
    className: 'profile',

    events: {
      'click li.individual' : 'setFeatured'
    },

    initialize: function() {
      this.render(App.entire_group);
      App.entire_group.on('sync', this.render, this);
    },

    render: function() {
      // Templates
      var gridTemp = $('#grid').html();
      var renderGrid = _.template(gridTemp);
      // Binding self
      var self = this;
      // iterating through the entire_group
      _.each(App.entire_group.models, function(user){
        self.$el.append(renderGrid(user.attributes));
      });

      // Take data and append to specific
      // DOM element
      $('.profileGrid').html(this.el);

      return this;

    }, // end of render

    setFeatured : function(e) {

      var id = $(e.currentTarget).attr('id');

      var feature = App.entire_group.get(id);

      new App.Views.SingleView({id: feature});

    },

  }); // end of classview

  // Form View
  // -------------------------------------------------------------------------------------- //
  App.Views.FormView = Backbone.View.extend({
    el: '#inputForm',
    events: {
      'click #updateBtn': 'updateFeels',
    },
    initialize: function(){
      this.render();
      App.entire_group.on('sync', this.updateFeels, this);
    },
    render: function(){
      var form = $('#formTemp').html();
      this.$el.html(form);
    },
    updateFeels: function(e){
      // on click of update feelings button
      e.preventDefault();
      // take input values
      // trim removes spaces before or after
      var secret = $.trim( $('#secretID').val() );
      var newHigh = $.trim( $('#highUpdate').val() );
      var newLow = $.trim( $('#lowUpdate').val() );
      var newGif = $.trim( $('#gifUpdate').val() );
      // need to compare secretID (secret) to
      // secret IDs in the collection and return
      findID = App.entire_group.findWhere({sID : secret});
      // need to set low and high properties
      // to the new low and high
      findID.set('low', newLow);
      findID.set('high', newHigh);
      findID.set('gif', newGif);
      // Append to feed
      var newPost = new App.Models.Classmate({
        name: findID.attributes.name,
        low: findID.attributes.low,
        high: findID.attributes.high,
        avatar: findID.attributes.avatar,
        gif: findID.attributes.gif,
      });
      // Adds the time created to the model
      var cur_time = $.now();
      newPost.set({ created: cur_time })
      // Remove oldest post from feed_collection
      // Removing oldest instance
      // Limited to 6
      App.feed_collection.models[0].destroy();

      App.feed_collection.add(newPost).save();

      // updates to server
      findID.save();
      // Clears input form
      $('#secretID, #highUpdate, #lowUpdate, #gifUpdate').val('');
      // updates featured block
      new App.Views.SingleView({ 'id' : findID });
    }
  }); // end of form
  // Feed View
  // -------------------------------------------------------------------------------------- //
  App.Views.FeedView = Backbone.View.extend({

    el: '#feed',

    events: {
      'click #updateBtn': 'addToFeed',
    },

    initialize: function(){

      this.render();
      App.feed_collection.on('change', this.render, this);

    },

    render: function(){

      var feed = $('#feedTemp').html();
      var renderFeed = _.template(feed);

      // Clear our element
      this.$el.empty();

      // Binding self
      var self = this;
      // iterating through the entire_group
      _.each(App.feed_collection.models, function(user){
        self.$el.prepend(renderFeed(user.attributes));
      });

      // Take data and append to specific
      // DOM element
      $('#feedContainer').html(this.el);

      return this;

    },

    addToFeed: function(){}

  }); // end of feed view

  // Single View
  // -------------------------------------------------------------------------------------- //
  App.Views.SingleView = Backbone.View.extend({

    el: '#featured',

    template: _.template($('#featuredTemp').html()),

    events: {

    },

    initialize: function(options) {
      this.options = options;
      this.render();
      App.entire_group.on('sync', this.render, this);
    },

    render: function () {
      var self = this;
      this.$el.empty();
      this.$el.html(this.template(this.options.id.toJSON()));
    }


  }); // end of single view

}()); // end of IIF

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

// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group :::::: entire_group is collection of classmates
// View Constructor is ClassView :::::  -------------------------------------------------------------------------------------------------------------------------------------------------

(function(){

  var findID;
  var uniqueID;

  // Brings down data from server for class
  // and form views
  App.entire_group.fetch().done(function() {
    // Brings down data from server for
    // the feed sidebar
    App.feed_collection.fetch().done(function(){
      // Instantiates Router after Fetching
      // Data from both collections
      App.router = new App.Routers.AppRouter;
    });

  });


  // for a butterfly to follow your cursor
  $(document).ready(function(){
  var follow = $('.follow').css({position: 'absolute'});
  $(document).mousemove(function(e){
    follow.css({
      "top" : e.pageY + 5,
      "left" : e.pageX + 5
      });
    });
  });

}()); // end of IIF
