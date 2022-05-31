const display = document.getElementById("display");
const displayCounter = document.getElementById("displayCount");
const displayPyramid = document.getElementById("displayPyramid");
const displayGrid = document.getElementById("displayGrid");

function afficheStars(texte){
    display.innerHTML+= texte;
}
function afficheCount(texte){
    displayCounter.innerHTML+= texte;
}
function affichePyra(texte){
    displayPyramid.innerHTML+= texte;
}
function afficheGrid(texte){
    displayGrid.innerHTML+= texte;
}