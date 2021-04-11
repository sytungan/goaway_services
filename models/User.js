const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    },
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    email:{
        type: String
    }
});


module.exports = {UserEntity: mongoose.model('Member', UserSchema)};