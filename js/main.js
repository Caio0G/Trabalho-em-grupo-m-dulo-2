// declarando as constantes a serem utilizadas


const emailEl = document.querySelector('#email');
const botao=document.querySelector('.botao')
const form = document.querySelector('#signup');
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

form.addEventListener('submit', (event) => {

    // previne que o formulário fique recarregando
    event.preventDefault();
    event.preventDefault();
    // validation
        isEmailValid = checkEmail();
        
    
    let isFormValid = isUsernameValid && isEmailValid && isPasswordStrong && isPasswordValid;

    if (isFormValid){

    }

});

function emailValidate(){
    if(email.Regex.test(campos[1].value))
    {
        setError(1);
    }
    else
{
    removeError(1);
}
}



const isEmailValid = (email) => {

    // função para testar se email é válido

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};



const showError = (input, message) => {

    // get the form-field element
    const formField = input.parentElement;

    // add the error class

    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message

    const error = formField.querySelector('small');
    error.textContent = message;

};

const showSuccess = input => {
    
    // get the form-field element
    const formField = input.parentElement;
    // remove the error class
    formField.classList.remove('error');
        // add the error class
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = 'Valid';

}   



const checkEmail = () => {

    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)){
         
        showError(emailEl, 'EMAIL NAO PODE FICAR EM BRANCO');
        
    } else if (!isEmailValid(email)){

        showError(emailEl, 'Email INVALIDO');
    } else {
        showSuccess(emailEl);
        valid = true;
    }

    return valid;


};  




// REAL TIME FEEDBACK

form.addEventListener('input', e => {
    switch(e.target.id){
        
        case 'email':
            checkEmail();
            break;
        
    }
});

const debounce = (fn, delay = 500) => {

    let timeoutId;

    return (...args) => {
        // cancela o tempo anterior
        if (timeoutId){
            clearTimeout(timeoutId);
        }
        // estabelece um novo prazo

        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

function abrirMensagem (){


        const email = document.getElementById('email').value
    
        
    
        if(email.length>1 ){
            alert('o link de redefinição de senha foi enviado')
            return true
        }else{
            alert('preencha os campos')
            return false
        }
    
        


        
}
    


