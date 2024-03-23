const prisma = require("../prismaClient/client");

exports.getAllTweets = (req, res) => {
  // Logic to fetch all tweets
  res.send("Fetch all tweets");
};

exports.createTweet = (req, res) => {
  // Logic to create a new tweet
  res.send("Create a new tweet");
};
