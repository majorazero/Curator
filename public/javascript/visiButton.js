

$("#visiButton").on("click",function(){
  if($(this).hasClass("fa-eye")){
    //we'll run an clan update
    updatePublic(false,$(this));
  }
  else{
    updatePublic(true,$(this));
  }
});

function updatePublic(pub,target){
  console.log(pub);
  $.ajax({
    type: "PUT",
    url: "/api/clans/"+sessionStorage.getItem("currentClan"),
    data: {
      name: sessionStorage.getItem("currentClanName"),
      location: sessionStorage.getItem("currentLoc"),
      isPublic: pub
    }
  }).then(function(){
    if(pub === false){
      target.removeClass("fa-eye");
      target.addClass("fa-eye-slash");
      currTarget.attr("data-public",false);
      console.log(currTarget.attr("data-public"));
    }
    else{
      target.removeClass("fa-eye-slash");
      target.addClass("fa-eye");
      currTarget.attr("data-public",true);
      console.log(currTarget.attr("data-public"));
    }
  });
}
