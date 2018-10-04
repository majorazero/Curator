
$("#group-name1").on("click", function(){
    $('#exampleModalCenter').modal('show');
});


$("#group-name2").on("click", function(){
    $('#exampleModalCenter').modal('show');
});


$("#group-name3").on("click", function(){
    $('#exampleModalCenter').modal('show');
});


$("#expand-btn").on("click", function(){
    $('#exampleModalCenter').modal('hide');
    $('#expanded-modal').modal('show');
});
/**
* Modal event handler for the login button.
*/
$("#navbar-log-sign").on("click", function(){
  $('#log-sign-modal').modal('show');
});
/**
* Modal event handler for the flag button.
*/
$("#flagModButts").on("click", function(){
  $("#exampleModalCenter").modal("hide");
  $("#flagModal").modal("show");
});
/**
* Modal event handler for the nav invite code button.
*/
$("#inviteCode").on("click",function(){
  $("#inviteCodeModal").modal("show");
})
