
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
<<<<<<< HEAD:public/javascript/index.js

//Nav bar
=======
/**
* Modal event handler for the login button.
*/
>>>>>>> fd2251f3fb5bf84d4ef42d3f09bf47c979445b91:public/javascript/main.js
$("#navbar-log-sign").on("click", function(){
  $('#log-sign-modal').modal('show');
});
<<<<<<< HEAD:public/javascript/index.js



//Back button from expand to returant modal
$("#backto-scroll-modal").on("click", function(){
    $('#expanded-modal').modal('hide'); 
    $('#exampleModalCenter').modal('show'); 
});

    $('.scrollmenu').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 1);
    e.preventDefault();
    });

=======
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
>>>>>>> fd2251f3fb5bf84d4ef42d3f09bf47c979445b91:public/javascript/main.js
