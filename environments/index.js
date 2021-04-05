require('dotenv').config()

//Application
const PORT = process.env.PORT || 3000

//Database
const DATABASE_NAME = process.env.DATABASE_NAME || 'goaway'
const MONGO_URL = process.env.MONGO_URL || `mongodb+srv://gopro:twPTAOxzC2PnAAOt@goaway.goxxp.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`

//bycrypt
const SALT = process.env.SALT || 10

// Google API
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyA66KwUrjxcFG5u0exynlJ45CrbrNe3hEc'

module.exports = {
    PORT,
    DATABASE_NAME,
    MONGO_URL,
    SALT,
    GOOGLE_MAPS_API_KEY
}