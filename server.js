const express = require("express");
require("dotenv").config();
// module to connect to database (db-name, db-password)
const exphbs = require("express-handlebars");
const db = require("./config/connection.js");

const app = express();
const PORT = process.env.PORT || 8080;
// for POSTING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
