/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

console.log("Hola Mundo");

// Ejelo 003 - llamando una external PUBLIC API - jsonplaceholder
let getExternalApi = () => {
  fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=3")
    .then((response) => response.json())
    .then((respuestas) => {
      console.table(respuestas);
    })
    .catch((error) => console.log(error));
};

getExternalApi();

//GET /posts?_start=20&_end=30
