const mongoose = require('mongoose');

const SignSchema = mongoose.Schema({
    signId:{
        type: String
    },
    signIcon:{
        type: String
    },
    signName:{
        type: String
    },
    signDescription: {
        type:String
    },
})

module.exports = {SignEntity: mongoose.model('TrafficSign',SignSchema)}