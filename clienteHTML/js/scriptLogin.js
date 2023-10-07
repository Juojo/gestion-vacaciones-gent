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
                    axios.get(`http://localhost:5000/api/esJefe?empleado=${dni}`, userData)
                        .then(response => {
                            if (response.data.estado === "aceptado") {
                                window.location.href = "../paginas/jefe.html";
                            } else {
                                window.location.href = "../paginas/pedirvacas.html";
                            }
                        })
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
