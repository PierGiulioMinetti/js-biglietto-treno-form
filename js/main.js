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

// CALCOLO BIGLIETTO
btnGenera.addEventListener('click', function() {
   var nome = document.getElementById("nome").value;
    console.log(nome);
    var kmDapercorrere = document.getElementById("km").value;
    console.log(kmDapercorrere);
    var fasciaEta = document.getElementById("fascia-eta").value;
    console.log(fasciaEta);

    // CALCOLO COSTO
    var prezzoKm = 0.21;
    var costoBiglietto = prezzoKm * kmDapercorrere;
    var offerta = 'Biglietto Standard';

    // SCONTO 
    if  ( fasciaEta == 'minorenne') {
        costoBiglietto -= costoBiglietto * 0.2;
        offerta = 'Offerta Minorenne';
    } else if ( fasciaEta == 'over 65') {
        costoBiglietto -= costoBiglietto * 0.4;
        offerta = 'Offerta Over 65';
    }


        costoBiglietto = costoBiglietto.toFixed(2) + "€" 

        // CARROZZA + NUMERO CP
        var numeroCarrozza = Math.floor(Math.random() * 9) + 1; 
       var numeroCp = Math.floor(Math.random() * (10000 - 9000) )+ 9000 ; 

       document.getElementById('nome-passeggero').innerHTML = nome;
       document.getElementById('offerta-applicata').innerHTML = offerta;
       document.getElementById('carrozza').innerHTML = numeroCarrozza;
       document.getElementById('codice-cp').innerHTML = numeroCp;
       document.getElementById('costo').innerHTML = costoBiglietto;
});

