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

ready(function () {
  const link = document.querySelector("a");
  console.log(link);
  link.textContent = "MDN home page";
  link.href = "http://developer.mozilla.org";

  const pELement = document.getElementById("monId");
  console.log(pELement);

  const listeLi = document.querySelectorAll("li");
  console.log(listeLi);

  const liSupA5 = [];
  // on boucle sur le nodeList et on converti chaque TexteContent en Integer et on le compare
  //   à 5. Q'il est sup à 5 alors, on range le li dans le tableau liSuoA5
  for (let el of listeLi) {
    if (parseInt(el.textContent) > 5) {
      liSupA5.push(el);
    }
  }
  console.log(liSupA5);

  // on récupère le dernier li de la liste:
  const lastLi = document.querySelector("li:last-of-type");
  console.log(lastLi);

  //on cree une nouvelle section dans le document:
  //cette section contiendra un element P.
  //qui lui meme contiendra un textNode.
  const newSection = document.createElement("section");
  const newP = document.createElement("p");
  const txt = document.createTextNode("I love javascript !!");
  newP.appendChild(txt);
  newSection.appendChild(newP);
  // clonage de la nouvelle section
  const sectionClone = newSection.cloneNode(true);

  // intégration au html des nouveaux elements de notre DOM
  document.body.appendChild(newSection);
  document.body.appendChild(sectionClone);

  //suppression d'un element du DOM / synchro du HTML
  sectionClone.remove();

  //manipulation du style - ligne ( BAD practice !!)
  newSection.style.backgroundColor = "#FF0000";
  newSection.style.color = "#FFFF";
});
