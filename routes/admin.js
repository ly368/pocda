var express = require('express');
var router = express.Router();
var mysql =require('mysql');


var connection =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'work'
});
connection.connect();

router.get('/', function (req, res) {
  res.render('admin');
});


router.post('/', (req, res) => {
  var selectSQL = "select phonenumber,password from pocda_lr where email = '" + req.body.phonenumber + "' and password = '" + req.body.password +"' ";
  connection.query(selectSQL, function (err, result, fields) {
      if (err) {
          console.log('err', err);
          return;
      } else {
        
        if(req.body.phonenumber == 'admin' && req.body.password == '123456' ){
            res.redirect('/add');
        }
          else {
            res.send("登录失败，请检查您的账号密码是否正确!")
            // res.redirect('/admin');
          }
      }
    });
});


module.exports = router;