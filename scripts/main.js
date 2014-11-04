var Classmate = Backbone.Model.extend({

  defaults: {

    name: '',
    class: 'Front End Hackorz',
    sID: '', // secret id
    low: '',
    high: '',
    avatar: ''
  },

  idAttribute: '_id', // need because we are using MongoDB


  initialize: function() {
  }


});

// var andrew, chelsea, chase, dean, emory, john, joanna, maggie, matthew, max, mike, paul, richard, tim, thomas, victoria, wendy;

var Group = Backbone.Collection.extend({

  model: Classmate,

  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/feelings5'// server url,
});

// Classmate instances
// --------------------------------------------------------------------------------------------------------------------------------------------

var andrew = new Classmate ({
  name: 'Andrew El-Masry',
  class: 'Front End Hackorz',
  sID: 'an17',
  avatar: 'https://avatars3.githubusercontent.com/u/8506868?v=2&s=460'
});

var chelsea = new Classmate ({
  name: 'Chelsea Franz',
  class: 'Front End Hackorz',
  sID: 'ch16', // secret id
  avatar: 'https://avatars0.githubusercontent.com/u/8863457?v=2&s=460'
});

var chase = new Classmate ({
  name: 'Chase Simpson',
  class: 'Front End Hackorz',
  sID: 'ch15', // secret id
  avatar: 'https://avatars3.githubusercontent.com/u/8864004?v=2&s=460'
});
var dean = new Classmate ({
  name: 'Dean Gili',
  class: 'Front End Hackorz',
  sID: 'de14', // secret id
  avatar: 'https://avatars0.githubusercontent.com/u/8864519?v=2&s=460'
});

var emory = new Classmate ({
  name: 'Emory Grifif',
  class: 'Front End Hackorz',
  sID: 'em13', // secret id
  avatar: 'https://avatars0.githubusercontent.com/u/8863456?v=2&s=460'
});
var john = new Classmate ({
  name: 'John Crocker',
  class: 'Front End Hackorz',
  sID: 'jo12', // secret id
  avatar: 'https://avatars1.githubusercontent.com/u/8863455?v=2&s=460'
});
var joanna = new Classmate ({
  name: 'Joanna Edgal',
  class: 'Front End Hackorz',
  sID: 'jo11', // secret id
  avatar: 'https://avatars2.githubusercontent.com/u/8863463?v=2&s=460'
});
var maggie = new Classmate ({
  name: 'Maggie Martin',
  class: 'Front End Hackorz',
  sID: 'ma10', // secret id
  avatar: 'https://avatars1.githubusercontent.com/u/8229633?v=2&s=460'
});
var matthew = new Classmate ({
  name: 'Matthew Griffeth',
  class: 'Front End Hackorz',
  sID: 'ma09', // secret id
  avatar: 'https://avatars3.githubusercontent.com/u/8284438?v=2&s=460'
});
var max = new Classmate ({
  name: 'Max Ehnert',
  class: 'Front End Hackorz',
  sID: 'ma08', // secret id
  avatar: 'https://avatars3.githubusercontent.com/u/8755250?v=2&s=460'
});
var mike = new Classmate ({
  name: 'Mike Zevitas',
  class: 'Front End Hackorz',
  sID: 'mi07', // secret id
  avatar: 'https://avatars0.githubusercontent.com/u/8862531?v=2&s=460'
});
var paul = new Classmate ({
  name: 'Paul Park',
  class: 'Front End Hackorz',
  sID: 'pa06', // secret id
  avatar: 'https://avatars2.githubusercontent.com/u/8863462?v=2&s=460'
});
var richard = new Classmate ({
  name: 'Richard Daniel',
  class: 'Front End Hackorz',
  sID: 'ri05', // secret id
  avatar: 'https://avatars3.githubusercontent.com/u/4088267?v=2&s=460',
  property: 'testing'
});
var tim = new Classmate ({
  name: 'Tim Whitacre',
  class: 'Front End Hackorz',
  sID: 'ti04', // secret id
  avatar: 'https://avatars2.githubusercontent.com/u/425938?v=2&s=460'
});
var thomas = new Classmate ({
  name: 'Thomas McCracken',
  class: 'Front End Hackorz',
  sID: 'th03', // secret id
  avatar: 'https://avatars3.githubusercontent.com/u/2215681?v=2&s=460'
});
var victoria = new Classmate ({
  name: 'Victoria Nicholson',
  class: 'Front End Hackorz',
  sID: 'vi02', // secret id
  avatar: 'https://avatars1.githubusercontent.com/u/8070653?v=2&s=460'
});
var wendy = new Classmate ({
  name: 'Wendy Nichols',
  class: 'Front End Hackorz',
  sID: 'we01', // secret id
  avatar: 'https://avatars1.githubusercontent.com/u/8864632?v=2&s=460'
});
var sarah = new Classmate ({
  name: "Sarah Lodato",
  sID: "lodato",
  avatar: "https://pbs.twimg.com/profile_images/515249052431052800/xaVWxMV0_400x400.png",
  class: "Front End Hackorz"
});
var james = new Classmate ({
  name: "James Dabbs",
  sID: "dabbs",
  avatar: "https://pbs.twimg.com/profile_images/490535209578680320/T6WhBSGG_400x400.jpeg",
  class: "Front End Hackorz"
});

var laura = new Classmate ({
  name: "Laura Lindeman",
  sID: "lindeman",
  avatar: "https://pbs.twimg.com/profile_images/515159398667137024/1cLAmyws_400x400.jpeg",
  class: "Front End Hackorz"
});

// [andrew, chelsea, chase, dean, emory, john, joanna, maggie, matthew, max, mike, paul, richard, tim, thomas, victoria, wendy, placeholder1, placeholder2, placeholder3]

var groupArray = [andrew, chelsea, chase, dean, emory, john, joanna, maggie, matthew, max, mike, paul, richard, tim, thomas, victoria, wendy];

var entire_group = new Group ();


/* DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE
// THE GOD FUNCTION
// Replace var entire_group with the one here */
// Replace entire_group.fetch().done(function() {}); with the Backbone.sync function
// Use these to populate a new server

// var entire_group = new Group([andrew, chelsea, chase, dean, emory, john, joanna, maggie, matthew, max, mike, paul, richard, tim, thomas, victoria, wendy]); // new collection instance with all classmates
//
// Backbone.sync("create", entire_group); // creates the entire group on the server
/*
DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE DO NOT DELETE */

var ClassView = Backbone.View.extend({

  tagName: 'ul',
  className: 'profile',

  initialize: function(options) {
    this.render(options.collection);
  },

  // events: {
  //   'click li.individual' : 'setFeatured'
  // },
  //
  // setFeatured : function() {
  //   $('.featured .high').html();
  // },

  render: function( collection) {
    // Templates
    var gridTemp = $('#grid').html();
    var renderGrid = _.template(gridTemp);
    // Binding self
    var self = this;
    // iterating through the entire_group
    _.each(collection.models, function(user){
      self.$el.append(renderGrid(user.attributes));
    });

    // Take data and append to specific
    // DOM element
    $('.profileGrid').html(this.el);

    return this;

  } // end of render


});

// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group :::::: entire_group is collection of classmates
// View Constructor is ClassView :::::  -------------------------------------------------------------------------------------------------------------------------------------------------
var findID;
var uniqueID;

// Brings down data from server
entire_group.fetch().done(function() {
  new ClassView({
    // after fetching from server
    // collection entire_group is populated
    collection: entire_group
  });
});


// On update feelings click
$('#update').on('click', '#updateBtn', function(e){
  // on click of update feelings button
  e.preventDefault();
  // take input values
  // trim removes spaces before or after
  var secret = $.trim( $('#secretID').val() );
  var newHigh = $.trim( $('#highUpdate').val() );
  var newLow = $.trim( $('#lowUpdate').val() );
  // need to compare secretID (secret) to
  // secret IDs in the collection and return
  findID = entire_group.findWhere({sID : secret});
  // need to set low and high properties
  // to the new low and high
  findID.set('low', newLow);
  findID.set('high', newHigh);
  // updates to server
  findID.save();
  // Clears input form
  $('#secretID, #highUpdate, #lowUpdate').val('');
});

// On click of individual profiles
// Populate the featured section
$('.profileGrid').on('click', 'li', function() {
  entire_group.fetch().done(function() {
    new ClassView({
        collection: entire_group
    });
    $('#featured').css('display', 'block');
  }); // refreshes collection
  var featuredImage = $(this).data('avatar');
  var featuredHigh = $(this).data('high');
  var featuredLow = $(this).data('low');
  $('.featuredImg').html(" <img src='" + featuredImage + "' /> ")
  $('.high').html(featuredHigh);
  $('.low').html(featuredLow);
});
