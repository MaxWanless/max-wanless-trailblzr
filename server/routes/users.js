const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.userList);
router.route("/:id").get(userController.userDetails);
router.route("/login").post(userController.login);
router.route("/register").post(userController.register);

module.exports = router;
