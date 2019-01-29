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
    fs.readFile('db.json', (err, data) => {

        // 取出数据
        let sourceData = JSON.parse(data.toString())

        // 表单提交过来的数据
        let { body } = req


        // 把提交过来的数据 push 到数据库中
        sourceData.data.push(body)

       // 再次写入文件 - 持久化
        fs.writeFile('db.json', JSON.stringify( sourceData ), err => {
            if (!err) {
                console.log('提交成功')
                res.redirect('/')
            }
        })
    })
})

module.exports = router
