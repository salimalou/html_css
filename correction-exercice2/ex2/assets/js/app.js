function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != "loading") callback();
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
  // IE <= 8
  else
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
}

// lorsque la fonction ready a fini de s'assurer que
// le DOM a été correctement chargé, alors notre programme
// commence a être exécuté:
ready(function () {
  // on recupere les éléments html du DOM
  // dont on aura besoin:
  const msg = document.querySelector(".post-msg");
  const restant = document.querySelector(".restant");
  const btn = document.querySelector(".submit-btn");
  const notif = document.querySelector(".notif");
  const form = document.querySelector("#post-form");

  // console.log(msg);

  // on pose un ecouteur pour l'évènement 'keyup'
  // sur le textarea. Cet évènement!!! (propriet) (parametre) est déclenché
  // a chaque frappe de text dans le textarea:
  msg.addEventListener("keyup", function (event) {
    // on calcule le nombre de caractères restant
    let caracteresRestants = 300 - parseInt(this.value.length);
    // console.log(caracteresRestants);

    // on affiche le nombre de caractères restants
    // dans la div.restant
    restant.innerHTML = caracteresRestants;

    // on teste le nombre de caractères restants:
    if (caracteresRestants > 20) {
      // s'il est supérieur à 20 caractères
      //on vide le stgyle en ligne de la div.restant
      restant.setAttribute("style", "");
      // on supprime les bordures rouge du textarea
      msg.classList.remove("red-border");
      // si la zone de notif n'a pas la classe d-none
      // on l'ajoute afin de faire disparaitre les cette
      // zone
      if (![...notif.classList].includes("d-none")) {
        notif.classList.add("d-none");
      }
      // on reactive le bouton
      btn.removeAttribute("disabled");
    } else if (caracteresRestants >= 0 && caracteresRestants <= 20) {
      // si le nombre de caractères restants est inférieur
      // ou égal à 20 mais supérieur ou égal à zéro,
      // on passe la couleur de la police à orange dans
      // la div.restant
      restant.style.color = "orange";
      // on s'assure que les bordures du textarea
      // ne sont pas rouges
      msg.classList.remove("red-border");
      // si la zone de notif n'a pas la classe d-none
      // on l'ajoute afin de faire disparaitre les cette
      // zone
      if (![...notif.classList].includes("d-none")) {
        notif.classList.add("d-none");
      }
      // on reactive le bouton
      btn.removeAttribute("disabled");
    } else {
      // si le nombre de caractères restants est inférieur
      // à zéro:
      // la couleur de police de la div.restant passe
      // à rouge:
      restant.style.color = "red";
      // on grise le bouton
      btn.setAttribute("disabled", "true");
      // on met des bordures rouges au textarea
      msg.classList.add("red-border");
      // on fait apparaitre la zone de notif
      notif.classList.remove("d-none");
      // on donne a la zone de notif la classe d'erreur
      notif.classList.add("notif-error");
      // on insere le message d'ercreur dans la zone de
      // notif
      notif.innerHTML = "Attention Votre texte est trop long!";
    }
  });
  // pour detecter l'envoi du formulaire, on a deux
  // possibilités au choix:
  // poser un ecouteur pour l'évènement 'submit' sur le
  // formulaire,
  // ou poser un ecouteur pour l'évènement 'click' sur le
  // bouton d'envoi du formulaire

  /* 
    form.addEventListener('submit', function(event){
        event.preventDefault();
        ... instructions ....
    });
    */

  btn.addEventListener("click", function (event) {
    event.preventDefault();
    let message = msg.value;
    console.log("message:", message);
    // si l'utilisateur n'a pas tapé de texte
    // on envoie une notif d'erreur
    if (!message.length) {
      // on vide l'attribut 'class' de la zone de notif
      notif.setAttribute("class", "");
      // on ajoute la classe error à la zone de notif
      notif.classList.add("notif-error");
      // on insere le message d'erreur
      notif.innerHTML = "Veuillez écrire un message !";
      // on affiche les bordures du textarea en rouge
      msg.classList.add("red-border");
      // on grise le bouton d'envoi
      btn.setAttribute("disabled", "true");
    } else {
      // sinon on grise le bouton d'envoi
      btn.setAttribute("disabled", "true");
      //on vide l'attribut class de la zone de notif
      notif.setAttribute("class", "");
      // on affecte la classe success a la zone de notifs
      notif.classList.add("notif-success");
      // on insere le message de succes
      notif.innerHTML = "Message correctement envoyé !";

      // on defini la fonction différé de 4 secondes:
      window.setTimeout(function () {
        //après 4 secondes
        //on cache la zone de notif
        notif.classList.add("d-none");
        // on enleve la classe success de la zone de notif
        notif.classList.remove("notif-success");
        // on reinitialise le contenu du textarea
        msg.value = "";
        //on reinitialise le nombre de caractères restants
        restant.innerHTML = 300;
        // on vide l'attribut style en ligne de la
        //div.restant
        restant.setAttribute("style", "");
        // on reactive le bouton d'envoi
        btn.removeAttribute("disabled");
      }, 4000);
    }
  });
});
