const express = require('express');
let router = express.Router();
const mysql = require('mysql');

const $mysql = {
  host     : 'localhost',
  user     : 'root',
  password : 'rootroot',
  database : 'vue-game'
};

let connection = mysql.createConnection($mysql);

router.get('/register',  function (req, res) {
  // const $sql = `insert into userlist (username, password, cellphone) values ()`
  // let $rs =
  console.log(req.query);
  res.send('getdata');
});

module.exports =  router;
