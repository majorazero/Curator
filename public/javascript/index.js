/**
* Modal event handler for the login button.
*/
$("#navbar-log-sign").on("click", function () {
  if (sessionStorage.getItem("curatorId") !== null) {
    let profileBody = $("#profileBody");
    profileBody.empty();
    let imgDiv = $("<div>").append("<img id='profileImageModal' class='img-fluid' src='/images/dummy-icon.png' />");
    let userNameDiv = $("<div>").text(sessionStorage.curatorName).attr("id", "profileUsernameModal");
    profileBody.append(imgDiv).append(userNameDiv);
    $("#profileModal").modal("show");
  }
  else {
    $("#loginPassWarning").hide();
    $("#loginUserWarning").hide();
    $('#log-sign-modal').modal('show');
  }
});


//Back button from expand to firstLayer modal
$("#backto-scroll-modal").on("click", function () {
  $('#expanded-modal').modal('hide');
  firstLayerClick(currTarget);
  $('#firstLayerModal').modal('show');
});

$('.scrollmenu').mousewheel(function (e, delta) {
  this.scrollLeft -= (delta * 1);
  e.preventDefault();
});

/**
* Modal event handler for the flag button.
*/
$("#flagModButts").on("click", function () {
  $("#exampleModalCenter").modal("hide");
  $("#flagModal").modal("show");
});
/**
* Modal event handler for the nav invite code button.
*/
$("#inviteCode").on("click", function () {
  $("#inviteCodeModal").modal("show");
});

$("#exit-modal").on("click",function(){
  $("#firstLayerModal").modal("hide");
});


//New group modal functionality
$("#create-new-group").on("click", function () {
  $("#new-group-modal").modal("show");
  $("#groupnameWarningMessage").hide();
  $("#locationWarningMessage").hide();
  $("#clanImageWarningMessage").hide();
  $("#groupdescriptionWarningMessage").hide();

});

//New group submit button + functionality
$("#new-group-submit").on("click", function (event) {
  event.preventDefault();
  console.log("clicked");

  var newGroup = {
    name: $("#group-input").val().trim(),
    location: $("#location-input").val().trim(),
    isPublic: $("#pub-priv-input").val().trim(),
    clanImage: $("#clan-img-input").val().trim(),
    groupDescription: $("#groupdescription-input").val().trim()
  };
  console.log(newGroup.groupDescription)

  if (newGroup.name && newGroup.location && newGroup.clanImage && newGroup.groupDescription) {
    $("#group-input").val(""),
    $("#location-input").val(""),
    $("#clan-img-input").val(""),
    $("#groupdescription-input").val(""),

    $.post("/api/clans/new", newGroup)
      .then(function (clanid) {
        var addMember = {
          isAdmin: true,
          isMember: true,
          userId: sessionStorage.getItem("curatorId"),
          clanId: clanid,
          clanImage: clanid
        }
        console.log(addMember)
        $.post("/api/memberships", addMember)
          .then(function (data) {
            console.log(data);
            window.location.href = '/yourGroups/' + sessionStorage.getItem("curatorId");
          })
      });
  }
  else {

    if (!newGroup.name) {
      $("#groupnameWarningMessage").show();
    }
    if (!newGroup.location) {
      $("#locationWarningMessage").show();
    }
    if (!newGroup.clanImage) {
      $("#clanImageWarningMessage").show();
    }
    if (!newGroup.groupDescription) {
      $("#groupdescriptionWarningMessage").show();
    }
  }

});
