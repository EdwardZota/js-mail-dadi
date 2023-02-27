const numeroGiocatore = Math.floor(Math.random() * 6 + 1 );
console.log(numeroGiocatore);

const numeroComputer = Math.floor(Math.random() * 6 + 1 );
console.log(numeroComputer);

if(numeroGiocatore > numeroComputer){
    console.log('Hai vinto!');
} else if(numeroGiocatore == numeroComputer){
    console.log('Hai pareggiato!')
}else {
    console.log('Hai perso!')
}