//require("dotenv").config();
//const moment = require("moment");
const orm = require("../config/orm");

const burger = {
  selectAll(cb) {
    orm.selectAll("burgers", (res) => cb(res));
  },
  // insertOne(data, cb) {
  //   orm.insertOne(data, (res) => cb(res));
  // },
  insertOne(burgerName, cb) {
    orm.insertOne(
      "burgers",
      ["burger_name", "devoured"],
      [burgerName, false],
      cb
    );
  },
  // createOne(data, cd){

  // }
};

module.exports = burger;
