const express = require("express");
const axios = require("axios");
var convert = require("convert-units");
const { GOOGLE_MAPS_API_KEY, HERE_MAPS_API_KEY } = require("../environments");
module.exports = {
  searchPlace: async (req, res) => {
    let data;
    // Get data using get method
    await axios
      .get("https://maps.googleapis.com/maps/api/place/textsearch/json", {
        params: {
          query: req.query.input,
          key: GOOGLE_MAPS_API_KEY,
        },
      })
      .then((response) => {
        data = response.data;
      });

    data.results.forEach(function(result) {
        result.geometry = result.geometry.location
    });
    if (data.status == "OK") {
        return res
        .status(200)
        .json(data.results);
    }
    else {
        res.json({ msg: data.status })
    }
  },
  searchPlace2: async (req, res) => {
    let data;
    // Get data using get method
    await axios
      .get("https://places.ls.hereapi.com/places/v1/autosuggest", {
        params: {
          at: req.query.lat + "," + req.query.lng,
          q: req.query.input,
          apiKey: HERE_MAPS_API_KEY,
        },
      })
      .then((response) => {
        data = response.data;
      });
      data.results.forEach(function(result) {
        delete result['bbox'];
        delete result['category'];
        delete result['href'];
        delete result['type'];
        delete result['resultType'];
        delete result['id'];
    });
      return res
        .status(200)
        .json(data.results);
  },
  getPlace: async (req, res) => {
    let data;
    // Get data using get method
    await axios
      .get("https://maps.googleapis.com/maps/api/place/details/json", {
        params: {
          place_id: req.params.place_id,
          fields: "name,icon,photos",
          key: GOOGLE_MAPS_API_KEY,
        },
      })
      .then((response) => {
        data = response.data.result;
      });
    return res
        .status(200)
        .json(data);
  },
  getPlacePhoto: async (req, res) => {
    // Get data using get method
    let maxwidth =  1600
    let url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" + maxwidth.toString() + "&photoreference=" + req.params.photo_id + "&key=" + GOOGLE_MAPS_API_KEY 
    return res
        .status(200)
        .json({url:url});
  },
  nearbySearch: async (req, res) => {
    let data;
    // Get data using get method
    await axios
      .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
        params: {
          location: req.body.x + ',' + req.body.y,
          type: req.body.type,
          radius: req.body.radius,
          key: GOOGLE_MAPS_API_KEY,
        },
      })
      .then((response) => {
        data = response.data;
      });
    if (data.status == "OK") {
        return res
        .status(200)
        .json(data.results);
    }
    else {
        res.json({ msg: data.status })
    }
  }
  
}