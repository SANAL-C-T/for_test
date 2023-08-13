let email = "aflah@gmail.com";
let password = 786786;
let datas = [
  {
    title: "Netflix",
    description:
      "This is my Netflix clone created with html and css and this is my first project",
    image: "https://img.hi.91mobiles.com/uploads/2022/04/Netflix-Plan-list.jpg",
  },
  {
    title: "Lexus",
    description:
      "This is my Lexus clone created with html and css and this is my Second project",
    image:
      "https://media.zigcdn.com/media/content/2023/May/cover_646f4fe7aa5b8_640x480.jpg",
  },
  {
    title: "Angular",
    description:
      "This is my Angular clone created with html and css and this is my third project",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*bMgQ8MhbnQexpqHgIgBJPA.png",
  },
];
module.exports = {
  indexControl: (req, res) => {
    console.log(req.session.email);
    console.log(req.session.pass);
    console.log(req.session.isAuth);
    res.render("home", { datas });
  },
  errorPage: (req, res) => {
    res.render("error");
  },
  LoginGet: (req, res) => {
    console.log("reached____________________");
    if (req.session.isAuth) {
      res.redirect("/");
    } else {
      res.render("login", { error: false });
    }
  },
  LoginPost: (req, res) => {
    req.session.email = req.body.email;
    req.session.pass = req.body.password;
    req.session.isAuth = true;
    // console.log(`Your Session is ${req.session.email}`);

    if (req.body.password != password && req.body.email != email) {
      res.render("login", { error: "Your Email and password Incorrect" });
      return;
    }
    if (req.body.password == password && req.body.email != email) {
      res.render("login", { error: "Your Email Incorrect" });
      return;
    }
    if (req.body.password != password && req.body.email == email) {
      res.render("login", { error: "Your password Incorrect" });
      return;
    }
    res.redirect("/");
  },
  logoutControl: (req, res) => {
    req.session.destroy();
    res.redirect("/login");
  },
};
