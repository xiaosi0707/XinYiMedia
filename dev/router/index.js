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
    res.render('index.html', {
        title: '新逸传媒 - 首页'
    })
})
router.get('/case', (req, res) => {
    res.render('case.html', {
        title: '新逸传媒 - 案例中心'
    })

})
router.get('/case-detail', (req, res) => {
    res.render('case-detail.html', {
        title: '新逸传媒 - 案例详情'
    })
})
router.get('/about', (req, res) => {
    res.render('about.html', {
        title: '新逸传媒 - 关于我们'
    })
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
    res.render('../admin/index.html', {
        title: '新逸传媒 - 后台管理中心'
    })

})
// 后台 - 案例管理
router.get('/admin/case', (req, res) => {
    res.render('../admin/case.html')
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
