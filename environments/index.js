require('dotenv').config()

//Application
const PORT = process.env.PORT || 3000

//Database
const DATABASE_NAME = process.env.DATABASE_NAME || 'goaway'
const MONGO_URL = process.env.MONGO_URL || `mongodb+srv://gopro:twPTAOxzC2PnAAOt@goaway.goxxp.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`

//bycrypt
const SALT = process.env.SALT || 10

// Google API
const GOOGLE_MAPS_API_KEY = 'AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8'
const HERE_MAPS_API_KEY = 'G0NTNQFrJwZ3HHZFZB43nb6cUe46FP5W0aO3vmGfhY0'

module.exports = {
    PORT,
    DATABASE_NAME,
    MONGO_URL,
    SALT,
    GOOGLE_MAPS_API_KEY,
    HERE_MAPS_API_KEY
}