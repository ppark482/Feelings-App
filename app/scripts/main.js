// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group
// -------------------------------------------------------------------------------------------------------------------------------------------------
$('#update').on('submit', function(e){

  e.preventDefault();

  var secret = $('#secretID').val();
  var newHigh = $('#highUpdate').val();
  var newLow = $('#lowUpdate').val();

  // update groupArray from server
  entire_group.fetch();

  // Find instance with ID
  var findID = entire_group.findWhere({sID : secret});

  // Destroy existing record

  // update High property
  findID.set('high', newHigh).set('low', newLow);

  // Save groupArray to server
  // findID.save();

});