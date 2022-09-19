const router = require("express").Router();
const parksController = require("../controllers/parksController");

router.route("/").get(parksController.parkList);

router.route("/:id").get(parksController.parkDetails);

module.exports = router;
