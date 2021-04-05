const express = require("express");
const axios = require("axios");
var convert = require("convert-units");
const { GOOGLE_MAPS_API_KEY } = require("../environments");
module.exports = {
  getDistance: async (req, res) => {
    let data;
    // Get data using get method
    await axios
      .get("https://maps.googleapis.com/maps/api/distancematrix/json", {
        params: {
          units: "imperial",
          origins: req.params.src,
          destinations: "|" + req.params.des,
          key: GOOGLE_MAPS_API_KEY,
        },
      })
      .then((response) => {
        data = response.data;
      });

    // Json handling
    console.log(data.rows[0].elements);
    var distance = convert(data.rows[0].elements[0].distance.value)
      .from("m")
      .to("km");
    var duration = data.rows[0].elements[0].duration.text;
    return res
      .status(200)
      .json({ distance: distance.toFixed(2) + " km", duration: duration });
  },
};
