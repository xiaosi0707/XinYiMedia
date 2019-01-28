/**
 @Author：Wyunfei
 @Date：2019/1/28/11:30
 @FileName: index.js
 */
const fs = require('fs')
const express = require('express')

let router = express.Router()

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
})


module.exports = router
