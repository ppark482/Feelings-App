(function(){

  App.Collections.Group = Parse.Collection.extend({

    model: App.Models.Classmate

  });

  App.Collections.Feed = Parse.Collection.extend({

    model: App.Models.Classmate

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
  avatar: 'https://avatars3.githubusercontent.com/u/4088267?v=2&s=460'
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

App.entire_group = new App.Collections.Group();

App.feed_collection = new App.Collections.Feed();


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
