const express = require("express");
const app = express();
const port = 3001;
const dotenv = require("dotenv");
const prisma = require("./src/prismaClient/client");

app.use(express.json()); // for parsing application/json
dotenv.config();

// Import routes
const postRoutes = require("./src/routes/postRoutes");
const userRoutes = require("./src/routes/userRoutes");

// Use routes
app.use("/api/tweets", postRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Betterplace backend listening at http://localhost:${port}`);
});
