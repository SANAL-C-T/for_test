const express = require("express");
const {verifyLogin}= require("../middlewares/sessionCheck");
const app = express();
const {
  indexControl,
  LoginGet,
  LoginPost,
  logoutControl,
  errorPage,
} = require("../controller/controle");
const router = express.Router();
router.get("/", verifyLogin, indexControl);
router.report("/login").get("/login", LoginGet).post("/login", LoginPost);

router.get("/logout", logoutControl);
router.get("*", errorPage);
module.exports = router;
