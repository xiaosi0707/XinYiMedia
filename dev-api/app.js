/**
 @Author：Wyunfei
 @Date：2019/1/28/11:22
 @FileName: app.js
 */

const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 跨域支持
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://m.xyucd.com"); // 允许的域名
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"); // 服务器支持的头信息
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); // 允许的方法
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});

app.use(router)
app.engine('html', require('express-art-template'))

// 设置开放目录
app.use('/assets/', express.static('./assets'))
app.use('/lib/', express.static('./lib'))

app.listen(7000, () => {
    console.log('app is running at http://localhost:7000/')
})






