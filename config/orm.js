const db = require("./connection");

function selectAll() {
  return db.query(`SELECT * FROM burgers;`);
}

function insertOne(data) {
  let query = `INSERT INTO burgers SET ?`;
  return db.query(query, data);
}

function updateOne() {}

module.exports = { selectAll, insertOne, updateOne };
