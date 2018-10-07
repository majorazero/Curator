let db = require("./models");

db.Clan.create({
  name: "LA Hotdog Club",
  location: "LA",
  isPublic: true
});
db.Clan.create({
  name: "SGV Beer Crawl",
  location: "San Gabriel",
  isPublic: true
});
