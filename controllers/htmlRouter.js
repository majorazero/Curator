const db = require("../models");

module.exports = function(app){
  app.get("/",function(req,res){
    // console.log(localStorage.getItem("token"));
    db.Clan.findAll({
      where:{
        isPublic: true
      }
    }).then(function(data){
      let newProp = [];
      for(let i = 0; i < data.length; i++){
        newProp.push(data[i].dataValues);
      }
      res.render("index",{clans: newProp});
    });
  });
};
