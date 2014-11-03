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

// Update your feelings
$('#update').on('click', function(e){
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
