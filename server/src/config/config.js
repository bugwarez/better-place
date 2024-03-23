require("dotenv").config();

if (process.env.PROJECT_MODE === "development") {
  const result = require("dotenv").config({ path: ".env.local" });

  process.env = {
    ...process.env,
    ...result.parsed,
  };
}

const config = {
  port: process.env.PORT || 3001,
  jwt_secret: process.env.JWT_SECRET,
  database_url: process.env.DATABASE_URL,
  project_mode: process.env.PROJECT_MODE,
  smtp_user: process.env.SMTP_USER,
  smtp_password: process.env.SMTP_PASSWORD,
  smtp_host: process.env.SMTP_HOST,
  smtp_port: process.env.SMTP_PORT,
};
console.log(process.env.PROJECT_MODE);

module.exports = config;
