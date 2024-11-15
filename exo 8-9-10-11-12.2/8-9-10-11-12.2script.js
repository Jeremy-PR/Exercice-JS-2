// exercice 8

// const age = prompt("Quel est votre âge");

// if ( age >= 18 ){
// alert("vous etes majeur");
// }else {
//     alert("vous êtes mineur");
// }




// exercice 9 : 


// let nombre = parseInt(prompt("saisissez un nombre:"));


// for (let i = 1; i <= 10; i++) {
   
// }



// code elodie : 

// const num = parseInt(prompt("Entrez un nombre"));
// let tablemulti = []

// for(let i = 0; i <=10; i += 1){

//     const result = i * num;

// tablemulti.push(${num} * ${i} = ${result});

// }
// alert("Voici la table de multiplication de votre nombre :  " + tablemulti.join("\n")  );





// exercice 10


// const mot = prompt("saisir un mot :");


// for (let i = 0; i < mot.length; i++) {
//     alert(mot[i]);
// }



// correction exercice 10

// const word = prompt('Enter a word');

// let formattedWord = '';
// for (let i = 0; i < word.length; i++) {
//     formattedWord += word[i] + '\n';
// }
// alert(formattedWord);







// exercice 11 
// let nombre = parseInt(prompt("saisir un nombre compris entre 1 et 10 :"));
// if (nombre >= 1 && nombre <= 10) {
   
//     if (nombre < 5) {
//         alert("Le nombre saisi est inférieur à 5");
//     } else if (nombre === 5) {
//         alert("Le nombre saisi est égal à 5");
//     } else {
//         alert("Le nombre saisi est supérieur à 5");
//     }
// }





// correction exo 11

// let number = prompt("Veuillez saisir un nombre compris entre 1 et 10:");

// if (number < 1 || number > 10) {
//     alert("Le nombre saisi n'est pas compris entre 1 et 10.");
// } else if (number < 5) {
//     alert("Le nombre saisi est inférieur à 5.");
// } else if (number == 5) {
//     alert("Le nombre saisi est égal à 5.");
// } else {
//     alert("Le nombre saisi est supérieur à 5.");
// }








// exercice 12 correction 

// function carre(nombre) {
//     return nombre ** 2;
// }

// let nombre = prompt("Veuillez saisir un nombre:");

// let resultat = carre(Number(nombre));

// alert("Le carré de " + nombre + " est " + resultat);


