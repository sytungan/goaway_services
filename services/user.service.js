const bcrypt = require("bcrypt");
const { UserEntity } = require("../models");
const { hashPassword, comparePassword } = require("../utils");
const { upload } = require('../middlewares');

module.exports = {
  init: async (req, res) => {
    try {
      const user = await UserEntity.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ msg: err });
    }
  },
  signUp: async (req, res) => {
    try {
      const hashedPassword = await hashPassword(req.body.password);
      const user = new UserEntity({
        userName: req.body.userName,
        password: hashedPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
      });
      const user_ = await UserEntity.findOne({ userName: req.body.userName });
      if (user_ == null) {
        const savedUser = await user.save();
        res.status(200).json(savedUser);
      } else res.status(400).send("User is already exist");
    } catch (err) {
      res.json({ msg: err });
    }
  },
  login: async (req, res) => {
    const user = await UserEntity.findOne({ userName: req.body.userName });
    console.log(user);
    if (user == null) {
      return res.status(400).send("User is not found");
    }
    try {
      if (await comparePassword(req.body.password, user.password)) {
        res.status(200).send(`Welcome ${user.userName}`);
      } else {
        res.status(500).send("Password wrong !! Please try again");
      }
    } catch (err) {
      res.json({ msg: err });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await UserEntity.find({ _id: req.params.id });
      res.status(200).json(user);
    } catch (err) {
      res.json({ msg: err });
      res.status(404);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const userRemoved = await UserEntity.remove({ _id: req.params.id });
      res.status(200).json({ msg: "deleted" });
    } catch (err) {
      res.json({ msg: err });
    }
  },
  crypt: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const userUpdated = await UserEntity.updateOne(
        { _id: req.params.id },
        {
          $set: {
            userName: req.body.userName,
            password: hashedPassword,
          },
        }
      );
      res.status(200).json({ msg: "Updated" });
    } catch (err) {
      res.json({ msg: err });
    }
  },


  setAvatar: async(req,res) => {
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
  },

  forgotPass: async (req,res)=>{
    try {

    } catch (error) {
    }
  },
};
