const router = require("express").Router();
const parksController = require("../controllers/parksController");

router.route("/").get(parksController.parkList);

module.exports = router;
