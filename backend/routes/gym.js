const express = require("express");
const router = express.Router();
const { middleware } = require("../middleware/auth")

const{ createPostController, getPostsController, getGymListingsController, getGymDetailsController,createGymListingController } = require('../controllers/gym');

router.route("/createPost").post(createPostController);
router.route("/getPosts/:gym").get(getPostsController);
router.route("/getGymListings").get(getGymListingsController);
router.route("/getGymDetails/:gym").get(getGymDetailsController);
router.route("/createGymListing").post(createGymListingController);

module.exports = router;