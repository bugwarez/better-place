const prisma = require("../prismaClient/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const config = require("../config/config");

exports.getAllUsers = async (req, res) => {
  const users = await prisma.users.findMany();
  res.json(users);
};

exports.registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { password, ...userData } = req.body;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const createdUser = await prisma.users.create({
      data: {
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        fullname: req.body.fullname,
        bio: req.body.bio,
        website: req.body.website,
        birth_date: req.body.birth_date,
        profile_picture: req.body.profile_picture,
        cover_picture: req.body.cover_picture,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    const token = jwt.sign({ userId: createdUser.id }, config.jwt_secret, {
      expiresIn: "365d",
    });
    const { password: _, ...userWithoutPassword } = createdUser;

    res.status(201).json({
      user: userWithoutPassword,
      token,
      success: true,
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error!", success: false, error });
  }
};
