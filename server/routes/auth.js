const express = require("express");
const {
  signupController,
  signinController,
  tokenController,
  getUserController,
} = require("../controllers/auth");
const auth = require("../middlewares/auth");

const router = express.Router();
router.post("/api/signup", signupController);
router.post("/api/signin", signinController);
router.post("/tokenIsValid", tokenController);
router.get("/", auth, getUserController);
module.exports = router;
