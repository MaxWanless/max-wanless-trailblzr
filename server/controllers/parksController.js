const knex = require("knex")(require("../knexfile"));

exports.parkList = (req, res) => {
  knex
    .raw(
      "select parks.*,  count(parktrails.parkID) As NumberOfTrails From parktrails left join parks on parktrails.parkID = parks.id group by parks.id"
    )
    .then((data) => {
      res.status(200).json(data[0]);
    });
};

exports.parkDetails = (req, res) => {
  const sendResponse = (data) => {
    res.status(200).json(data);
  };

  knex("parks")
    .where({ id: req.params.id })
    .then((data) => {
      knex("parktrails")
        .where({ parkID: req.params.id })
        .then((parkTrails) => {
          sendResponse({ ...data, trails: parkTrails });
        });
    });
};
