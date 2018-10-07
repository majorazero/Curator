const db = require("../models");

module.exports = function(app){
  app.get("/",function(req,res){
    // console.log(localStorage.getItem("token"));
    // db.Clan.findAll({
    //   where:{
    //     isPublic: true
    //   }
    // }).then(function(){
    //
    // });
    res.render("index",{});
  });
};
