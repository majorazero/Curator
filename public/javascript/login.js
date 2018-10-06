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
      if(data === "No matching token."){
        //if we want to do something in case this happens you can put it here, but as of now, nothing happens is adequate
      }
      else{
        //if token checks out, we'll store the data into session storage.
        sessionStorage.setItem("curatorId",data.id);
        sessionStorage.setItem("curatorName",data.username);
        $(".login-only").show();
      }
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

//register transition
$("#toRegisterButton").on("click",function(){
  $("#log-sign-modal").modal("toggle");
  $("#registerModal").modal("toggle");
  $("#usernameWarningMessage").hide();
});

$("#registerButton").on("click",function(){
  let username = $("#regUsername").val();
  let password = $("#regPass").val();
  $.ajax({
    type: "POST",
    url: "/api/newUser",
    data: {
      username: username,
      password: password
    }
  }).then(function(response){
    if(response === "Username already used."){
      $("#regUsername").val("");
      $("#usernameWarningMessage").show();
    }
    else {
      //its been made. so we'll just ask them to log in so we can make them a key.
      $("#registerModal").modal("toggle");
      $("#registerSuccess").modal("toggle");
    }
  });
});
