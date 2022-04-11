const root = document.querySelector("#root");

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
      root.insertAdjacentHTML("beforeend", articleItem);
    });
  })
  .catch((err) => console.log(err));
