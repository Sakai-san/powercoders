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
    fileName: "losc.png",
    title: "logo de l'équipte du LOSC",
    likes: random(10, 1000)
  },
  {
    fileName: "lyon.png",
    title: "logo de l'équipe de Lyon",
    likes: random(10, 1000)
  }
];

db.sequelize.sync().then(() => {
  db.image.bulkCreate(images);

  app.listen(8080, () => console.log("App listening on port 8080!"));
});
