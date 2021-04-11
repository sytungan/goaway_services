const express = require("express");
const axios = require("axios");
var convert = require("convert-units");
const { GOOGLE_MAPS_API_KEY } = require("../environments");
module.exports = {
  getGeolocation: async (req, res) => {
    let data;
    await axios
      .post(
        "https://www.googleapis.com/geolocation/v1/geolocate?key=" + GOOGLE_MAPS_API_KEY 
      )
      .then((response) => {
        data = response.data;
      });
    return res.status(200).json(data);
  },
};
