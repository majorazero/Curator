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
  });
  //send a post to the routers... encrpytion belongs in userRouter
  console.log(username,password);
  console.log(token);
});
