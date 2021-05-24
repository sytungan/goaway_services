const express = require('express');
const router = express.Router();

const {getSign, setSign, updateSign, getall} = require('../services/trafficSign.service')

router.get("/all",getall)
router.get("/:signId",getSign)
router.post("/",setSign)
router.put("/:signId",updateSign)
module.exports = router;
