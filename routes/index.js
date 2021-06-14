var express = require('express');
var router = express.Router();
var db=require('./db');

var mysql =require('mysql');
var connection =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'work'
});
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("select * from detail_add",(err,result)=>{
    res.render('index', { data:result});
  })
 
});

module.exports = router;