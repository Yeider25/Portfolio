let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}


function descargarCV() {
    var url = "/Certificados/Hoja de vida (2).pdf"; // Ruta del archivo que se quiere descargar
    var link = document.createElement('a');
    link.href = url;
    link.download = "/Certificados/Hoja de vida (2).pdf"; // Nombre del archivo que se descargará
    link.click();
}

function sendMessage() {
    function sendMessage() {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        fetch('http://localhost:8000/send-message', { // Cambia el puerto y agrega /send-message
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, phone, email, subject, message })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert('Mensaje enviado con éxito');
                } else if (data.error) {
                    alert('Error: ' + data.error); // Agregué un mensaje de error
                }
            })
            .catch(error => {
                console.error('Error al enviar el mensaje:', error);
                alert('Error al enviar el mensaje: ' + error.message); // Mensaje de error para el usuario
            });
    }