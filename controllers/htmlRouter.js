const db = require("../models");
const helper = require("../helper/exploreHelper.js");

module.exports = function (app) {
  //Find all clans where isPublic is true
  app.get("/",function(req,res){
    db.Clan.findAll({
      where:{
        isPublic: true
      }
    }).then(function(data){
      console.log(data)
      let byFour = helper.exploreDataFormatter(data);
      res.render("index",{byFour});
    });
  });

  app.get("/yourFollows/:id", function (req, res) {
    db.Membership.findAll({
      where: {
        userId: req.params.id,
        isMember: false
      },
      include: [
        { model: db.Clan }
      ]
    }).then(function (data) {
      console.log(data);
      let byFour = helper.exploreDataFormatter(data, "Clan");
      res.render("index", { byFour: byFour });
      //res.json({byFour});
    });
  });

  app.get("/yourGroups/:id", function (req, res) {
    db.Membership.findAll({
      where: {
        userId: req.params.id,
        isMember: true
      },
      include: [
        { model: db.Clan }
      ]
    }).then(function (data) {
      let byFour = helper.exploreDataFormatter(data, "Clan");
      res.render("index", { byFour: byFour });
    });
  });
};
