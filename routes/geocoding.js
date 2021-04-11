const express = require('express')
const router = express.Router()

const {getGeolocation} = require('../services/geocoding.service')

router.get('/', getGeolocation)

module.exports = router