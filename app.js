const express = require("express");
const app = express();
const session = require("express-session");
const router = require("./routes/router");
// const bodyParser = require("body-parser");
app.use(express.static("public"));

// Controlling Browser Back Button
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "makuuid",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000000 },
  })
);
app.set("view engine", "ejs");
app.use("/", router);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server Running on 5001 http://localhost:${PORT}`);
});
