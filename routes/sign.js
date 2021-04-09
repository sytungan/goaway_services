const express = require('express');
const router = express.Router();

const {getSign, setSign, updateSign} = require('../services/trafficSign.service')

router.get("/:signId",getSign)
router.post("/",setSign)
router.put("/:signId",updateSign)
module.exports = router;
