let db = require("./models");

db.Clan.create({
  name: "LA Hotdog Club",
  location: "LA",
  blurb: "We enjoy eating hotdogs in LA. Sue us.",
  isPublic: true,
  clanImage: "https://foremangrillrecipes.com/wp-content/uploads/2013/05/featured-Foreman-Grill-Hot-Dogs.jpg"
});
db.Clan.create({
  name: "SGV Beer Crawl",
  location: "San Gabriel",
  blurb: "Alcolholics Anonymous can shove it.",
  isPublic: true,
  clanImage: "https://www.gannett-cdn.com/-mm-/89934f7b13e7717eb560f3babda84f20895abcd0/c=83-0-724-482/local/-/media/2018/07/17/DetroitFreeP/DetroitFreePress/636674313628993565-GettyImages-684133728.jpg?width=534&height=401&fit=crop"
});
db.Clan.create({
  name: "WINOS",
  location: "Beverly Hill",
  blurb: "Drink till we die.",
  isPublic: true,
  clanImage: "https://valenzanowine.com/wp-content/uploads/2015/11/bigstock-wine-glasses.jpg"
});
db.Clan.create({
  name: "Spicy Food Cool Kids",
  location: "San Gabriel",
  blurb: "We like spicy food.",
  isPublic: true,
  clanImage: "https://www.thespruceeats.com/thmb/QMSXFkdj29NsqgXcM8Bje4bxDtk=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Peppers-Sweet-Mix-579bb8773df78c3276657310.jpg"
});
db.Clan.create({
  name: "Boba Bros",
  location: "LA",
  blurb: "We like boba, in more ways than one.",
  isPublic: true,
  clanImage: "https://www.thelittleepicurean.com/wp-content/uploads/2018/08/boba-milk-tea-drink-.jpg"
});
db.Clan.create({
  name: "dine'n douche",
  location: "Alhambra",
  blurb: "I'm not sure why we named ourselves this.",
  isPublic: true,
  clanImage: "https://cdn.shopify.com/s/files/1/1592/5035/products/db01sm.jpg?v=1520723157"
});
db.Clan.create({
  name: "KKK Kitchen Club",
  location: "Kingston",
  blurb: "For racist assholes only.",
  isPublic: false,
  clanImage: "http://images.mid-day.com/images/2015/jan/08men-idiots.jpg"
});
db.User.create({
  username: "dummy",
  password: "dummy"
});
db.User.create({
  username: "dummy2",
  password: "dummy"
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
db.User.create({
  username: "dummy3",
  password: "dummy"
});
db.User.create({
  username: "dummy4",
  password: "dummy"
});
db.User.create({
  username: "dummy5",
  password: "dummy"
});
db.Membership.create({
  clanId: 2,
  userId: 2,
  isMember: true,
  isAdmin: true
});
db.Membership.create({
  clanId: 2,
  userId: 3,
  isMember: true
});
db.Membership.create({
  clanId: 2,
  userId: 4,
  isMember: true
});
db.Membership.create({
  clanId: 2,
  userId: 1,
  isMember: true
});
db.Membership.create({
  clanId: 4,
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
