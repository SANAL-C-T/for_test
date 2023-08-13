const express = require("express");
module.exports = {
  verifyLogin: (req, res, next) => {
    if (req.session.isAuth) {
      next();
    } else {
      res.redirect("/login");
    }
  },
};
