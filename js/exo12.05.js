// var heures = Number(prompt("l'heurs"));
// var minutes = Number(prompt("minutes"));
// var secondes = Number(prompt("secondes"));

// if (
//   (heures) =>
//     00 &&
//     heures <= 23 &&
//     minutes >= 00 &&
//     minutes <= 59 &&
//     secondes <= 00 &&
//     secondes >= 59
// ) {
//   secondes++;
//   if (secondes === 60) {
//     secondes = 0;
//     minutes++;
//     if (minutes === 60) {
//       minutes = 0;
//       heures++;
//       if (heures === 24) {
//         heures = 0;
//       }
//     }
//   }
// }
// document.write(heures + "h" + minutes + "m" + secondes + "s");

// var heurs = Number(prompt("lheurs"));
// var minutes = Number(prompt("minutes"));
// var secondes = Number(prompt("seconde"));

// if (
//   heurs >= 00 &&
//   heurs <= 23 &&
//   minutes >= 00 &&
//   minutes <= 59 &&
//   secondes >= 00 &&
//   secondes <= 59
// ) {
//   secondes++;
//   if (secondes === 60) {
//     minutes++;
//     secondes = 0;
//     if (minutes === 60) {
//       heurs++;
//       minutes = 0;
//       if (heurs === 23) {
//         heurs = 0;
//       }
//     }
//   }
// }
// document.write(heurs + "h" + minutes + "m" + secondes + "s");

for (var i = 1; i <= 10; i++) {
  if (i === 10) {
    document.write(i);
  } else {
    document.write(i + "&nbsp" + "-" + "&nbsp");
  }
}
