const knex = require("knex")(require("../knexfile"));

exports.parkList = (req, res) => {
  knex("parks").then((data) => {
    res.status(200).json(data);
  });
};

