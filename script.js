let email = document.getElementById('email')
let senha = document.getElementById('password')
let button = document.getElementById('send')

button.addEventListener('click', function(){
    if(email.value == 'tryber@teste.com' & senha.value == '123456') {
        window.alert("Olá, Tryber!")
    } else {
        window.alert('Email ou senha inválidos.')
    }
})
