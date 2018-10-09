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
db.Clan.create({
  name: "WINOS",
  location: "Beverly Hill",
  blurb: "Drink till we die.",
  isPublic: true
});
db.Clan.create({
  name: "Spicy Food Cool Kids",
  location: "San Gabriel",
  blurb: "We like spicy food.",
  isPublic: true
});
db.Clan.create({
  name: "Boba Bros",
  location: "LA",
  blurb: "We like boba, in more ways than one.",
  isPublic: true
});
db.Clan.create({
  name: "dine'n douche",
  location: "Alhambra",
  blurb: "I'm not sure why we named ourselves this.",
  isPublic: true
});
db.Clan.create({
  name: "KKK Kitchen Club",
  location: "Kingston",
  blurb: "For racist assholes only.",
  isPublic: false
});
db.User.create({
  username: "dummy",
  password: "dummy"
});
db.User.create({
  username: "dummy2",
  password: "dummy"
});
db.Membership.create({
  clanId: 2,
  userId: 1,
  isMember: true
});
db.Membership.create({
  clanId: 6,
  userId: 1
});
db.Membership.create({
  clanId: 3,
  userId: 1,
  isMember: true,
  isAdmin: true
});
db.Membership.create({
  clanId: 7,
  userId: 1
});
db.Restaurant.create({
  name: "Hot Dog Lady",
  imageLink: "https://s3-media4.fl.yelpcdn.com/bphoto/QbZ1LQkGm6xP9VNCWwxU2g/o.jpg",
  address: "W Sunset Blvd And Sutherland St, Los Angeles, CA 90026",
  yelpId: "M97EK0ga4dT9ldwHT3_i9Q",
  price: "$"
});
db.Restaurant.create({
  name: "Wurstküche",
  imageLink: "https://s3-media1.fl.yelpcdn.com/bphoto/gWIbvLDR1Y6yfTGTzXp_lw/o.jpg",
  address: "800 E 3rd St, Los Angeles, CA 90013",
  yelpId: "KQBGm5G8IDkE8LeNY45mbA",
  price: "$"
});
db.Restaurant.create({
  name: "Dirt Dog",
  imageLink: "https://s3-media1.fl.yelpcdn.com/bphoto/K8HGdtvSCxAxQYLg65e3Vw/o.jpg",
  address: "2528 S Figueroa St, Los Angeles, CA 90007",
  yelpId: "0z23Jk7U_MpvtqKINPL2fA",
  price: "$"
});
db.Restaurant.create({
  name: "Pink's Hot Dogs",
  imageLink: "https://s3-media2.fl.yelpcdn.com/bphoto/zIUyCAVVSB8zJvFI23uTFQ/o.jpg",
  address: "709 N La Brea Ave, Los Angeles, CA 90038",
  yelpId: "drtTr9Mxv4mv_AjZ4gvq5A",
  price: "$"
});
db.Restaurant.create({
  name: "Wurstküche",
  imageLink: "https://s3-media3.fl.yelpcdn.com/bphoto/XQo0xuY9RTAqhek6rXbAkw/o.jpg",
  address: "625 Lincoln Blvd, Los Angeles, CA 90291",
  yelpId: "rIv6gmAFTxNFgnxW2S7-iA",
  price: "$"
});

db.Rating.create({
  rating: 5,
  comment: "It's good.",
  userId: 1,
  clanId: 1,
  restaurantId: 1
});
db.Rating.create({
  rating: 2,
  comment: "It's good.",
  userId: 1,
  clanId: 1,
  restaurantId: 2
});
db.Rating.create({
  rating: 5,
  comment: "It's good.",
  userId: 1,
  clanId: 1,
  restaurantId: 3
});
db.Rating.create({
  rating: 4,
  comment: "It's good.",
  userId: 1,
  clanId: 1,
  restaurantId: 4
});
db.Rating.create({
  rating: 3,
  comment: "It's good.",
  userId: 1,
  clanId: 1,
  restaurantId: 5
});
db.Rating.create({
  rating: 2,
  comment: "It's bad.",
  userId: 2,
  clanId: 1,
  restaurantId: 1
});
