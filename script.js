document.addEventListener('DOMContentLoaded', function () {
    const tapa = document.querySelector('.tapa');
    const contenido = document.querySelector('.contenido');

    // Escuchar clic sobre la tapa
    tapa.addEventListener('click', function () {
        // Alternar la clase "mostrar" para que el contenido aparezca o desaparezca
        contenido.classList.toggle('mostrar');
    });
});
