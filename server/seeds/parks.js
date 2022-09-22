const parkListData = require("../seed_data/parks.json");
const parkinfoData = require("../seed_data/park_info.json");
const parkTrailData = require("../seed_data/park_trails.json");
const parkHighlightsData = require("../seed_data/park_highlights.json");

exports.seed = function (knex) {
  return knex("park")
    .del()
    .then(function () {
      return knex("park").insert(parkListData);
    })
    .then(() => {
      return knex("park_info").del();
    })
    .then(() => {
      return knex("park_info").insert(parkinfoData);
    })
    .then(() => {
      return knex("park_trails").del();
    })
    .then(() => {
      return knex("park_trails").insert(parkTrailData);
    })
    .then(() => {
      return knex("park_highlights").del();
    })
    .then(() => {
      return knex("park_highlights").insert(parkHighlightsData);
    });
};
