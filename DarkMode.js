            // Obtener el botón y el icono
            const boton = document.querySelector('#darkModeToggle');
            const icono = boton.querySelector('i');
            // Agregar un evento de clic al botón
            boton.addEventListener('click', () => {
                // Alternar entre las clases fa-sun y fa-moon del icono
                icono.classList.toggle('fa-sun');
                icono.classList.toggle('fa-moon');
            });

            // Obtener el botón de alternar el tema oscuro
            var darkModeToggle = document.getElementById("darkModeToggle");

            // Agregar evento de clic al botón de alternar el tema oscuro
            darkModeToggle.addEventListener("click", function () {
                // Alternar la clase .dark-mode en el elemento body
                document.body.classList.toggle("dark-mode");
            });
            