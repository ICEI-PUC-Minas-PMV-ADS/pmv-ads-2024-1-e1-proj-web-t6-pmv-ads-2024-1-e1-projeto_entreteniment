let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".anime-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  var swiper = new Swiper(".action-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  var swiper = new Swiper(".child-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".family-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

// Função para recomendação de filmes aleatórios
function recomendarFilmes() {
  // Categorias de filmes disponíveis
  const categorias = ['Todos', 'Fantasia', 'Aventura', 'Romance'];

  // Loop por cada categoria
  categorias.forEach(categoria => {
      // Seleciona aleatoriamente um filme da categoria
      const filmes = document.querySelectorAll(`#${categoria.toLowerCase()} .swiper-slide`);
      const filmeAleatorio = filmes[Math.floor(Math.random() * filmes.length)];

      // Adiciona a classe 'recomendado' para destacar o filme recomendado
      filmeAleatorio.classList.add('recomendado');
  });
}

// Chamada da função para recomendar filmes ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  recomendarFilmes();
});

function search(){
  let input = document.getElementById('searchbar').value 
  input = input.toLowerCase()
  let x = document.getElementsByClassName('film')

  for(i= 0; i < x.length; i++){

    if(!x[i].innerHTML.toLowerCase().includes(input)){
      x[i].style.display = "none"
    } else{
      x[i].style.display = "list-item"
    }

  }
