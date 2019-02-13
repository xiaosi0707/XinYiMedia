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

router.get('/', (req, res) => {
    res.render('index.html')
})
router.get('/case', (req, res) => {
    res.render('case.html')

})
router.get('/case-detail', (req, res) => {
    res.render('case-detail.html')
})
router.get('/about', (req, res) => {
    res.render('about.html')
})
router.post('/about', (req, res) => {
    let { body } = req
    new User(body).save((err, user) => {
        if (err) {
            return res.status(500).json({
                err_code:500,
                message: 'Server error'
            })
        }
        // 提交成功
        return res.render('index.html')
    })
})

// 后台 - 咨询列表
router.get('/admin', (req, res) => {
    fs.readFile('db.json', (err, data) => {
        let getData = JSON.parse(data.toString()).data
        res.render('../admin/index.html', {
            getData
        })
    })
})
// 后台 - 案例管理
router.get('/admin/case', (req, res) => {
    res.render('../admin/case.html')
})

// 咨询列表 - API
router.get('/msg-list', (req, res) => {
    // res.json(questions)
    fs.readFile('db.json', (err, data) => {
        let getData = JSON.parse(data.toString()).data
        res.json({
            code: 0,
            data:getData
        })
    })
})

module.exports = router
