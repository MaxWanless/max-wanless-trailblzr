const { response } = require("express");

const knex = require("knex")(require("../knexfile"));

exports.parkList = (req, res) => {
  knex
    .raw(
      "select parks.*,  count(parktrails.parkID) As trailCount From parktrails left join parks on parktrails.parkID = parks.id group by parks.id"
    )
    .then((data) => {
      res.status(200).json(data[0]);
    });
};

exports.parkDetails = (req, res) => {
  let ParkData = {};
  const sendResponse = (data) => {
    res.status(200).json(data);
  };

  knex("parks")
    .where({ id: req.params.id })
    .then((parkInfo) => (ParkData = parkInfo[0]))
    .then(() => {
      knex("parktrails")
        .where({ parkID: req.params.id })
        .then((parkTrails) => (ParkData["trails"] = parkTrails))
        .then(() => {
          knex("parkhighlights")
            .where({ parkID: req.params.id })
            .then((parkHighlights) => (ParkData["highlights"] = parkHighlights))
            .then(() => {
              sendResponse(ParkData);
            });
        });
    });
};
