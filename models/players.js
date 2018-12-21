const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    player_id:{
        type: String,
        require: true
    },
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    role:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Player',playerSchema)