// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group :::::: entire_group is collection of classmates
// -------------------------------------------------------------------------------------------------------------------------------------------------
var findID;

$('#update').on('click', function(e){
  // on click of update feelings button
  e.preventDefault();
  // take input values
  // trim removes spaces before or after
  var secret = $.trim( $('#secretID').val() );
  var newHigh = $.trim( $('#highUpdate').val() );
  var newLow = $('#lowUpdate').val();
  // need to compare secretID (secret) to
  // secret IDs in the collection and return
  findID = entire_group.findWhere({sID : secret});
  // need to set low and high properties
  // to the new low and high
  findID.set('low', newLow);
  findID.set('high', newHigh);
  // need to repopulate server
  findID.save();
  // Clears input form
  $('#secretID, #highUpdate, #lowUpdate').val('');

  // update groupArray from server
  // entire_group.fetch().done( function(data){
  //   findID = entire_group.findWhere({sID : secret});
  //   console.log(findID);
  //   // entire_group.add(findID);
  // });

  // uniqueID.set('high', newHigh).set('low', newLow);
  // Save groupArray to server
  // findID.save();

});
