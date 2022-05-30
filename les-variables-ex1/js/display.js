/*Affichage des variables*/
//A ne pas modifier!
const exercice = ()=>{
    const display = document.getElementById("display");
    const nameDisplay = document.getElementById("nameDisplay");
    const jobDisplay = document.getElementById("jobDisplay");
    const ageDisplay = document.getElementById("ageDisplay");
    const posteDisplay = document.getElementById("posteDisplay");
    nameDisplay.innerHTML= prenom + " " + nom;
    jobDisplay.innerHTML+="Métier exercé : " + job;
    ageDisplay.innerHTML+="Age : " + age;
    if(working){
        posteDisplay.innerHTML+="Toujours en poste"
    }
    if(resultat){
        moyenneDisplay.innerHTML += "Moyenne d'âge : " + resultat;
    }
}

try{
    exercice();
} catch(e){

}