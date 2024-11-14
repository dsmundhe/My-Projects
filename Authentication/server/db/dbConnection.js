const e = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/authentication'
const dbConnection = async () => {
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected!')
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = { dbConnection };