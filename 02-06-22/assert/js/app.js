const texte = document.querySelector("textarea");
// console.log(texte);
// console.log(texte.value);
// var caracteresRestant = 300 - texte.value.length;
// console.log(caracteresRestant);
// document.querySelector(".caractere_compte").innerHTML = caracteresRestant;

texte.addEventListener("quyup", function (e) {
  //   console.log(this.Text.length);
  let caracteresRestant = 300 - this.Text.length;
  document.querySelector(".caractere_compte").innerHTML = caracteresRestant;
});
