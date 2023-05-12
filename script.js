// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//  il prezzo del biglietto è definito in base ai km (0.21 € al km)
//  va applicato uno sconto del 20% per i minorenni
//  va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana in pagina (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


// * tramite il prompt stampo sulla pagina
// * il numero di chilometri che l'utente digita

const quantityKm = parseInt(prompt('Inserire quanti kilometri percorrere: '));
document.getElementById('percorso').innerHTML += quantityKm;

// * tramite il prompt stampo sulla pagina
// * l'età del passeggero che l'utente digita

const passengerAge = parseInt(prompt('Inserire l\'età del passeggero/a: '))
document.getElementById('età_persona').innerHTML += passengerAge;


const pricePerKm = 0.21;

const totalPrice = pricePerKm * quantityKm + '€';
const totalPrice20 = (pricePerKm * quantityKm) - ((20 / 100) * totalPrice) + '€';
const totalPrice40 = (pricePerKm * quantityKm) - ((40 / 100) * totalPrice) + '€';


// * applico lo sconto ai minorenni e agli over 65
if(passengerAge < 18){
     document.getElementById('prezzo_totale').innerHTML += totalPrice20;

 } else if(passengerAge >= 65){
    document.getElementById('prezzo_totale').innerHTML += totalPrice40;
} else{
    document.getElementById('prezzo_totale').innerHTML += totalPrice;
}

