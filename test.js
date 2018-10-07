let db = require("./models");

db.Clan.create({
  name: "LA Hotdog Club",
  location: "LA",
  blurb: "We enjoy eating hotdogs in LA. Sue us.",
  isPublic: true
});
db.Clan.create({
  name: "SGV Beer Crawl",
  location: "San Gabriel",
  blurb: "Alcolholics Anonymous can shove it.",
  isPublic: true
});

db.User.create({
  username: "dummy",
  password: "dummy"
});
