const express = require('express')
const router = express.Router()
const {
  Location
} = require('../models');

router.post('/', async (req, res) => {
  await console.log('posting');
  try {
    const l = new Location({
      name: req.body.name,
      address: req.body.address,
      img: req.body.img
    });
    const exist = await Location.findOne({
      address: req.body.address
    });
    if (exist == null) {
      const saved = await l.save();
      res.status(200).json(saved);
    } else res.status(400).send("Duplicate")
  } catch (err) {
    res.json({
      msg: err
    });
  }
});

router.get('/:address', async (req, res) => {
  try {
    const l = await Location.find({
      address: req.params.address
    });
    const l1 = l[0];
    res.status(200).json({
      name: l1.name
    });
  } catch (err) {
    res.json({
      msg: err
    });
    res.status(400);
  }
});


router.put('/:address', async (req, res) => {
  try {
    Location.findOneAndUpdate({
      address: req.params.address
    }, req.body).then(function (value) {
      console.log(value);
      res.send(value)
    });
  } catch (err) {
    res.json({
      msg: err
    });
    res.status(404);

  }
});

router.delete('/:address', async (req, res) => {
  try {
    Location.remove({
      address: req.params.address
    });
  } catch (err) {
    res.json({
      msg: err
    });
    res.status(404);
  }
});

module.exports = router;