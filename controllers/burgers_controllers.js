require("dotenv").config();
const express = require("express");
const burger = require("../models/burger");
const orm = require("../models/orm");
const db = require("../config/connection.js")(
  process.env.DB_HOST,
  process.env.DB_PASS
);

function router(app) {}
module.exports = router;
