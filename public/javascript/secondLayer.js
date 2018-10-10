let currTarget2;

$("#expand-btn").on("click", function(){
  currTarget2 = $(this);
  secondLayerList($(this));
});

function secondLayerList(target){
  $('#firstLayerModal').modal('hide');
  $("#expandedModalTitle").text(target.parent().attr("data-name"));
  //re-show member/admin buttons
  $(".memberOnly").show();
  $(".adminOnly").show();
  //check to see if user is a member of this group
  $.ajax({
    url: "/api/memberships/clanUserIsMember",
    type: "POST",
    data: {
      userId: sessionStorage.getItem("curatorId"),
      clanId: sessionStorage.getItem("currentClan")
    }
  }).then(function(data2){
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
        if(data2.length !== 0){
          if(data2[0].isMember !== true){
            //enable member only buttons
            $(".memberOnly").hide();
          }
          if(data2[0].isAdmin !== true){
            //enable admin only buttons
            $(".adminOnly").hide();
          }
        }
        else {
          $(".memberOnly").hide();
          $(".adminOnly").hide();
        }
        $('#expanded-modal').modal('show');
      });

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


  $(outerWrapper).append(restPortrait);
  $(outerWrapper).append(infoCard);

  let ratingCard = $("<div>").addClass("col-sm-2 rest-rating");
  ratingCard.append("<div>"+(scoreSum/ratingAmount).toFixed(2)+"</div>");
  let commentIcon = $("<i>").addClass("memberOnly fa fa-lg fa-comments");
  commentIcon.attr("data-restimg",data.Restaurant.imageLink);
  commentIcon.attr("data-restname",data.Restaurant.name);
  commentIcon.attr("data-addr",data.Restaurant.address);
  commentIcon.attr("data-price",data.Restaurant.price);
  commentIcon.attr("data-restid",data.restaurantId);
  commentIcon.on("click",function(){
    //reset
    $("#rateEntriesModalHeader").empty();
    $("#rateEntries").empty();

    $("#rateEntriesModal").attr("data-restid",$(this).attr("data-restid"));

    let outerWrapper = $("<div>").addClass("row group-rest-info");
    let restPortrait = $("<div>").addClass("col-sm-3 rest-img");
    $(restPortrait).append("<img src='"+$(this).attr("data-restimg")+"' class='img-fluid' />");
    let infoCard = $("<div>").addClass("col-sm-7");
    $(infoCard).append("<div class='rest-name'>"+$(this).attr("data-restname")+"</div>");
    $(infoCard).append("<div class='rest-address'>"+$(this).attr("data-addr")+"</div>");
    if($(this).attr("data-price") === null){
      $(infoCard).append("<div class='rest-price' >No earthly idea.</div>");
    }
    else {
      $(infoCard).append("<div class='rest-price' >"+$(this).attr("data-price")+"</div>");
    }
    $(outerWrapper).append(restPortrait);
    $(outerWrapper).append(infoCard);
    $("#rateEntriesModalHeader").append(outerWrapper);
    //ajax call to summon ratings
    $.ajax({
      url: "/api/ratings/groupRestId",
      type: "POST",
      data: {
        clanId: sessionStorage.getItem("currentClan"),
        restId: $(this).attr("data-restid")
      }
    }).then(function(dataz){
      //load entries
      for(let i = 0; i < dataz.length; i++){
        let wrap = $("<div>");
        wrap.append('<div>Username: '+dataz[i].User.username+'</div>');
        wrap.append("<div>Rating: "+dataz[i].rating+"</div>");
        wrap.append("<div>Comment: "+dataz[i].comment+"</div>");
        $("#rateEntries").append(wrap);
      }

      $("#rateEntriesModalRate").val("");
      $("#rateEntriesModalComment").val("");
      $("#rateEntriesModalWarning").hide();
      $("#rateEntriesModal").modal("show");
      $("#expanded-modal").modal("hide");
    });
  });
  ratingCard.append(commentIcon);

  //admin only destroy button
  let destroyButton = $("<i>").addClass("adminOnly fa fa-lg fa-trash").attr("data-restid",data.restaurantId);
  destroyButton.on("click",function(){
    console.log($(this).attr("data-restid"));
    $.ajax({
      url: "/api/ratings/destroy/RestId",
      type: "DELETE",
      data: {
        restId: $(this).attr("data-restid"),
        clanId: sessionStorage.getItem("currentClan")
      }
    }).then(function(data){
      console.log(data);
      //refreshes
      secondLayerList(currTarget2);
    });
  });
  ratingCard.append(destroyButton);

  $(outerWrapper).append(ratingCard);
  $("#expanded-scrollMenu").append(outerWrapper);
}

$("#rateEntriesBackButt").on("click",function(){
  $("#rateEntriesModal").modal("hide");
  console.log(currTarget);
  secondLayerList(currTarget2);
});

$("#rateEntriesSubmitButt").on("click",function(){
  let rating = $("#rateEntriesModalRate").val();
  let comment = $("#rateEntriesModalComment").val();
  if (rating <= 5 && rating >=0){
    //score is valid let's submit this.
    //usersid, rating, comment
    $.ajax({
      url: "/api/ratings",
      type: "POST",
      data: {
        rating: rating,
        comment: comment,
        userId: sessionStorage.getItem("curatorId"),
        clanId: sessionStorage.getItem("currentClan"),
        restaurantId: $("#rateEntriesModal").attr("data-restid")
      }
    }).then(function(data){
      $("#rateEntriesModal").modal("hide");
      secondLayerList(currTarget2);
      //close this modal
      //open back secondlayer modal
    });
  }
  else {
    $("#rateEntriesModalWarning").show();
  }
});
