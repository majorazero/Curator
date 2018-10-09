$("#invSub2").on("click",function(){
  let incCode = $("#invite-code").val();
  //make an ajax call to memberships to decrypt and possibly submit this
  $.ajax({
    type: "POST",
    url: "/api/memberships/inviteCode",
    data: {
      inviteCode: incCode,
      userId: sessionStorage.getItem("curatorId")
    }
  }).then(function(data){
    console.log(data);
    $("#inviteStatusMess").empty();
    $("#inviteStatusMess").text(data);
    $("#inviteStatus").modal("show");
    $("#inviteCodeModal").modal("hide");
  }).fail(function(){
    $("#inviteStatusMess").empty();
    $("#inviteStatusMess").text("Bad invite code!");
    $("#inviteStatus").modal("show");
    $("#inviteCodeModal").modal("hide");
  });
})
