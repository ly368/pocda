var express = require('express');
var router = express.Router();
var db=require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("select * from pocda_login",(err,result)=>{
    res.render('index', { data:result});
  })
 
});

module.exports = router;