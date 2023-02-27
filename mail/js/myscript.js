const elencoEmail =['pippo@gmail.com','pluto@gmail.com','topolino@gmail.com','paperino@gmail.com','minnie@gmail.com',]

const email = prompt('Inserisci la tua e-mail');

let login = 'false';

for (let i = 0; i < elencoEmail.length; i++){
    if(email == elencoEmail[i]){
        login ='true';
    }
}

if (login == 'true') {
    console.log('login effettuato');
} else{
    console.log('email errata');
}