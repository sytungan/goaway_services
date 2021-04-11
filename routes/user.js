const express = require("express");
const router = express.Router();
const {
  init,
  getUser,
  deleteUser,
  login,
  signUp,
  forgotPass,
} = require("../services/user.service");
const { upload } = require('../middlewares');
const { UserEntity } = require('../models');

router.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

router.get("/", init);
router.post('/forgotPass', forgotPass);
router.post("/signUp", signUp);
router.post("/login", login);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);

router.put('/setAvatar/:id', upload.single('csv'), async(req,res) => {
  try {
      const userUpdated = await UserEntity.updateOne(
          {_id: req.params.id}, 
          {$set: { 
              avatar: req.file
              }}
          );
      res.status(200).send(req.file);
  }catch(err) {
      res.send(400).json({msg: err});;
  }
})

router.get('/', async(req,res)=>{
  try {
      const user = await UserEntity.find();
      res.status(200).json(user);
  } catch(err) {
      res.status(400).json({msg: err});
  }
})

router.get('/:id', async(req,res)=>{
  try {
      const user = await UserEntity.find({_id: req.params.id});
      res.status(200).json(user);
  } catch(err) {
      res.json({msg: err});
      res.status(404);
  }
})

module.exports = router;
