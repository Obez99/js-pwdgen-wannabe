alert("Benvenuto nel mio generatore di password!");

const myName = prompt("Per cominciare, come ti chiami?");
const mySurname = prompt("Che bel nome! Adesso ho bisogno del tuo cognome.");
const myColor = prompt("Perfetto! Ora dimmi... Qual'è il tuo colore preferito?");
let myPassword = myName+mySurname+myColor+"21";

alert("Fantastico! Fammi pensare...");
alert("Attenti ancora un momento...");

/*Alternative method 1*/
//alert("Ce l'ho! La tua password è: " + myName + mySurname + myColor + "21");

/*Alternative method 2*/
//alert(`Ce l'ho! La tua password è: ${myName}${mySurname}${myColor}21`);

alert("Ce l'ho! La tua password è: " + myPassword);