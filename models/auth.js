const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    userName:{
        type: String,
        unique:true,
        require: true
    },
    password:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('User',authSchema)