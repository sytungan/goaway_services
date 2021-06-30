const express = require('express')
const {SignEntity} = require('../models');

module.exports = {
    getall: async (req, res) => {

        try {          
          const sign = await SignEntity.find();
          res.status(200).json(sign);
        } catch (err) {
          res.status(400).json({ msg: err });
        }
    },
    setSign: async (req, res) => {      
      await console.log(req.body);
      try {
        // console.log("hihi")
        const sign = new SignEntity({
          signId: req.body.signId,
          signIcon:req.body.signIcon,
          signName:req.body.signName,
          signDescription:req.body.signDescription,
          signType:req.body.signType,
        }
        );
        console.log(sign)
        const sign_ = await SignEntity.findOne({ signId: req.body.signId });
        if (sign_ == null) {
          const savedSign = await sign.save();
          res.status(200).json(savedSign);
        } else res.status(400).send("Sign is already exist");
      } catch (err) {
        res.json({ msg: err });
      }
    },
    getSign: async (req, res) => {
        try {
            const signId = await SignEntity.find({ signId: req.params.signId });
            const sign = signId[0]
            res.status(200).json({
              signId: sign.signId,
              signIcon: sign.signIcon,
              signName: sign.signName,
              signDescription: sign.signDescription,
              signType:sign.signType
            });
          } catch (err) {
            res.json({ msg: err });
            res.status(404);
          }
    },
    updateSign:async (req, res) => {
      
      try {
        SignEntity.findOneAndUpdate({signId: req.params.signId},req.body).then(function(value){
          console.log(value)
          res.send(value)
        });
       
        } catch (err) {
          res.json({ msg: err });
          res.status(404);
        }
    },
    deleteSign: async (req, res) => {
      try {
        const userRemoved = await SignEntity.deleteOne({ signId: req.params.signId });
        res.status(200).json({ msg: "deleted" });
      } catch (err) {
        res.json({ msg: err });
      }
    }
}