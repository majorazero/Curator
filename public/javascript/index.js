
$("#group-name1").on("click", function () {
    $('#exampleModalCenter').modal('show');
});


$("#group-name2").on("click", function () {
    $('#exampleModalCenter').modal('show');
});


$("#group-name3").on("click", function () {
    $('#exampleModalCenter').modal('show');
});

//Top 5 choices modal
$("#expand-btn").on("click", function () {
    $("body").css("overflow", "hidden");
    $('#exampleModalCenter').modal('hide');
    $('#expanded-modal').modal('show');
});

/**
* Modal event handler for the login button.
*/
$("#navbar-log-sign").on("click", function(){
  if(sessionStorage.getItem("curatorId") !== null){
    let profileBody = $("#profileBody");
    profileBody.empty();
    let imgDiv = $("<div>").append("<img id='profileImageModal' class='img-fluid' src='images/dummy-icon.png' />");
    console.log(sessionStorage);
    let userNameDiv = $("<div>").text(sessionStorage.curatorName).attr("id","profileUsernameModal");
    profileBody.append(imgDiv).append(userNameDiv);
    $("#profileModal").modal("show");
  }
  else {
    $('#log-sign-modal').modal('show');
  }
});

//Back button from expand to returant modal
$("#backto-scroll-modal").on("click", function () {
    $('#expanded-modal').modal('hide');
    $('#exampleModalCenter').modal('show');
});

$('.scrollmenu').mousewheel(function (e, delta) {
    this.scrollLeft -= (delta * 1);
    e.preventDefault();
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
});
