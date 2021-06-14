var express = require('express');
var router = express.Router();
var db=require('./db');


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port:"3306",
    password: "123456",
    database: "work"
});
connection.connect();

router.get('/:id', function(req, res, next) {
    db.query("select * from detail_add where id="+req.params.id+"",(err,result)=>{
      res.render('alter', { data:result});
    })
   
  });

router.post('/',(req,res)=>{

    db.queryParam("update detail_add set title=?,subtitle=?,detail=?,photo=? where id=?",[req.body.title,req.body.subtitle,req.body.detail,req.body.photo,req.body.id],(err,result)=>{
      if(err){
        console.log(err);
      }else{
        res.redirect('/add');
    }
    });
  })
  

  module.exports = router