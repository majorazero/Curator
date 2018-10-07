const db = require("../models");

module.exports = function(app){
  app.get("/",function(req,res){
    // console.log(localStorage.getItem("token"));
    db.Clan.findAll({
      where:{
        isPublic: true
      }
    }).then(function(data){
      //each row can only have up to 4 clans
      let byFour = [];
      //the clans
      let clans = [];
      for(let i = 0; i < data.length; i++){
        clans.push(data[i].dataValues);
        if (clans.length === 4){
          //if clans reach 4, well store it in byFour, then empty clans
          byFour.push({clans});
          clans = [];
        }
        else if(i === data.length-1){
          byFour.push({clans});
        }
      }
      console.log(byFour);
      res.render("index",{byFour});
    });
  });
};
