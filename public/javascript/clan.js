$("#groupAddRestuarant").on("click",function(){
  $("#clanAdd").modal("show");
});

$("#restSearchButt").on("click",function(){
  let term = $("#restSearch").val();
  console.log(term);
});
