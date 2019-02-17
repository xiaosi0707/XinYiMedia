/**
 @Author：Wyunfei
 @Date：2019/2/13/18:52
 @FileName: user.js
 */
let mongoose = require('mongoose')
let Schema =mongoose.Schema

let userSchema= new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)
