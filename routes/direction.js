const express = require('express')
const router = express.Router()

const {getDistance} = require('../services/direction.service')

router.get('/distance/:src/:des', getDistance)

module.exports = router