// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//Chiedere all'utente il numero di km che desidera percorrere
const km = parseInt(prompt("Quanti km devi percorrere?"));

//Chiedere all'utente quanti anni ha
const age = parseInt(prompt("Quanti anni hai?"));
console.log(km, age);

//Calcoare il prezzo del biglietto 
const initialTicketPrice = km * 0.21;
console.log(initialTicketPrice);

//Se l'utente ha meno di 18 anni applicare lo sconto del 20% E se l'utente ha più di 65 anni applicare uno sconto del 40%
let ticketPrice = "";
if (age <= 17) {
    ticketPrice = initialTicketPrice * 0.8;
} else if (age => 65){
    ticketPrice = initialTicketPrice * 0.6; 
}
console.log(ticketPrice);

//Prezzo finale
document.getElementById("km").innerHTML = km;
document.getElementById("age").innerHTML = age;
document.getElementById("finalPrice").innerHTML = ticketPrice.toFixed(2);