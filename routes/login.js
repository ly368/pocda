let express =require('express');
let router =express.Router();

var mysql =require('mysql');
var connection =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'work'
});
connection.connect();

router.get('/', function (req, res) {
  res.render('login');
});


router.post('login', (req, res) => {
  var selectSQL = "select Name,password from pocda_login where Name = '" + req.body.Name + "' and password = " + req.body.password + "";
  connection.query(selectSQL, function (err, result, fields) {
      if (err) {
          console.log('err', err);
          return;
      } else {
        if(result == ''){
          res.send('登录失败');
        }
      else {
       
          if (req.body.Name=="YY" && req.body.password==0556) {
            res.redirect('/index');
          }
          else {
            res.redirect('/home');
          }
      }
    }
        });
});


  module.exports = router;