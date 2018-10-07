const db = require("../models");
const helper = require("../helper/exploreHelper.js");

module.exports = function(app){
  app.get("/",function(req,res){
    db.Clan.findAll({
      where:{
        isPublic: true
      }
    }).then(function(data){
      let byFour = helper.exploreDataFormatter(data);
      res.render("index",{byFour});
    });
  });

  app.post("/yourFollows",function(req,res){
    db.Membership.findAll({
      where: {
        userId: req.body.userId
      },
      include: [
        {model: db.Clan}
      ]
    }).then(function(data){
      console.log(data);
    });
  });
};
