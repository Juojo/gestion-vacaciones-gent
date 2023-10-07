document.addEventListener("DOMContentLoaded", function () {
    const fetchButton = document.getElementById("fetch-button");

    fetchButton.addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const dni = document.getElementById("dni").value;
        const telefono = document.getElementById("telefono").value;
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const direccion = document.getElementById("direccion").value;
        const localidad = document.getElementById("localidad").value;
        const contrasena = document.getElementById("psw").value;
        const area = document.getElementById("area").value;
        const fechaIngreso = document.getElementById("fecha-ingreso").value;

        const userData = {
            email,
            dni,
            telefono,
            nombre,
            apellido,
            direccion,
            localidad,
            contrasena,
            area,
            fechaIngreso,
        };

        axios.post("http://localhost:5000/api/crearUsuario", userData)
            .then(response => {
                console.log("Usuario creado con éxito:", response.data);
                window.location.href = "../paginas/LogIn.html";
            })
            .catch(error => {
                console.error("Error al crear el usuario:", error);
            });
    });
});