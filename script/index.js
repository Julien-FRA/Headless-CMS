const express = require("express");
const morgan = require("morgan");
const contentful = require("contentful");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// Display listen port
app.listen(port, () => {
  console.log(`Écoute maintenant sur le port ${port}`);
});

// Catch 404 err
app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Development err
if (app.get("env") === "development") {
  app.use(morgan("dev"));
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

// Production err
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

// Connexion with space and access token >> Settings >> API Keys >> Space ID and Content Delivery API - access token
const client = contentful.createClient({
  space: "kl209jquns0j",
  accessToken: "fXq2ggIWN3VvV4x_1aDbppHuvuUUX1A8ONqIkrgUosY",
});

// Display all article
const articles = client
  .getEntries({
    content_type: "article",
  })
  .then((entries) => {
    entries.items.forEach(function (entry) {
      const path = entry.fields;
      const idArticle = path.idArticle;
      console.log(idArticle);
      const titleProduct = path.titleArticle;
      console.log(titleProduct)
      const contentProduct = path.textArticle;
      console.log(contentProduct)
      const pictureProduct = path.photoArticle.fields.title;
      console.log(pictureProduct)
    });
  });

// Display all product
const products = client
  .getEntries({
    content_type: "product",
  })
  .then((entries) => {
    entries.items.forEach(function (entry) {
      const path = entry.fields;
      const idArticle = path.idProduct;
      console.log(idArticle);
      const titleProduct = path.title;
      console.log(titleProduct)
      const contentProduct = path.contentProduct;
      console.log(contentProduct)
      const pictureProduct = path.photo.fields.title;
      console.log(pictureProduct)
    });
  });


// Display all article
const navigation = client
  .getEntries({
    content_type: "navigation",
  })
  .then((entries) => {
    entries.items.forEach(function (entry) {
      const path = entry.fields;
      const idNav = path.id;
      console.log(idNav);
      const logoNav = path.logoWebsite.fields.title;
      console.log(logoNav)
      const firstLink = path.firstLink;
      console.log(firstLink)
      const secondLink = path.secondLink;
      console.log(secondLink)
    });
  });


// Display one content
// const navigation = client.getEntry("4rQ93fbB7lv9jA1IAOshiL").then((entry) => {
//   const navId = entry.fields.id;
//   const logo = entry.fields.logoWebsite;
//   const firstLink = entry.fields.firstLink;
//   const secondLink = entry.fields.secondLink;
// });


// // Display all content
// client.getEntries().then((entries) => {
//     entries.items.forEach((entry) => {
//         if(entry.fields) {
//             console.log(entry.fields);
//         }
//     });
// });

module.exports = app;
