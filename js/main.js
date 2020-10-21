/*
Come visto insieme durante la lezione in classe creiamo un finto biglietto del treno con:
Nome passeggero
Fascia eta selezionata dall'utente
Codice treno CP (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
*/


// DATI UTENTE
var bigliettoGenerato = document.getElementById("biglietto");
var btnGenera = document.getElementById("genera");
var annulla = document.getElementById("annulla");

// EVENTI

btnGenera.addEventListener('click', function() {
   var nome = document.getElementById("nome").value;
    console.log(nome);
});