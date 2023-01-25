/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

// info tarjetas other projects

let titleHtmlCard = document.querySelectorAll(".title-js"); //array apuntando a los 3 titulos en html
let bodyHtmlCard = document.querySelectorAll(".body-js"); // array apuntado a los al donde va el contenido de las 3 tarjetas

let getExternalApi = () => {
  fetch("https://jsonplaceholder.typicode.com/posts?id=90&id=92&id=87")
    .then((response) => response.json())
    .then((respuestas) => {
      console.table(respuestas);

      respuestas.forEach((post, index) => {
        titleHtmlCard[index].innerHTML = post.title;
        bodyHtmlCard[index].innerHTML = post.body;
      });
    })
    .catch((error) => console.log(error));
};

getExternalApi();

//info proyecto página

let tituloProject = document.querySelectorAll("#title-project"); //seleccionar donde va el titulo en el dom

let subTituloProject = document.querySelectorAll("#sub-title-project"); //seleccionar donde va el subtitulo en el dom

let bodyProject = document.querySelectorAll("#body-project p"); // seleccionar donde va el body del project

let getExternalApiProject = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((respuestas) => {
      console.table(respuestas);
      tituloProject[0].innerHTML = respuestas.title;
      subTituloProject[0].innerHTML = respuestas.title;
      bodyProject[0].innerHTML = respuestas.body;
    })
    .catch((error) => console.log(error));
};

getExternalApiProject();
