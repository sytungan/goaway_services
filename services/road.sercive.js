const express = require("express");
const axios = require("axios");
var convert = require("convert-units");
const { GOOGLE_MAPS_API_KEY } = require("../environments");
module.exports = {
  searchPlace: async (req, res) => {
    let data;
    // Get data using get method
    await axios
      .get(
        "https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
        {
          params: {
            input: req.query.input,
            inputtype: "textquery",
            fields: "formatted_address,name,geometry,place_id",
            key: GOOGLE_MAPS_API_KEY,
          },
        }
      )
      .then((response) => {
        data = response.data;
      });

    data.candidates.forEach(function (candidate) {
      candidate.geometry = candidate.geometry.location;
    });
    if (data.status == "OK") {
      return res.status(200).json(data.candidates);
    } else {
      res.json({ msg: data.status });
    }
  },
};
