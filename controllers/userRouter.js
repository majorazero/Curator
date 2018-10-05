const db = require("../models");

module.exports = function(app){
  ////////////////////////////////////
  //////Read Routes
  ///////////////////////////////////
  //get user by userName
  app.get("/api/user/:username/:password",function(req,res){
    console.log(req.body);
    db.User.findOne({
      where: {
        username: req.params.username
      }
    }).then(function(data){
      //should wrap this in a password check
      if (data === null){
        res.json("Oops, didn't exist.");
      }
      else {
        if(req.params.password === data.password){
          res.json(data);
        }
        else {
          res.json("Oops, bad password.");
        }  
      }
    });
  });
  ////////////////////////////////////
  //////Create Routes
  ///////////////////////////////////
  app.post("/api/newUser",function(req,res){
    db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then(function(){
      res.json("Made it!");
    });
  });
  ////////////////////////////////////
  //////Update Routes
  ///////////////////////////////////

  ////////////////////////////////////
  //////Destroy Routes
  ///////////////////////////////////

};
