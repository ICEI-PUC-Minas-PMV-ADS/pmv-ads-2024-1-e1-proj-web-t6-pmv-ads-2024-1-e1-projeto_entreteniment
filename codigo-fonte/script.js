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
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "andre" && senha == "andre1402") {
        alert('Sucesso');
        location.href = "tela-incial/inicial.html";
    } else if (login == "daniel" && senha == "daniel2024") {
        alert('Sucesso');
        location.href = "tela-incial/inicial.html";
    }else{
        alert('Usuário ou senha incorretos');
        location.href == "index.html"

    }   

}
