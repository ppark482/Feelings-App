// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group
// -------------------------------------------------------------------------------------------------------------------------------------------------
$('#update').on('submit', function(e){

  e.preventDefault();

  var secret = $('#secretID').val();
  var newHigh = $('#highUpdate').val().toString();
  var newLow = $('#lowUpdate').val().toString();

  // update groupArray from server
  // entire_group.fetch();

  // Find instance with ID
  var findID = entire_group.findWhere({sID : secret});
  console.log(findID);

  var uniqueID = entire_group.findWhere( {_id : findID.attributes._id} );
  console.log(uniqueID);

  // update High property
  uniqueID.set('high', newHigh).set('low', newLow);
  // Save groupArray to server
  // findID.save();

});