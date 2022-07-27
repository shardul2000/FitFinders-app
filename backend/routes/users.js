const express = require("express");
const router = express.Router();
const { middleware } = require("../middleware/auth")

const{ addDataController, uploadAvatar, getUserData, uploadPics } = require('../controllers/users');

router.route("/addData").post(addDataController);
router.route("/uploadAvatar").post(uploadAvatar);
router.route("/uploadPics").post(uploadPics);

router.route("/getUserData/:id").get(getUserData);


module.exports = router;