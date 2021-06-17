var express = require('express');
var router = express.Router();
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
    res.render('upload');
});
router.post('/', (req, res) => {

  var addSql = 'insert into detail_add(title,subtitle,detail,photo) values(?,?,?,?)';
  connection.query(addSql, [req.body.title,req.body.subtitle,req.body.detail,req.body.photo], function (err, result, fields) {
  
      if (err) {
          console.log('err', err);
      } else {
        res.send("上传成功")
        // res.send('info',{
        //   title:"登录成功",
        //   content:"账号密码正确，即将进入首页",
        //   href:"/",
        //   hrefTxt:"首页"
        // })
        // res.redirect('/')
      }
  });
  });


module.exports = router;