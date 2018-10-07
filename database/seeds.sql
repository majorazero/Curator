

INSERT INTO Users
    (username, password)
VALUES
    ("WHOAhilary", "password10"),
    ("why2okay", "password11"),
    ("pistachioNUT", "password12"),
    ("jaxNEWTON", "password13"),
    ("STARaubrey", "password14"),
    ("sparkles", "password15"),
    ("anonymous", "password16"),
    ("crunk", "password17"),
    ("THATceleste", "password18"),
    ("saiyuriMIA", "password19"),
    ("svenMEISTER", "password20"),
    ("dooDOO", "password21"),
    ("tonkaFLO", "password22"),
    ("SIZZLEcrack", "password23"),
    ("JEFFREY", "password24"),
    ("thomasTOM", "password25"),
    ("DATfuu", "password26"),
    ("theBEAST", "password27"),
    ("wobblerMAN", "password28"),
    ("cloudPUFF", "password29");

INSERT INTO Clans
    (name, location, isPublic, hasPermission)
VALUES
    ("Bo Janglers", "los angeles", true, true),
    ("Rooftop Hussies", "chicago", true, true),
    ("Flapjack Fireballs", "portland", true, true),
    ("THEM", "new york", true, true);

INSERT INTO Restaurants
    (name, imageLink, address, yelpId)
VALUES
    (
        "The Flame Broiler", 
        "https://cdn.dribbble.com/users/2125/screenshots/2475676/fb.png", 
        "10948 Weyburn Ave, Los Angeles, CA 90024", 
        "YrVwUbhaMBU0vZqWQd2RQA"
    ),
    (
        "Yogurtland", 
        "https://www.yogurt-land.com/img/logo-yogurtland-tagline-large.png", 
        "10911 Lindbrook Dr, Los Angeles, CA 90024", 
        "NxmRPUDi2UGnj6moH0mKAg"
    ),
    (
        "California Chicken Cafe", 
        "https://pbs.twimg.com/profile_images/661335947628314625/AolmRzlI_400x400.jpg", 
        "2401 Wilshire Blvd, Santa Monica, CA 90403", 
        "fT5h65Y91LeAn_epJEHgMg"
    ),
    (
        "It's Boba Time", 
        "https://pbs.twimg.com/profile_images/558686583721697281/Pmpfbzcn_400x400.jpeg", 
        "10946 Weyburn Ave, Los Angeles, CA 90024", 
        "nTQiIzY-Ic1JkpP-RWULNA"
    ),
    (
        "Which Wich", 
        "https://c1.staticflickr.com/7/6178/6215568756_32406fb9a4_b.jpg", 
        "2212 Sawtelle Blvd, Los Angeles, CA 90064", 
        "d3b3w1zjoGrusx7bdDPT7w"
    ),
    (
        "Mastro's Steakhouse", 
        "https://www.americascuisine.com/siteImages/arizona/phoenix/MastrosLogo.png", 
        "18412 CA-1, Malibu, CA 90265", 
        "FybsCSPeMj0r8Y5EQYvTrA"
    ),
    (
        "Erewhon", 
        "https://pbs.twimg.com/profile_images/875922432883703808/zOLn_rdH_400x400.jpg", 
        "585 Venice Blvd, Venice, CA 90291", 
        "wyYWUm2SxW2epQTc7ntHmw"
    ),
    (
        "Chick-Fil-A", 
        "http://encinitaschamber.com/wp-content/uploads/2016/10/Chick_fil_a_logo.jpg", 
        "6400 Fallbrook Ave, West Hills, CA 91307", 
        "ln7qviCnCc-M_ZAWpS41qg"
    ),
    (
        "In N Out", 
        "https://s3-media3.fl.yelpcdn.com/bphoto/_gBFqGZH08c4Xbo8Vf5PGg/ls.jpg", 
        "922 Gayley Ave, Los Angeles, CA 90024", 
        "tIIof6-zqlgxImFNDEIj9g"
    ),
    (
        "Chipotle", 
        "https://www.strongholdcybersecurity.com/wp-content/uploads/2017/05/chipotle-credit-card-breach.png", 
        "1077 Broxton Ave, Los Angeles, CA 90024", 
        "JtQI62zBQWmXOIUT2_RoIg"
    );

INSERT INTO Memberships
    (isAdmin, isMember, userId, clanId)
VALUES
    (true, true, 1, 1),
    (false, true, 2, 1),
    (false, true, 3, 1),
    (false, true, 4, 1),
    (false, false, 5, 1),
    (true, true, 6, 2),
    (false, true, 7, 2),
    (false, true, 8, 2),
    (false, true, 9, 2),
    (false, false, 10, 2),
    (true, true, 11, 3),
    (false, true, 12, 3),
    (false, true, 13, 3),
    (false, true, 14, 3),
    (false, false, 15, 3),
    (true, true, 16, 4),
    (false, true, 17, 4),
    (false, true, 18, 4),
    (false, true, 19, 4),
    (false, false, 20, 4);

INSERT INTO Ratings
    (rating, comment, userId, clanId, restaurantId)
VALUES
    (4, "Shit is baller!", 1, 1, 1),
    (3, "Not too shabby.", 3, 1, 2),
    (4, "Salty and sweet, my dudes.", 7, 2, 5),
    (2, "Thought I was gonna die...", 9, 2, 3),
    (5, "So superb, my face melted!", 14, 3, 1),
    (3, "Liked it.", 2, 1, 4),
    (4, "Radical flavor on my buds.", 16, 4, 2),
    (4, "Pretty much owned it.", 19, 4, 6),
    (2, "Sooooo funky.", 2, 1, 7),
    (1, "Yuck...", 1, 1, 4),
    (3, "Could be better.", 4, 1, 1),
    (4, "Happy tum-tum!", 18, 4, 5),
    (5, "Uber fantastic, hombres!", 7, 2, 8),
    (5, "Like choclate sauce on ice cream, boss.", 8, 2, 7),
    (4, "Gnarly goodness!", 11, 3, 4),
    (2, "Below par.", 19, 4, 8),
    (2, "Not a big fan.", 4, 1, 3),
    (3, "Pretty good, kind of bad.", 3, 1, 9),
    (1, "Medic, medic!", 17, 4, 1),
    (4, "Groovy food, if I may say so.", 2, 1, 10);

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
