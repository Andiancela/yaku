//Cambiar el color del BackToTop button
const Up = document.querySelector("#backToTopBtn")

// Obtener el botón y el icono
const boton = document.querySelector('#darkModeToggle');
const icono = boton.querySelector('i');
// Agregar un evento de clic al botón
boton.addEventListener('click', () => {
    // Alternar entre las clases fa-sun y fa-moon del icono
    icono.classList.toggle('fa-sun');
    icono.classList.toggle('fa-moon');
    Up.classList.toggle("ModeDark")
    Up.classList.toggle("ModeDarkNo")
});

// Obtener el botón de alternar el tema oscuro
var darkModeToggle = document.getElementById("darkModeToggle");

// Agregar evento de clic al botón de alternar el tema oscuro
darkModeToggle.addEventListener("click", function () {
    // Alternar la clase .dark-mode en el elemento body
    document.body.classList.toggle("dark-mode");
});
// Obtener el estado actual del modo oscuro
let darkMode = localStorage.getItem('darkMode');

// Función para activar el modo oscuro
const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

// Función para desactivar el modo oscuro
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}

// Comprobar si el modo oscuro está activado al cargar la página
if (darkMode === 'enabled') {
    enableDarkMode();
}

// Evento para intercalar entre modos al hacer clic en un botón
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // El tema oscuro está activado en el navegador del usuario
    // Aplicar el modo oscuro en tu sitio web
    document.body.classList.add('darkmode');
}

const toggleButton = document.querySelector('.toggle-button');
const body = document.querySelector('body');

// Comprobar si hay una preferencia guardada en localStorage
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Guardar la preferencia del usuario en localStorage
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});