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
  },
  {
    fileName: "marcus-woodbridge-Bf8YHJcECkA-unsplash.jpg",
    title: "Grand Canyon interior",
    likes: random(10, 1000)
  },
  {
    fileName: "marcin-skalij-lfCm8yyTGIo-unsplash.jpg",
    title: "time lapse photography of red sedan",
    likes: random(10, 1000)
  },
  {
    fileName: "martin-katler-5El0JqgrAAU-unsplash.jpg",
    title: "people standing on train station",
    likes: random(10, 1000)
  },
  {
    fileName: "danist-KMTQQHYYfS4-unsplash.jpg",
    title: "abstract building",
    likes: random(10, 1000)
  },
  {
    fileName: "monica-sauro-46ihdILHdAM-unsplash.jpg",
    title: "gray pillars during daytime",
    likes: random(10, 1000)
  },
  {
    fileName: "justin-bautista-3CKH4c4XHvY-unsplash.jpg",
    title: "white and brown pagoda house",
    likes: random(10, 1000)
  },
  {
    fileName: "zhang-kaiyv-_i-v968x-KQ-unsplash.jpg",
    title: "people inside bus",
    likes: random(10, 1000)
  },
  {
    fileName: "guogete-BVybt-KTJAE-unsplash.jpg",
    title: "green and white balloons",
    likes: random(10, 1000)
  },
  {
    fileName: "faris-mohammed-z0UfETjRl0g-unsplash.jpg",
    title: "red, yellow, and blue flower origami",
    likes: random(10, 1000)
  },
  {
    fileName: "bence-balla-schottner-xrHNKvbcmgk-unsplash.jpg",
    title: "silver car in highway",
    likes: random(10, 1000)
  }
];

db.sequelize.sync().then(() => {
  db.image.bulkCreate(images);

  app.listen(8080, () => console.log("App listening on port 8080!"));
});
