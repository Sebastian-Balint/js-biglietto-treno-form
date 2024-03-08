// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// oppure applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.



//REGISTRARE IL SUBMIT
const submitElement = document.getElementById('submit');//?


//seleziona sezione di biglietto e dati passeggero nel html
const biglietto = document.querySelector('.biglietto')
const datiPasseggero = document.querySelector('div.biglietto .col')


//funzione da svolgersi al click sul pulsante
submitElement.addEventListener('click', function (){ 
    
    // CHIEDERE IL NOME E COGNOME
    const getNomeCognome = document.getElementById('nome-cognome'); //?
    const nomeCognome = getNomeCognome.value; //stringa

    // inserisce nome e cognome all'interno del HTML

    datiPasseggero.innerHTML += `
    <div>
        <span>${nomeCognome}</span>
    </div>
    <br>
    `

    //prende le variabili KM ed ETA' dal HTML

    const inputKm = document.getElementById('km'); // stringa
    const inputEta = document.getElementById('age'); // stringa
   
    //rende le variabili number

    km = parseInt(inputKm.value); // number
    eta = parseInt(inputEta.value); // number

    //stampa le due variabili 
    console.log(km + ' km',eta); // stringa

    // DEFINIRE COEFFICIENTE DEL PREZZO PER KM 

    const coeffKm = 0.21; // numero

    // CALCOLO PREZZI BIGLIETTI

    let prezzoBiglietto = parseFloat(km * coeffKm);

    //posizione html di offerta,prezzo e carrozza
    const offerta = document.getElementById('offerta');
    const displayPrezzo = document.getElementById('prezzo');
    const carrozza = document.getElementById('carrozza');
    carrozza.innerHTML += `
        <span>${Math.floor(Math.random()* 100) + 1}</span>
        `

    // SCONTO MINORENNI 

    //Se minore di 18 allora
    if (eta < 18){

        //calcola prezzo biglietto minori e printa
        let scontoMinori = (prezzoBiglietto - (prezzoBiglietto * (20/100)));
        console.log('Prezzo minori ' + scontoMinori.toFixed(2));

        //inserisce tipologia di offerta all'interno del HTML
        offerta.innerHTML += `
        <span> Prezzo Minori </span>
        `

        //inserisce prezzo scontato nel HTML
        displayPrezzo.innerHTML += `
        <span>${scontoMinori.toFixed(2)}</span>
        `

    }

    // SCONTO PER OVER 65

    //Se maggiore di 65 allora
    else if (eta > 65){

        //calcola prezzo biglietto over 65 e printa
        let scontoOver = (prezzoBiglietto - (prezzoBiglietto * (40/100)));
        console.log('Prezzo over 65 ' + scontoOver.toFixed(2));

        //inserisce tipologia di offerta all'interno del HTML
        offerta.innerHTML += `
        <span> Prezzo Anziani </span>
        `

        //inserisce prezzo scontato nel HTML
        displayPrezzo.innerHTML += `
        <span>${scontoOver.toFixed(2)}</span>
        `
    }

    // PREZZO NON SCONTATO

    //Se nessuna delle due citate sopra allora
    else {

        //printa prezzo standard
        console.log('Prezzo intero ' + prezzoBiglietto.toFixed(2));

        //inserisce tipologia di offerta all'interno del HTML (nessuna in questo caso)
        offerta.innerHTML += `
        <span> Prezzo Standard </span>
        `

        //inserisce prezzo NON scontato nel HTML
        displayPrezzo.innerHTML += `
        <span>${prezzoBiglietto.toFixed(2)}</span>
        `
    }
})

