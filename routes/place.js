const express = require('express')
const router = express.Router()

const {searchPlace} = require('../services/place.service')

router.get('/', searchPlace) // 2 parameter src and des
module.exports = router