let express=require('express');
let router=express.Router();
let User=require('./bean/user');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port:"3306",
    password: "123456",
    database: "work"
});
connection.connect();

// 跳转注册页面
router.get('/',(req,res)=>{
    res.render('register');
});
router.post('/', (req, res) => {

  var insertSql = 'insert into pocda_lr(phonenumber,password,email) values(?,?,?)';
  connection.query(insertSql, [req.body.phonenumber,req.body.password,req.body.email], function (err, result, fields) {
  
      if (err) {
          console.log('err', err);
          return;
      } else {
        // res.send("注册成功")
        res.redirect('/')
      }
  });
  });

module.exports = router ;