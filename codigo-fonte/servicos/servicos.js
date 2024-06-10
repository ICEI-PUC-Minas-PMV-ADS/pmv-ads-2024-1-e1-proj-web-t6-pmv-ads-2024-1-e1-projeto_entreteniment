const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');

});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');

});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');

});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');

});

function logar(){
    var login = document.getElementById('entrar').value;
    var senha = document.getElementById('senhaentrar').value;
    
    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "/codigo-fonte/area-sobre/sobre.html";
    }else{
        alert('Usuário ou senha incorretos');
    }
}
