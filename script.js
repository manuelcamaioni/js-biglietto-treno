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
document.getElementById('percorso').innerHTML += quantityKm + 'km';

// * tramite il prompt stampo sulla pagina
// * l'età del passeggero che l'utente digita

const passengerAge = parseInt(prompt('Inserire l\'età del/la passeggero/a: '))


if(passengerAge == 1){
    document.getElementById('età_persona').innerHTML += passengerAge + ' anno';
}else{
    document.getElementById('età_persona').innerHTML += passengerAge + ' anni';
}

let result;

if(isNaN(passengerAge) || isNaN(quantityKm)){
    result = 'Errore nella digitazione';
    window.alert(result);
    throw new Error('Errore nella digitazione');
}

const pricePerKm = 0.21;

const totalPrice = pricePerKm * quantityKm;
let totalPrice20;
let totalPrice40;
let showDecimals;

// * applico lo sconto ai minorenni e agli over 65
if(passengerAge < 18){
        totalPrice20 = (pricePerKm * quantityKm) - ((20 / 100) * totalPrice);
        showDecimals = totalPrice20.toFixed(2);
        document.getElementById('prezzo_totale').innerHTML += showDecimals + '€';

 } else if(passengerAge >= 65){
        totalPrice40 = (pricePerKm * quantityKm) - ((40 / 100) * totalPrice);
        showDecimals = totalPrice40.toFixed(2);
        document.getElementById('prezzo_totale').innerHTML += showDecimals + '€';
} else{
        showDecimals = totalPrice.toFixed(2)
        document.getElementById('prezzo_totale').innerHTML += showDecimals + '€';
    }

