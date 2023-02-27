const elencoEmail =['pippo@gmail.com','pluto@gmail.com','topolino@gmail.com','paperino@gmail.com','minnie@gmail.com',]

const email = prompt('Inserisci la tua e-mail');

for (let i = 0; i < elencoEmail.length; i++){
    if(email === elencoEmail[i]){
        console.log('Login effettuato');
    }else {
        console.log('email sbagliata')
    }
}





