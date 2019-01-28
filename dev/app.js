/**
 @Author：Wyunfei
 @Date：2019/1/28/11:22
 @FileName: app.js
 */

const express = require('express')
const app = express()
const router = require('./router')
app.use(router)
app.engine('html', require('express-art-template'))

// 设置开放目录
app.use('/assets/', express.static('./assets'))

app.listen(7000, () => {
    console.log('app is running at http://localhost:7000/')
})

