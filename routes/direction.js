const express = require('express')
const router = express.Router()

const {getDistance, getDirection} = require('../services/direction.service')

router.get('/distance', getDistance) // 2 parameter src and des
router.get('/', getDirection) // 2 parameter idSrc and idDes

module.exports = router