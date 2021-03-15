require("dotenv").config();
const express = require("express");
const router = express.Router();
const burger = require("../models/burger");
//const orm = require("./");
// const db = require("../config/connection.js")(
//   process.env.DB_HOST,
//   process.env.DB_PASS
// );
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let brgrObject = {
      burger_data: data,
    };
    console.log(brgrObject);
    res.render("index", brgrObject);
  });
});
router.post("/burgers/create", (req, res) => {
  let newBurger = req.body.burger_name;
  console.log(newBurger);
  burger.insertOne(newBurger, (result) => {
    // Send back the ID of the new quote
    //res.json({ id: result.insertId });
    location.reload();
  });
});
module.exports = router;
