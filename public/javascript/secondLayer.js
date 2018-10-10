$("#expand-btn").on("click", function(){
  secondLayerList($(this));
});

function secondLayerList(target){
  //$("body").css("overflow", "hidden");
  $('#firstLayerModal').modal('hide');
  $("#expandedModalTitle").text(target.parent().attr("data-name"));
  $.ajax({
    url: "/api/ratings/groupRest",
    type: "POST",
    data: {
      clanId: target.parent().attr("data-id")
    }
  }).then(function(data){
    $("#expanded-scrollMenu").empty();
    if(data.length === 0){
      $("#expanded-scrollMenu").append("<img class='img-fluid' src='/images/noEntries.gif' />");
      $("#expanded-scrollMenu").append("<h2>Oops, no entries!</h2>");
    }
    else{
      //constructs scrollmenu for expanded
      let currRestId;
      let scoreSum = 0; //sum of ratings
      let ratingAmount = 0; //sum divided by this
      for(let i = 0; i < data.length; i++){

        if(currRestId !== data[i].restaurantId){
          if(currRestId !== undefined){
            secondScroll(data[i-1],scoreSum,ratingAmount);
          }
          currRestId = data[i].restaurantId;
          scoreSum = data[i].rating;
          ratingAmount = 1;
          if(i === data.length-1){
            secondScroll(data[i],scoreSum,ratingAmount);
          }
        }
        else {
          //lets just sum up the rating here
          scoreSum += data[i].rating;
          ratingAmount++;
        }
      }
    }
    $('#expanded-modal').modal('show');
  });
}

function secondScroll(data,scoreSum,ratingAmount){
  let outerWrapper = $("<div>").addClass("row group-rest-info");
  let restPortrait = $("<div>").addClass("col-sm-3 rest-img");
  $(restPortrait).append("<img src='"+data.Restaurant.imageLink+"' class='img-fluid' />");
  let infoCard = $("<div>").addClass("col-sm-7");
  $(infoCard).append("<div class='rest-name'>"+data.Restaurant.name+"</div>");
  $(infoCard).append("<div class='rest-address'>"+data.Restaurant.address+"</div>");
  if(data.Restaurant.price === null){
    $(infoCard).append("<div class='rest-price' >No earthly idea.</div>");
  }
  else {
    $(infoCard).append("<div class='rest-price' >"+data.Restaurant.price+"</div>");
  }
  //have to figure out how ratings work still
  let ratingCard = $("<div>").addClass("col-sm-2 rest-rating").append("<div>"+(scoreSum/ratingAmount).toFixed(2)+"</div>");

  $(outerWrapper).append(restPortrait);
  $(outerWrapper).append(infoCard);
  $(outerWrapper).append(ratingCard);
  $("#expanded-scrollMenu").append(outerWrapper);
}
