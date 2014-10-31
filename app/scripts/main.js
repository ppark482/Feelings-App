// -------------------------------------------------------------------------------------------------------------------------------------------------
// Model Constructor is Classmate
// Collection Constructor is Group
// -------------------------------------------------------------------------------------------------------------------------------------------------
$('#update').on('submit', function(e){

  e.preventDefault();

  var sID = $('#secretID').val();
  var newHigh = $('#highUpdate').val();
  var newLow = $('#lowUpdate').val();

  // update groupArray from server
  groupArray.fetch();

  // Find instance with ID
  var findID = _.findWhere(groupArray, { sID : sID});

  // update High property
  findId.high = newHigh;

  // update Low property
  findId.low = newLow;
  
  // Save groupArray to server
  // groupArray.save();

});