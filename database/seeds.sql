
DESCRIBE Memberships;
DESCRIBE Clans;
DESCRIBE Ratings;
DESCRIBE Restaurants;
DESCRIBE Users;

INSERT INTO Memberships (isAdmin, isMember, userId, clanId) VALUES (value1, value2, value3, value4);

INSERT INTO Clans (name, location, isPublic, hasPermission) VALUES (value1, value2, value3, value4);

INSERT INTO Ratings (rating, comment, userId, clanId, restaurantId) VALUES (value1, value2, value3, value4, value5);

INSERT INTO Restaurants (rating, comment, userId, clanId, restaurantId) VALUES (value1, value2, value3, value4, value5);

INSERT INTO Users (username, password) VALUES (value1, value2);



SELECT * FROM Memberships;
SELECT * FROM Clans;
SELECT * FROM Ratings;
SELECT * FROM Restaurants;
SELECT * FROM Users;
