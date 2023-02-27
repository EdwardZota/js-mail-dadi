const mail = document.getElementById('mail');

const submit = document.getElementById('submit');

const elencoEmail = document.getElementById('elenco-email');

submit.addEventListener('click',
    function(){
        elencoEmail.innerHTML= mail.value;
    }

)