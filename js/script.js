// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.




// inizio prendendo il submit del bottone

const difForm = document.querySelector('form');

// assesgno avento al bottone

difForm.addEventListener('submit', play);


/* creo funzione da attacare all'evento */



function play(e){

    e.preventDefault();

    const userSelec = document.getElementById('level').value;
    console.log(userSelec); 
    let squareNumb ;

    switch (userSelec){
        case 'easy':
            squareNumb = 100;
            break;
        case 'medium':
            squareNumb = 81;
            break;
        case 'hard':
            squareNumb = 49;
            break;
    } 

    const playGround = document.getElementById('playground');


}





/* creo funzione che genera un quadrato di grandezza proporzionale al numero dei quadrati con all'interno
il valore del quadrato  */


function boxGen(squareNumb, content){

   const square = document.createElement('div');
   

    
    

}




