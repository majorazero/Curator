//shares the actual thing
$("#shareButton").on("click",function(){
  console.log(sessionStorage.getItem("currentClan"));
  $.ajax({
    type: "POST",
    url: "/api/encrypt",
    data: {
      clanId: sessionStorage.getItem("currentClan")
    }
  }).then(function(data){
    $("#inviteCodeMess").empty();
    $("#inviteCodeMess").append("<div>"+data+"</div>");
    $("#expanded-modal").hide();
    $("#inviteCodeGenerateModal").modal("show");
  });
});

$("#inviteBack").on("click",function(){
  $("#inviteCodeGenerateModal").modal("hide");
  $("#expanded-modal").show();
});
