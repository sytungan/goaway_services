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

router.put('/setAvatar/:id', setAvatar);


module.exports = router;
