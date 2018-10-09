

INSERT INTO Users
    (username, password, createdAt, updatedAt)
VALUES
    ("WHOAhilary", "password10", NOW(), NOW()),
    ("why2okay", "password11", NOW(), NOW()),
    ("pistachioNUT", "password12", NOW(), NOW()),
    ("jaxNEWTON", "password13", NOW(), NOW()),
    ("STARaubrey", "password14", NOW(), NOW()),
    ("sparkles", "password15", NOW(), NOW()),
    ("anonymous", "password16", NOW(), NOW()),
    ("crunk", "password17", NOW(), NOW()),
    ("THATceleste", "password18", NOW(), NOW()),
    ("saiyuriMIA", "password19", NOW(), NOW()),
    ("svenMEISTER", "password20", NOW(), NOW()),
    ("dooDOO", "password21", NOW(), NOW()),
    ("tonkaFLO", "password22", NOW(), NOW()),
    ("SIZZLEcrack", "password23", NOW(), NOW()),
    ("JEFFREY", "password24", NOW(), NOW()),
    ("thomasTOM", "password25", NOW(), NOW()),
    ("DATfuu", "password26", NOW(), NOW()),
    ("theBEAST", "password27", NOW(), NOW()),
    ("wobblerMAN", "password28", NOW(), NOW()),
    ("cloudPUFF", "password29", NOW(), NOW());

INSERT INTO Clans
    (name, location, isPublic, hasPermission, createdAt, updatedAt)
VALUES
    ("Bo Janglers", "los angeles", true, true, NOW(), NOW()),
    ("Rooftop Hussies", "chicago", true, true, NOW(), NOW()),
    ("Flapjack Fireballs", "portland", true, true, NOW(), NOW()),
    ("THEM", "new york", true, true, NOW(), NOW());

INSERT INTO Restaurants
    (name, imageLink, address, yelpId, createdAt, updatedAt)
VALUES
    (
        "The Flame Broiler", 
        "https://cdn.dribbble.com/users/2125/screenshots/2475676/fb.png", 
        "10948 Weyburn Ave, Los Angeles, CA 90024", 
        "YrVwUbhaMBU0vZqWQd2RQA",
        NOW(),
        NOW()
    ),
    (
        "Yogurtland", 
        "https://www.yogurt-land.com/img/logo-yogurtland-tagline-large.png", 
        "10911 Lindbrook Dr, Los Angeles, CA 90024", 
        "NxmRPUDi2UGnj6moH0mKAg",
        NOW(),
        NOW()
    ),
    (
        "California Chicken Cafe", 
        "https://pbs.twimg.com/profile_images/661335947628314625/AolmRzlI_400x400.jpg", 
        "2401 Wilshire Blvd, Santa Monica, CA 90403", 
        "fT5h65Y91LeAn_epJEHgMg",
        NOW(),
        NOW()
    ),
    (
        "It's Boba Time", 
        "https://pbs.twimg.com/profile_images/558686583721697281/Pmpfbzcn_400x400.jpeg", 
        "10946 Weyburn Ave, Los Angeles, CA 90024", 
        "nTQiIzY-Ic1JkpP-RWULNA",
        NOW(),
        NOW()
    ),
    (
        "Which Wich", 
        "https://c1.staticflickr.com/7/6178/6215568756_32406fb9a4_b.jpg", 
        "2212 Sawtelle Blvd, Los Angeles, CA 90064", 
        "d3b3w1zjoGrusx7bdDPT7w",
        NOW(),
        NOW()
    ),
    (
        "Mastro's Steakhouse", 
        "https://www.americascuisine.com/siteImages/arizona/phoenix/MastrosLogo.png", 
        "18412 CA-1, Malibu, CA 90265", 
        "FybsCSPeMj0r8Y5EQYvTrA",
        NOW(),
        NOW()
    ),
    (
        "Erewhon", 
        "https://pbs.twimg.com/profile_images/875922432883703808/zOLn_rdH_400x400.jpg", 
        "585 Venice Blvd, Venice, CA 90291", 
        "wyYWUm2SxW2epQTc7ntHmw",
        NOW(),
        NOW()
    ),
    (
        "Chick-Fil-A", 
        "http://encinitaschamber.com/wp-content/uploads/2016/10/Chick_fil_a_logo.jpg", 
        "6400 Fallbrook Ave, West Hills, CA 91307", 
        "ln7qviCnCc-M_ZAWpS41qg",
        NOW(),
        NOW()
    ),
    (
        "In N Out", 
        "https://s3-media3.fl.yelpcdn.com/bphoto/_gBFqGZH08c4Xbo8Vf5PGg/ls.jpg", 
        "922 Gayley Ave, Los Angeles, CA 90024", 
        "tIIof6-zqlgxImFNDEIj9g",
        NOW(),
        NOW()
    ),
    (
        "Chipotle", 
        "https://www.strongholdcybersecurity.com/wp-content/uploads/2017/05/chipotle-credit-card-breach.png", 
        "1077 Broxton Ave, Los Angeles, CA 90024", 
        "JtQI62zBQWmXOIUT2_RoIg",
        NOW(),
        NOW()
    );

INSERT INTO Memberships
    (isAdmin, isMember, userId, clanId, createdAt, updatedAt)
VALUES
    (true, true, 1, 1, NOW(), NOW()),
    (false, true, 2, 1, NOW(), NOW()),
    (false, true, 3, 1, NOW(), NOW()),
    (false, true, 4, 1, NOW(), NOW()),
    (false, false, 5, 1, NOW(), NOW()),
    (true, true, 6, 2, NOW(), NOW()),
    (false, true, 7, 2, NOW(), NOW()),
    (false, true, 8, 2, NOW(), NOW()),
    (false, true, 9, 2, NOW(), NOW()),
    (false, false, 10, 2, NOW(), NOW()),
    (true, true, 11, 3, NOW(), NOW()),
    (false, true, 12, 3, NOW(), NOW()),
    (false, true, 13, 3, NOW(), NOW()),
    (false, true, 14, 3, NOW(), NOW()),
    (false, false, 15, 3, NOW(), NOW()),
    (true, true, 16, 4, NOW(), NOW()),
    (false, true, 17, 4, NOW(), NOW()),
    (false, true, 18, 4, NOW(), NOW()),
    (false, true, 19, 4, NOW(), NOW()),
    (false, false, 20, 4, NOW(), NOW());

INSERT INTO Ratings
    (rating, comment, userId, clanId, restaurantId, createdAt, updatedAt)
VALUES
    (4, "Shit is baller!", 1, 1, 1, NOW(), NOW()),
    (3, "Not too shabby.", 3, 1, 2, NOW(), NOW()),
    (4, "Salty and sweet, my dudes.", 7, 2, 5, NOW(), NOW()),
    (2, "Thought I was gonna die...", 9, 2, 3, NOW(), NOW()),
    (5, "So superb, my face melted!", 14, 3, 1, NOW(), NOW()),
    (3, "Liked it.", 2, 1, 4, NOW(), NOW()),
    (4, "Radical flavor on my buds.", 16, 4, 2, NOW(), NOW()),
    (4, "Pretty much owned it.", 19, 4, 6, NOW(), NOW()),
    (2, "Sooooo funky.", 2, 1, 7, NOW(), NOW()),
    (1, "Yuck...", 1, 1, 4, NOW(), NOW()),
    (3, "Could be better.", 4, 1, 1, NOW(), NOW()),
    (4, "Happy tum-tum!", 18, 4, 5, NOW(), NOW()),
    (5, "Uber fantastic, hombres!", 7, 2, 8, NOW(), NOW()),
    (5, "Like choclate sauce on ice cream, boss.", 8, 2, 7, NOW(), NOW()),
    (4, "Gnarly goodness!", 11, 3, 4, NOW(), NOW()),
    (2, "Below par.", 19, 4, 8, NOW(), NOW()),
    (2, "Not a big fan.", 4, 1, 3, NOW(), NOW()),
    (3, "Pretty good, kind of bad.", 3, 1, 9, NOW(), NOW()),
    (1, "Medic, medic!", 17, 4, 1, NOW(), NOW()),
    (4, "Groovy food, if I may say so.", 2, 1, 10, NOW(), NOW());

/**
 * DESCRIBE Memberships;
 * DESCRIBE Clans;
 * DESCRIBE Ratings;
 * DESCRIBE Restaurants;
 * DESCRIBE Users;
 */

/**
 * SELECT * FROM Clans;
 * SELECT * FROM Ratings;
 * SELECT * FROM Memberships;
 * SELECT * FROM Restaurants;
 * SELECT * FROM Users;
 */
