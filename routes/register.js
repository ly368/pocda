let express=require('express');
let router=express.Router();
//let User=require('./bean/user');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port:"3306",
    password: "123456",
    database: "work"
});
connection.connect();


router.get('/',(req,res)=>{
    res.render('register');
});
router.post('/', (req, res) => {

  var insertSql = 'insert into pocda_login(Name,password) values(?,?)';
  connection.query(insertSql, [req.body.Name,req.body.password], function (err, result, fields) {
  
      if (err) {
          console.log('err', err);
          return;
      } else {
         
          res.redirect('/');
      }
  });
  });

module.exports = router ;