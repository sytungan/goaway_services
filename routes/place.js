const express = require('express')
const router = express.Router()

const {searchPlace, getPlace, getPlacePhoto, nearbySearch} = require('../services/place.service')

router.get('/', searchPlace)
router.get('/:place_id', getPlace)
router.get('/photo/:photo_id', getPlacePhoto)
router.post('/nearby', nearbySearch)

module.exports = router