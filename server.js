import express from "express";
import bodyParser from "body-parser";
import random from "lodash.random";
import db from "./models";
import apiImage from "./app/api/image";

const app = express();
app.use(bodyParser.json());

apiImage(app, db);

const images = [
  {
    fileName: "stefan-lehner-8Tlrh8aPFw0-unsplash.jpg",
    title: "Shinjuku Tokyo at night",
    likes: random(10, 1000)
  },
  {
    fileName: "bj-jensen-crT0JUi8Erc-unsplash.jpg",
    title: "orange bus near coconut trees",
    likes: random(10, 1000)
  },
  {
    fileName: "kevin-mueller-Z0oRWNDBV6Y-unsplash.jpg",
    title: "View the photo by Kevin Mueller",
    likes: random(10, 1000)
  },
  {
    fileName: "ross-sneddon-0dlprRhM2r8-unsplash.jpg",
    title: "shallow focus photo of person in black trench coat",
    likes: random(10, 1000)
  },
  {
    fileName: "francesco-ungaro-FZvusNluIZ0-unsplash.jpg",
    title: "orange fish in water",
    likes: random(10, 1000)
  }
];

db.sequelize.sync().then(() => {
  db.image.bulkCreate(images);

  app.listen(8080, () => console.log("App listening on port 8080!"));
});
