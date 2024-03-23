const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
  validateRegistrationSchema,
} = require("../express-validator/user/register-validator");

// Define routes
router.get("/all", userController.getAllUsers);
router.post(
  "/register",
  validateRegistrationSchema,
  userController.registerUser
);

module.exports = router;
