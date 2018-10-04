const request = require("request");
module.exports = function(app){
  app.get("/api/yelp",function(req,res){
    request("https://api.yelp.com/v3/businesses/search?location=newyork&term=mcdonald",{
      headers : {
        Authorization: "Bearer g9EeN1YvpMFGmbPjwKqrAVIVoCCCCK0g-uyPyF9nJigZOIKQpJYJa2S3FOUhlJ9Y6cnJszqMSRFjwrobfelVeALnWAHR1uBlC2L9fVkWZh0-sfqrvRZYjecDMWGRW3Yx"
      }
    },function(error,response,body){
      console.log(body);
      //we'll need id (to not repeat entries), name, address, price, img-link
      res.json(JSON.parse(body));
    });
  });
};
