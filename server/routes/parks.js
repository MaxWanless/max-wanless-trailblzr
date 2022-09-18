const router = require("express").Router();
const parksController = require("../controllers/parksController");

router.route("/").get();

module.exports = router;
