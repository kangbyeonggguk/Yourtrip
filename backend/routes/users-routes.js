const express = require("express");

const { check } = require("express-validator");

const usersController = require("../controller/users-controller");

const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("/", usersController.getUsers);

router.get("/:userid", usersController.getuserbyuserid);

router.post(
  "/signup",

  [
    check("nickname").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);

router.post("/login", usersController.login);

module.exports = router;
