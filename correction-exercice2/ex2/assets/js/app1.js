const clique = document.querySelector(".bouton");
const img = document.querySelector(".d_none");

clique.addEventListener("click", function () {
  if (img.classList.contains("d-non")) {
    img.classList.remove("d-non");
    clique.innerHTML = "faire disparaitre l'image";
  } else {
    img.setAttribute("class", "d-none");
    clique.innerHTML = "afficher l'image";
  }
});
