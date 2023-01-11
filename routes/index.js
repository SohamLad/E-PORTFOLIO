var express = require("express");
var router = express.Router();

router.get("/skills", function (req, res, next) {
  const skills = [
    {
      title: "HTML",
      level: "Experienced",
      experience: "4 Years",
      image: "html.png",
    },
    {
      title: "CSS",
      level: "Experienced",
      experience: "4 Years",
      image: "css.png",
    },
    {
      title: "Bootstrap",
      level: "Experienced",
      experience: "2 Years",
      image: "bootstrap.jpg",
    },
    {
      title: "Php",
      level: "Associate",
      experience: "1 Years",
      image: "php.png",
    },
    {
      title: "MySql",
      level: "Associate",
      experience: "4 Years",
      image: "mysql.png",
    },
    {
      title: "C#",
      level: "Entry Level",
      experience: "1 Years",
      image: "c sharp.png",
    },
    {
      title: "Linux",
      level: "Entry Level",
      experience: "0.5 Years",
      image: "linux(1).png",
    }
  ];

  res.render("skills", { title: "My Skills", skills: skills });
});

router.get("/projects", function (req, res, next) {
  const projects = [
    {
      title: "Porfolio Site",
      role: "Developer",
      techStack: ["HTML", "CSS", "Bootstrap"],
      duration: "June 2022 - June 2022",
      image: "portfolio.png",
    },

    {
      title: "Online Food Order Application",
      role: "Developer",
      techStack: ["HTML", "CSS", "Bootstrap", "Php", "MySql", "PHPMyAdmin"],
      duration: "August 2019 - February 2020",
      image: "Foodiezz.jpg",
    },

    {
      title: "Chat Application",
      role: "Developer",
      techStack: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Php",
        "MySql",
        "PHPMyAdmin",
        "Socket",
      ],
      duration: "May 2021 - Present",
      image: "chat.jpg",
    },
  ];

  res.render("projects", { title: "My Projects", projects: projects });
});

router.get("/contact_us", function (req, res, next) {
  res.render("contact_us", { title: "Contact US " });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "My Portfolio" });
});

module.exports = router;
