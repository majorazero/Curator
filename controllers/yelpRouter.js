const request = require("request");
module.exports = function (app) {

  /**
  * This route handles call to the yelp api and is based on the location and a search term which will need to be included in the end points.
  */
  app.get("/api/yelp/:location/:term", function (req, res) {
    const url = `https://api.yelp.com/v3/businesses/search?location=${encodeURI(req.params.location)}&term=${encodeURI(req.params.term)}`;
    request(
      url, 
      {
        headers: {
          Authorization: "Bearer g9EeN1YvpMFGmbPjwKqrAVIVoCCCCK0g-uyPyF9nJigZOIKQpJYJa2S3FOUhlJ9Y6cnJszqMSRFjwrobfelVeALnWAHR1uBlC2L9fVkWZh0-sfqrvRZYjecDMWGRW3Yx"
        }
      }, 
      function (err, response, body) {
        if (!err) {
          console.log(body);
          // we'll need id (to not repeat entries), name, address, price, img-link
          res.status(200).json(JSON.parse(body));
        } else {
          res.status(404).json(err);
        }
      }
    );
  });
};
