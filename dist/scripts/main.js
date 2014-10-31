var Classmate = Backbone.Models.extend({

  defaults: {

    name: '',
    class: 'Front End Hackorz',
    sID: '', // secret id
    low: '',
    high: '',
    avatar: ''  
  }

  initialize: function() {
    console.log("Classmate initialized");
  };


});

var Group = Backbone.Collection.extend({

  model: Classmate,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/feelings'// server url,

});

// Classmate instances
// --------------------------------------------------------------------------------------------------------------------------------------------

var andrew = new Classmate {
  name: 'Andrew El-Masry',
  class: 'Front End Hackorz',
  sID: 'an17', // secret id
  low: '',
  high: '',
  avatar: ''
}

new chelsea = new Classmate {
  name: 'Chelsea Franz',
  class: 'Front End Hackorz',
  sID: 'ch16', // secret id
  low: '',
  high: '',
  avatar: ''
}

new chase = new Classmate {
  name: 'Chase Simpson',
  class: 'Front End Hackorz',
  sID: 'ch15', // secret id
  low: '',
  high: '',
  avatar: ''
}
new dean = new Classmate {
  name: 'Dean Gili',
  class: 'Front End Hackorz',
  sID: 'de14', // secret id
  low: '',
  high: '',
  avatar: ''
}

new emory = new Classmate {
  name: 'Emory Grifif',
  class: 'Front End Hackorz',
  sID: 'em13', // secret id
  low: '',
  high: '',
  avatar: ''
}
new john = new Classmate {
  name: 'John Crocker',
  class: 'Front End Hackorz',
  sID: 'jo12', // secret id
  low: '',
  high: '',
  avatar: ''
}
new joanna = new Classmate {
  name: 'Joanna Edgal',
  class: 'Front End Hackorz',
  sID: 'jo11', // secret id
  low: '',
  high: '',
  avatar: ''
}
new maggie = new Classmate {
  name: 'Maggie Martin',
  class: 'Front End Hackorz',
  sID: 'ma10', // secret id
  low: '',
  high: '',
  avatar: ''
}
new matthew = new Classmate {
  name: 'Matthew Griffeth',
  class: 'Front End Hackorz',
  sID: 'ma09', // secret id
  low: '',
  high: '',
  avatar: ''
}
new max = new Classmate {
  name: 'Max Ehnert',
  class: 'Front End Hackorz',
  sID: 'ma08', // secret id
  low: '',
  high: '',
  avatar: ''
}
new mike = new Classmate {
  name: 'Mike Zevitas',
  class: 'Front End Hackorz',
  sID: 'mi07', // secret id
  low: '',
  high: '',
  avatar: ''
}
new paul = new Classmate {
  name: 'Paul Park',
  class: 'Front End Hackorz',
  sID: 'pa06', // secret id
  low: '',
  high: '',
  avatar: ''
}
new richard = new Classmate {
  name: 'Richard Daniel',
  class: 'Front End Hackorz',
  sID: 'ri05', // secret id
  low: '',
  high: '',
  avatar: ''
}
new tim = new Classmate {
  name: 'Tim Whitacre',
  class: 'Front End Hackorz',
  sID: 'ti04', // secret id
  low: '',
  high: '',
  avatar: ''
}
new thomas = new Classmate {
  name: 'Thomas McCracken',
  class: 'Front End Hackorz',
  sID: 'th03', // secret id
  low: '',
  high: '',
  avatar: ''
}
new victoria = new Classmate {
  name: 'Victoria Nicholson',
  class: 'Front End Hackorz',
  sID: 'vi02', // secret id
  low: '',
  high: '',
  avatar: ''
}
new wendy = new Classmate {
  name: 'Wendy Nichols',
  class: 'Front End Hackorz',
  sID: 'we01', // secret id
  low: '',
  high: '',
  avatar: ''
}

// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group
// -------------------------------------------------------------------------------------------------------------------------------------------------
