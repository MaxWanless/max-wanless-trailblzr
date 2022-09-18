const parkListData = require("../seed_data/parks.json");
const parkTrailData = require("../seed_data/park_trails.json");
const parkHighlightsData = require("../seed_data/park_highlights.json");

exports.seed = function (knex) {
  return knex("parks")
    .del()
    .then(function () {
      return knex("parks").insert(parkListData);
    })
    .then(() => {
      return knex("parktrails").del();
    })
    .then(() => {
      return knex("parktrails").insert(parkTrailData);
    })
    .then(() => {
      return knex("parkhighlights").del();
    })
    .then(() => {
      return knex("parkhighlights").insert(parkHighlightsData);
    });
};
