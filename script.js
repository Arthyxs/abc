// Alternar exibição da navbar ao clicar no botão de menu
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

// Alternar tema
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Carrossel
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-image');

let currentIndex = 0;

// Exibir/ocultar menu
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Fechar navbar ao clicar fora
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && event.target !== menuToggle) {
    navbar.classList.remove('active');
  }
});

// Alternar entre temas claro e escuro
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  themeToggle.textContent = body.classList.contains('light-theme')
    ? 'Tema Escuro'
    : 'Tema Claro';
});

// Atualizar o carrossel para mostrar a imagem correta
function updateCarousel() {
  const imageWidth = images[0].clientWidth; // Largura de cada imagem
  const offset = -currentIndex * imageWidth; // Calcula o deslocamento
  carouselImages.style.transform = `translateX(${offset}px)`;
  carouselImages.style.transition = "transform 0.3s ease-in-out"; // Transição suave
}

// Botão anterior no carrossel
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Índice cíclico
  updateCarousel();
});

// Botão próximo no carrossel
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // Índice cíclico
  updateCarousel();
});

// Ajustar largura do carrossel ao redimensionar a janela
window.addEventListener('resize', updateCarousel);

// Inicializar o carrossel
updateCarousel();