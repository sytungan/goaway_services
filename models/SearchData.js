const mongoose = require('mongoose');

const SearchDataSchema = mongoose.Schema({
    content: {
        type: String
    },
    user_id: {
        type: Number
    },
    date_time: {
        type: Date, default: Date.now
    },
})

module.exports = {SearchDataEntity: mongoose.model('Search', SearchDataSchema)};