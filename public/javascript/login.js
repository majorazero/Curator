//lets check if session storage existsm this meaning null means it doesnt
if(sessionStorage.getItem("curatorId") === null){
  //if session storage doesn't exist, let's check for a token.
  if(localStorage.getItem("token")!== null){
    //well call a post route for tokens here
    $.ajax({
      type: "POST",
      url: "/api/tokenLogin",
      data: {
        token: localStorage.getItem("token")
      }
    }).then(function(data){
      //if token checks out, we'll store the data into session storage.
      sessionStorage.setItem("curatorId",data.id);
      sessionStorage.setItem("curatorName",data.username);
    });
  }
  //if it equals null nothing happens, because you need to login.
}
else{
  $(".login-only").show();
}
//capture login info.
$("#login").on("submit",function(event){
  event.preventDefault();
  let username = $("#inputUsername").val();
  let password = $("#inputPassword").val();
  let token = localStorage.getItem("token");
  // i need to then post this data onto
  $.ajax({
    type: "POST",
    url: "/api/login",
    data: {
    username: username,
    password: password,
    token: token}
  }).then(function(data){
    if(data === "womp"){
      console.log("Bad password");
    }
    else if(data === "womp2"){
      console.log("User not found!");
    }
    else {
      sessionStorage.setItem("curatorId",data.id);
      sessionStorage.setItem("curatorName",data.username);
      localStorage.setItem("token",data.token);
      $(".login-only").show();
    }
    $("#log-sign-modal").modal("toggle");
  });
});

//logout functionality
$("#logout").on("click",function(){
  //clears out sessionStorage and localStorage
  sessionStorage.clear();
  localStorage.clear();
  $("#profileModal").modal("toggle");
  $(".login-only").hide();
});
