module.exports = (app, db) => {
  app.get("/images", (req, res) =>
    db.image.findAll().then(result => res.json(result))
  );

  app.get("/image/:id", (req, res) =>
    db.image.findByPk(req.params.id).then(result => res.json(result))
  );

  app.post("/image", (req, res) =>
    db.image
      .create({
        title: req.body.title,
        content: req.body.content
      })
      .then(result => res.json(result))
  );

  app.put("/image/:id", (req, res) =>
    db.image
      .update(
        {
          title: req.body.title,
          fileName: req.body.fileName
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(result => res.json(result))
  );

  app.put("/image/like/:id", (req, res) =>
    db.image
      .findByPk(req.params.id, { attributes: ["likes"], raw: true })
      .then(currentLikes =>
        db.image
          .update(
            {
              likes: currentLikes.likes + 1
            },
            {
              where: {
                id: req.params.id
              }
            }
          )
          .then(result => res.json(result))
      )
  );

  app.delete("/image/:id", (req, res) =>
    db.image
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => res.json(result))
  );
};
