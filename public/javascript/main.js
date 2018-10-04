
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

$("#navbar-log-sign").on("click", function(){
  $('#log-sign-modal').modal('show');
});

$("#flagModButts").on("click", function(){
  $("#exampleModalCenter").modal("hide");
  $("#flagModal").modal("show");
});
