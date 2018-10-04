/**
 * Food Curator Server
 */

// Dependencies
// ----------------------------------------

const bodyParser = require("body-parser"),
express = require("express"),
hbs = require("express-handlebars"),
path = require("path");

// Components
// ----------------------------------------

// Server port
const PORT = process.env.PORT || 3000,
// Express app
app = express(),
// Url encoded parser
urlEncodedParser = bodyParser.urlencoded({extended: true}),
// Json parser
jsonParser = bodyParser.json();

// Setup
// ----------------------------------------

// Set public directory
app.use(express.static(path.join(__dirname, "public")));

// User parsers
app.use(urlEncodedParser);
app.use(jsonParser);

// Set view engine
app.engine('hbs', hbs({defaultLayout: "main", extname: ".hbs"}));
app.set('view engine', 'hbs');

// Routes
// ----------------------------------------

// TODO: Replace router with required controller routes -->
require("./controllers/indexRouter.js")(app);
// app.use(router);

// Listen
// ----------------------------------------

app.listen(PORT, () => {
    console.log(`Food Curator server running on port ${PORT}`);
});
