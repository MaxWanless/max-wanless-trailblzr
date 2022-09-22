const knex = require("knex")(require("../knexfile"));

exports.parkList = (req, res) => {
  knex
    .raw(
      "select park.*,  count(park_trails.parkID) As trailCount From park_trails left join park on park_trails.parkID = park.id group by park.id"
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

  knex("park")
    .where({ id: req.params.id })
    .then((parkInfo) => (ParkData = parkInfo[0]))
    .then(() => {
      knex("park_info")
        .select("phone", "address", "size", `established`, `social`)
        .where({ parkID: req.params.id })
        .then((parkInfo) => (ParkData["info"] = parkInfo[0]))
        .then(() => {
          knex("park_trails")
            .select("name", "length", "difficulty", `description`)
            .where({ parkID: req.params.id })
            .then((parkTrails) => (ParkData["trails"] = parkTrails))
            .then(() => {
              knex("park_highlights")
                .pluck("highlight")
                .where({ parkID: req.params.id })
                .then(
                  (parkHighlights) => (ParkData["highlights"] = parkHighlights)
                )
                .then(() => {
                  sendResponse(ParkData);
                });
            });
        });
    });
};
