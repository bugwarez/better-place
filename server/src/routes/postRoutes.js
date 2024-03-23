const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Define routes
router.get("/", postController.getAllTweets);
router.post("/", postController.createTweet);

module.exports = router;
