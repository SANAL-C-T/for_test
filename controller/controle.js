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
  {
    title: "Speaker",
    description:
      "This is my Speaking Application accept word wide all languages and emojis",
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple126/v4/2d/aa/ed/2daaed95-9257-46ed-66bd-e5151260dc96/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
  },
  {
    title: "TodoApp",
    description:
      "This is my Todo app project using Nodejs ejs and css more features available",
    image:
      "https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png",
  },
  {
    title: "TicTacToe",
    description:
      "This is my Tic Tac Toe Game Project created with javascript and html",
    image:
      "https://img.freepik.com/premium-vector/tic-tac-toe-game-linear-outline-icon-colour-neon-style-brick-wall-background-light-icon_549897-1775.jpg?w=2000",
  },
  {
    title: "E-commerce",
    description:
      "This is my Big and Real Project E-commerce created with MERN Node js and Mongodb",
    image:
      "https://blog.hubspot.com/hs-fs/hubfs/ecommerce%20marketing.jpg?width=595&height=400&name=ecommerce%20marketing.jpg",
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
    console.log(req.session.isAuth + " reached____________________");
    if (req.session.isAuth) {
      res.redirect("/");
    } else {
      let er = false;
      if (er) {
        setTimeout(() => {
          er = false;
        }, 2000);
      }
      res.render("login", { error: er });
    }
  },
  LoginPost: (req, res) => {
    req.session.email = req.body.email;
    req.session.pass = req.body.password;
    req.session.isAuth = true;
    // res.header('Cache-Control','no-cache')
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
