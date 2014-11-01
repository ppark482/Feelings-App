// var andrew, chelsea, chase, dean, emory, john, joanna, maggie, matthew, max, mike, paul, richard, tim, thomas, victoria, wendy;

var Group = Backbone.Collection.extend({

  model: Classmate,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/feelings3'// server url,

});

// Classmate instances
// --------------------------------------------------------------------------------------------------------------------------------------------

var andrew = new Classmate ({
  name: 'Andrew El-Masry',
  class: 'Front End Hackorz',
  sID: 'an17', // secret id
  avatar: ''
});

var chelsea = new Classmate ({
  name: 'Chelsea Franz',
  class: 'Front End Hackorz',
  sID: 'ch16', // secret id
  avatar: ''
});

var chase = new Classmate ({
  name: 'Chase Simpson',
  class: 'Front End Hackorz',
  sID: 'ch15', // secret id
  avatar: ''
});
var dean = new Classmate ({
  name: 'Dean Gili',
  class: 'Front End Hackorz',
  sID: 'de14', // secret id
  avatar: ''
});

var emory = new Classmate ({
  name: 'Emory Grifif',
  class: 'Front End Hackorz',
  sID: 'em13', // secret id
  avatar: ''
});
var john = new Classmate ({
  name: 'John Crocker',
  class: 'Front End Hackorz',
  sID: 'jo12', // secret id
  avatar: ''
});
var joanna = new Classmate ({
  name: 'Joanna Edgal',
  class: 'Front End Hackorz',
  sID: 'jo11', // secret id
  avatar: ''
});
var maggie = new Classmate ({
  name: 'Maggie Martin',
  class: 'Front End Hackorz',
  sID: 'ma10', // secret id
  avatar: ''
});
var matthew = new Classmate ({
  name: 'Matthew Griffeth',
  class: 'Front End Hackorz',
  sID: 'ma09', // secret id
  avatar: ''
});
var max = new Classmate ({
  name: 'Max Ehnert',
  class: 'Front End Hackorz',
  sID: 'ma08', // secret id
  avatar: ''
});
var mike = new Classmate ({
  name: 'Mike Zevitas',
  class: 'Front End Hackorz',
  sID: 'mi07', // secret id
  avatar: ''
});
var paul = new Classmate ({
  name: 'Paul Park',
  class: 'Front End Hackorz',
  sID: 'pa06', // secret id
  avatar: ''
});
var richard = new Classmate ({
  name: 'Richard Daniel',
  class: 'Front End Hackorz',
  sID: 'ri05', // secret id
  avatar: '',
  property: 'testing'
});
var tim = new Classmate ({
  name: 'Tim Whitacre',
  class: 'Front End Hackorz',
  sID: 'ti04', // secret id
  avatar: ''
});
var thomas = new Classmate ({
  name: 'Thomas McCracken',
  class: 'Front End Hackorz',
  sID: 'th03', // secret id
  avatar: ''
});
var victoria = new Classmate ({
  name: 'Victoria Nicholson',
  class: 'Front End Hackorz',
  sID: 'vi02', // secret id
  avatar: ''
});
var wendy = new Classmate ({
  name: 'Wendy Nichols',
  class: 'Front End Hackorz',
  sID: 'we01', // secret id
  avatar: ''
});

var groupArray = [paul, richard];

var entire_group = new Group();

_.each(groupArray, function(name){
  entire_group.add(name);
  name.set();
});

console.log(entire_group);

entire_group.fetch().done( function (data) {
  groupArray = data;
});
