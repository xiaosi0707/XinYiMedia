/**
 @Author：Wyunfei
 @Date：2019/1/28/11:30
 @FileName: index.js
 */
const fs = require('fs')
const express = require('express')
let mongoose = require('mongoose')
let router = express.Router()
let User = require('../models/user')

// 连接数据库
mongoose.connect('mongodb://localhost/media', { useMongoClient: true })

router.post('/about', (req, res) => {
    let { body } = req
    console.log(body)
    new User(body).save((err, user) => {
        console.log(err)
        if (err) {
            return res.status(500).json({
                err_code:500,
                message: 'Server error'
            })
        }
        // 提交成功
        // res.json({
        //     code: 0,
        //     success: true
        // })
        // return res.render('http://m.xyucd.com/')
        res.redirect(303, 'http://m.xyucd.com/')
    })
})


// 咨询列表 - API
router.get('/msg-list', (req, res) => {
    User.find((err, ret) => {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Server error'
            })
        }
        res.json({
            code: 0,
            data: ret
        })
    })
})

module.exports = router
