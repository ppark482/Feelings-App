// var andrew, chelsea, chase, dean, emory, john, joanna, maggie, matthew, max, mike, paul, richard, tim, thomas, victoria, wendy;

var Group = Backbone.Collection.extend({

  model: Classmate,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/feelings2'// server url,

});

// Classmate instances
// --------------------------------------------------------------------------------------------------------------------------------------------

var andrew = new Classmate ({
  name: 'Andrew El-Masry',
  class: 'Front End Hackorz',
  sID: 'an17', // secret id
  low: '',
  high: '',
  avatar: ''
});

var chelsea = new Classmate ({
  name: 'Chelsea Franz',
  class: 'Front End Hackorz',
  sID: 'ch16', // secret id
  low: '',
  high: '',
  avatar: ''
});

var chase = new Classmate ({
  name: 'Chase Simpson',
  class: 'Front End Hackorz',
  sID: 'ch15', // secret id
  low: '',
  high: '',
  avatar: ''
});
var dean = new Classmate ({
  name: 'Dean Gili',
  class: 'Front End Hackorz',
  sID: 'de14', // secret id
  low: '',
  high: '',
  avatar: ''
});

var emory = new Classmate ({
  name: 'Emory Grifif',
  class: 'Front End Hackorz',
  sID: 'em13', // secret id
  low: '',
  high: '',
  avatar: ''
});
var john = new Classmate ({
  name: 'John Crocker',
  class: 'Front End Hackorz',
  sID: 'jo12', // secret id
  low: '',
  high: '',
  avatar: ''
});
var joanna = new Classmate ({
  name: 'Joanna Edgal',
  class: 'Front End Hackorz',
  sID: 'jo11', // secret id
  low: '',
  high: '',
  avatar: ''
});
var maggie = new Classmate ({
  name: 'Maggie Martin',
  class: 'Front End Hackorz',
  sID: 'ma10', // secret id
  low: '',
  high: '',
  avatar: ''
});
var matthew = new Classmate ({
  name: 'Matthew Griffeth',
  class: 'Front End Hackorz',
  sID: 'ma09', // secret id
  low: '',
  high: '',
  avatar: ''
});
var max = new Classmate ({
  name: 'Max Ehnert',
  class: 'Front End Hackorz',
  sID: 'ma08', // secret id
  low: '',
  high: '',
  avatar: ''
});
var mike = new Classmate ({
  name: 'Mike Zevitas',
  class: 'Front End Hackorz',
  sID: 'mi07', // secret id
  low: '',
  high: '',
  avatar: ''
});
var paul = new Classmate ({
  name: 'Paul Park',
  class: 'Front End Hackorz',
  sID: 'pa06', // secret id
  low: '',
  high: '',
  avatar: ''
});
var richard = new Classmate ({
  name: 'Richard Daniel',
  class: 'Front End Hackorz',
  sID: 'ri05', // secret id
  low: '',
  high: '',
  avatar: ''
});
var tim = new Classmate ({
  name: 'Tim Whitacre',
  class: 'Front End Hackorz',
  sID: 'ti04', // secret id
  low: '',
  high: '',
  avatar: ''
});
var thomas = new Classmate ({
  name: 'Thomas McCracken',
  class: 'Front End Hackorz',
  sID: 'th03', // secret id
  low: '',
  high: '',
  avatar: ''
});
var victoria = new Classmate ({
  name: 'Victoria Nicholson',
  class: 'Front End Hackorz',
  sID: 'vi02', // secret id
  low: '',
  high: '',
  avatar: ''
});
var wendy = new Classmate ({
  name: 'Wendy Nichols',
  class: 'Front End Hackorz',
  sID: 'we01', // secret id
  low: '',
  high: '',
  avatar: ''
});

var placeholder1 = new Classmate ({});
var placeholder2 = new Classmate ({});
var placeholder3 = new Classmate ({});

var groupArray = [paul, richard];

var entire_group = new Group( [andrew, chelsea, chase, dean, emory, john, joanna, maggie, matthew, max, mike, paul, richard, tim, thomas, victoria, wendy, placeholder1, placeholder2, placeholder3] ); // new collection instance with all classmates

Backbone.sync("create", entire_group);

// entire_group.fetch(); // takes all objects on server and places them in the collection entire_group



// _.each(groupArray, function(name){
//   entire_group.add(name);
//   name.set();
// });
//
// console.log(entire_group);
//
// entire_group.fetch().done( function (data) {
//   groupArray = data;
// });
