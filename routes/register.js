const express = require('express');
var multer  = require('multer')
var upload = multer({ dest: '../uploads/' })

let router = express.Router();
const mysql = require('mysql');


const $mysql = require('../config/mysql');

let connection = mysql.createConnection($mysql.$mysql);
router.post('/register', async function (req, res) {
  // console.log(req.query);
  console.log(req.body);
  const $sql = `insert into userlist (username,password,cellphone,portrait,email,city,interest,introduce,qq) values ("${req.body.username}","${req.body.password}","${req.body.cellphone}","defaultAvatar.jpg","${req.body.email}","${req.body.city}","${req.body.interest}","${req.body.introduce}","${req.body.qq}");`
  await connection.query($sql, (err, results, fields) => {
    if(err){
      console.log(err);
    }
    res.send(results);
  });
});


module.exports =  router;
