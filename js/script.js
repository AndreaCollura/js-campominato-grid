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
    const playGround = document.getElementById('playground');
    playGround.innerHTML = '';
    const userSelec = document.getElementById('level').value;
    console.log(userSelec); 
    let squareNumb ;
    const bombNumb = 16;
    

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
    const bombList = randomListGen(bombNumb, squareNumb);
    const prList = []
    
    
    for (let i = 1; i <= squareNumb; i++ ){
        const square = boxGen(squareNumb, i);

   /*  devo aggiungere al quadrato l'evento click assegnando una classe se é una bomba o é salvo */
       square.addEventListener('click', function(){
        // come faccio a stabilire quali quadrati sono bombe e quali sono safe?
        // cosa so io dei quadrati? conosco il contenuto = i + il numero dei quadrati
        // sostituisco il numero fisso con la costante creata sopra
        // controllo se i numeri dentro l'array é uguale al l'indice 

        
        if (prList.indexOf(i) > -1  ){
        // aggiungo classe bomba
        }
       } ) 

        

        playGround.appendChild(square);       
    }

}





/* creo funzione che genera un quadrato di grandezza proporzionale al numero dei quadrati con all'interno
il valore del quadrato  */


function boxGen(squareNumb, content){

    let squareRoot = Math.sqrt(squareNumb);
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareRoot} )`;
    square.style.height = `calc(100% / ${squareRoot} )`;
    square.innerText = content;

    return square;


}


function randomListGen(listLenght, numMaX){
    const bombList =  [];
}

