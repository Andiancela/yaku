
function backToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.remove("hide");
    } else {
        backToTopBtn.classList.add("hide");
    }
}

function backToTop() {
    // Agregar animación de desplazamiento suave hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}