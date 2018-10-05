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
      localStorage.setItem("token",data);
      console.log(localStorage.getItem("token"));
    }
  });
});
