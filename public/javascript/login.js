//meaning session storage isn't empty
if(sessionStorage.length < 1){
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
      console.log(sessionStorage);
    });
  }
  //if it equals null nothing happens, because you need to login.
}
// //lets check if a session exists
// if(localStorage.getItem("session") !== null){
//
// }
// else {
//   //it doesn't
//   // check if localStorage is live.
//   if(localStorage.getItem("token") !== null){
//     $.ajax({
//       type: "POST",
//       url: "/api/tokenLogin",
//       data: {
//         token: localStorage.getItem("token")
//       }
//     }).then(function(){
//
//     });
//   }
// }

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
      console.log(data);
      sessionStorage.setItem("curatorId",data.id);
      localStorage.setItem("token",data.token);
      console.log(localStorage.getItem("token"));
      console.log(sessionStorage.getItem("curatorId"));
    }
  });
});
