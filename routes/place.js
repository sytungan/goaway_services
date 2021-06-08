const express = require('express')
const router = express.Router()

const {searchPlace, getPlace, getPlacePhoto, nearbySearch, searchPlace2} = require('../services/place.service')

router.get('/', searchPlace)
router.get('/v2', searchPlace2)
router.get('/:place_id', getPlace)
router.get('/photo/:photo_id', getPlacePhoto)
router.post('/nearby', nearbySearch)

module.exports = router