window.onload = function() {
    let sliderImages = document.querySelectorAll('.slider li');
    let currentImageIndex = 0;
    let timeInterval = 5000; 

    function changeImage() {
        sliderImages[currentImageIndex].classList.remove('active');
        sliderImages[currentImageIndex].classList.remove('zoom');

        currentImageIndex++;

        if (currentImageIndex == sliderImages.length) {
            currentImageIndex = 0;
        }

        sliderImages[currentImageIndex].classList.add('active');
        sliderImages[currentImageIndex].classList.add('zoom');
    }

    setInterval(changeImage, timeInterval);
}

//Control de la Validacion
document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); 

    // Obtén los valores del formulario
    var nombre = document.getElementById('Nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('Telefono').value;
    var entrada = document.getElementById('en').value;

    // Valida los campos del formulario
    if (nombre === '' || email === '' || telefono === '' || entrada === '') {
        document.getElementById('Resultados').innerText = alert('Registro Exitoso');;
    } else {
        // Muestra el resumen del registro en la sección de detalles del evento
        document.getElementById('event-details').innerHTML = `
            <div class="event-detail">
                <h2>Felicidades Registro Exitoso</h2>
                <h3>El evento Comenzara segun la Hora Acordada el 1ro de Octubre</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefono:</strong> ${telefono}</p>
                <p><strong>Tipo de Entrada:</strong> ${entrada}</p>
            </div>
        `;
        alert('Registro Exitoso');
    }
});
