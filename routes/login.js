const { name } = require('ejs');
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


router.post('/', (req, res) => {
  var selectSQL = "select email,password from pocda_lr where email = '" + req.body.email + "' and password = '" + req.body.password +"' ";
  connection.query(selectSQL, function (err, result, fields) {
      if (err) {
          console.log('err', err);
          return;
      } else {
        if(result == ''){
          res.send('登录失败');
        }else{
          res.send('登录成功');
        }
            // res.redirect('/');
            // else {
            //   res.send('info',{
            //     title:"登录成功",
            //     content:"账号密码正确，即将进入首页",
            //     href:"/",
            //     hrefTxt:"首页"
            //   })
          // }
      }
    });
});


  module.exports = router;