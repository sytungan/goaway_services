const mongoose = require('mongoose');

// create Location schema & model
const LocationSchema = mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    img: {
        type: String
    }
});

module.exports = {
    Location: mongoose.model('Location', LocationSchema)
};