const login = document.getElementById('submit')
const email = document.getElementById('email').value





function logado (){

    const email = document.getElementById('email').value

    

    if(email.length>1 ){
        alert('logado')
        return true
    }else{
        alert('preencha os campos')
        return false
    }

    

}






