/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

console.log("Hola Mundo");

// llamando una external PUBLIC API - jsonplaceholder

let titleHtmlCard = document.querySelectorAll(".title-js"); //array apuntando a los 3 titulos en html
let bodyHtmlCard = document.querySelectorAll(".body-js"); // array apuntado a los al donde va el contenido de las 3 tarjetas

let getExternalApi = () => {
  fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=3")
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

// Menu hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(
  (n) => n.addEventListener("click"),
  () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
);
