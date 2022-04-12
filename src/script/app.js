const containerArticles = document.querySelector("#container-articles");
const containerProducts = document.querySelector("#container-products");
const containerNavigation = document.querySelector("#container-navigation");

fetch("http://localhost:8000/navigation")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((navigation) => {
      const navigationItem =
        `<ul><li>` +
        navigation.idNav +
        `</li><li>` +
        navigation.logoNav +
        `</li><li>` +
        navigation.firstLink +
        `</li><li>` +
        navigation.secondLink +
        `</li></ul>`;
      containerNavigation.insertAdjacentHTML("beforeend", navigationItem);
    });
  })
  .catch((err) => console.log(err));

fetch("http://localhost:8000/articles")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((article) => {
      const articleItem =
        `<div><p>` +
        article.idArticle +
        `</p><h2>` +
        article.titleArticle +
        `</h2><p>` +
        article.textArticle +
        `</p><div>` +
        article.photoArticle +
        `</div></div>`;
      containerArticles.insertAdjacentHTML("beforeend", articleItem);
    });
  })
  .catch((err) => console.log(err));

fetch("http://localhost:8000/products")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      const productItem =
        `<div><p>` +
        product.idProduct +
        `</p><h2>` +
        product.titleProduct +
        `</h2><p>` +
        product.contentProduct +
        `</p><div>` +
        product.pictureProduct +
        `</div></div>`;
      containerProducts.insertAdjacentHTML("beforeend", productItem);
    });
  })
  .catch((err) => console.log(err));
