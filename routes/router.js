const express = require("express");
const control = require("../controller/controle");
const middle = require("../middlewares/sessionCheck");
const app = express();
const router = express.Router();
router.get("/", middle.verifyLogin, control.indexControl);
router.post("/login", control.LoginPost);
router.get("/login", control.LoginGet);
router.get("/logout", control.logoutControl);
router.get("*", control.errorPage);

module.exports = router;
