const prisma = require("../../prismaClient/client");
const { body } = require("express-validator");

const validateRegistrationSchema = [
  body("fullname")
    .trim()
    .notEmpty()
    .withMessage("İsim Soyisim alanı zorunludur.")
    .isLength({ min: 3, max: 52 })
    .withMessage("İsim Soyisim alanı 3-52 karakter ile sınırlıdır."),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("E-Posta alanı zorunludur.")
    .isEmail()
    .withMessage("Geçersiz e-posta formatı.")
    .custom(async (value) => {
      const userExists = await prisma.users.findUnique({
        where: {
          email: value,
        },
      });
      if (userExists !== null) {
        throw new Error("Bu e-posta ile zaten bir kullanıcı kayıtlı.");
      }
    }),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Kullanıcı adı alanı zorunludur.")
    .isLength({ min: 3, max: 16 })
    .withMessage("İsim Soyisim alanı 3-16 karakter ile sınırlıdır.")
    .custom(async (value) => {
      const userExists = await prisma.users.findUnique({
        where: {
          username: value,
        },
      });
      if (userExists !== null) {
        throw new Error("Bu Kullanıcı adı ile zaten bir kullanıcı kayıtlı.");
      }
    }),

  body("password")
    .trim()
    .isLength({ min: 6, max: 36 })
    .withMessage("Şifre alanı 6-36 karakter ile sınırlıdır."),
];

module.exports = {
  validateRegistrationSchema,
};
