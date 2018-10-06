const db = require("../models");
const crypto = require("crypto");

module.exports = function(app){
  ////////////////////////////////////
  //////Read Routes
  ///////////////////////////////////



  ////////////////////////////////////
  //////Create Routes
  ///////////////////////////////////
  app.post("/api/tokenLogin",function(req,res){
    db.User.findOne({
      where:{
        token: req.body.token
      }
    }).then(function(data){
      if (data !== null){
        res.json(data.dataValues);
      }
      else {
        //we didn't
        res.json("No matching token.");
      }
    });
  });
  app.post("/api/login",function(req,res){
    db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(user){
      if(user === null){
        //sends back user dne as womp2 response
        res.json("womp2")
      }
      else{
        if(user.dataValues.password === req.body.password){
          console.log("Yep!");
          //if password matches, we'll make a token, by encryption
          //tokens are uniquely generated based on user name and password
          let mykey = crypto.createCipher("aes-128-cbc",req.body.username);
          let token = mykey.update(req.body.password,'utf8','hex');
          token += mykey.final('hex');
          //saves token
          db.User.update({
            token: token
          },{
            where: {
              username: req.body.username
            }
          }).then(function(data){
            //sends token back to front end.
            res.json({token: token, id: user.dataValues.id, username: user.dataValues.username});
          });
        }
        else {
          //sends bad password back as a womp response
          res.json("womp");
        }
      }
    });
  });

  app.post("/api/newUser",function(req,res){
    console.log(req.body);
    //we need to check if the user exists already.
    db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(function(data){
      //if we found someone
      if(data !== null){
        res.json("Username already used.");
      }
      else {
        //we'll build our user
        db.User.create({
          username: req.body.username,
          password: req.body.password
        }).then(function(createRes){
          res.end();
        }).catch(err => res.status(404).json(err));
      }
    })
  });
  ////////////////////////////////////
  //////Update Routes
  ///////////////////////////////////
  app.put("/api/updateUserPass",function(req,res){
    db.User.update({
      password: req.body.password
    },{
      where: {
      username: req.body.username
      }
    }).then(function(){
      res.json("Password updated!");
    });
  });
  ////////////////////////////////////
  //////Destroy Routes
  ///////////////////////////////////
  app.delete("/api/deleteUser",function(req,res){
    db.User.destroy({
      where:{
        id: req.body.id
      }
    }).then(function(){
      res.json("User destroyed.")
    });
  });
};
