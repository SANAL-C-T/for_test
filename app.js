const express = require("express");
const app = express();
const session = require("express-session");
const router = require("./routes/router");
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "makuuid",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);
app.set("view engine", "ejs");
app.use("/", router);
app.listen(5001, () => {
  console.log(`Server Running on 5001 http://localhost:5001`);
});
