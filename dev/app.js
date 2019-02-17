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


app.use(router)
app.engine('html', require('express-art-template'))

// 设置开放目录
app.use('/assets/', express.static('./assets'))
app.use('/lib/', express.static('./lib'))

app.listen(80, () => {
    console.log('app is running at http://0.0.0.0/')
})






