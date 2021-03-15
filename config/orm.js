// const db = require("./connection");

// function selectAll(cb) {
//   let query = `SELECT * FROM burgers;`;
//   return db.query(query, (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       cb(res);
//     }
//   });
// }

// function insertOne(data, cb) {
//   let burger = data;
//   let query = `INSERT INTO burgers SET burger_name="${burger}"`;
//   return db.query(query, (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       cb(res);
//     }
//   });
// }

// function updateOne() {}

// module.exports = { selectAll, insertOne, updateOne };
var connection = require("./connection");
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }
  return arr.toString();
}
module.exports = {
  selectAll: function (tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);
    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // update(table, objColVals, condition, cb) {
  //     let queryString = `UPDATE ${table}`;
  //     queryString += ' SET ';
  //     queryString += objToSql(objColVals);
  //     queryString += ' WHERE ';
  //     queryString += condition;
  //     console.log(queryString);
  //     connection.query(queryString, (err, result) => {
  //       if (err) {
  //         throw err;
  //       }
  //       cb(result);
  //     });
  //   },
  // insertOne: function(tableInput, burger_value, cb){
  //     const queryString = `INSERT ?? INTO ${tableInput} SELECT burger_name FROM burger_db `;
  //     connection.query(queryString, [burger_value], (err, result) => {
  //         if (err) throw err;
  //         cb(result);
  //     })
  // },
  // udpateOne: function(tableInput, burger_id, cb){
  //     const queryString = `UPDATE ${tableInput} SET devoured = true WHERE id = ${burger_id}`;
  //     connection.query(queryString, (err, result) => {
  //         if (err) throw err;
  //         cb(result);
  //     })
  // }
  update: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};
