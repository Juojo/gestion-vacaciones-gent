document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        const dni = document.getElementById("dni").value;
        const password = document.getElementById("password").value;

        const userData = {
            dni,
            password,
        };

        // Realiza una solicitud POST al servidor para iniciar sesión
        axios.get(`http://localhost:5000/api/selectLogin?dni=${dni}&password=${password}`, userData)
            .then(response => {
                console.log(response.data.estado);
                if (response.data.estado === "aceptado") {
                    console.log("Inicio de sesión exitoso:", response.data);
                    if (response.data.area === "empleado") {
                        window.open("https://docs.google.com/forms/d/e/1FAIpQLSeLB_zL6l4tUGSc9UlN4F7VEOiuKTF3uV96grW-2u3_3XQDZg/viewform");
                    } else if (response.data.area === "subjefe") {
                        window.open("https://docs.google.com/forms/d/e/1FAIpQLScN5B4FpmINhq1raIZtGBg7WqceY9Q0lUfsHaNWl9-QaBvD2Q/viewform");
                    } else if (response.data.area === "jefe") {
                        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdgr-A3MUcZJgS5vhZXVoJjfxSnqfv5CuPQ_D5c6azLwd1A3g/viewform");
                    }
                } else {
                    alert("El usuario no existe o la contraseña ingresada es incorrecta.")
                }
                
            })
            .catch(error => {
                console.error("Error al iniciar sesión:", error);
                alert("Error al iniciar sesión, asegurate de que el servidor y la base de datos esten siendo ejecutadas.");
                // Puedes mostrar un mensaje de error en tu página si lo deseas
            });
    });
});
