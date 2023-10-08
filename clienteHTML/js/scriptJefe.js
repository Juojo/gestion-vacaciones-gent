document.addEventListener("DOMContentLoaded", function () {
    const fetchButton = document.getElementById("fetch-dni");
    const fechaInicioInput = document.getElementById("fecha-inicio");
    const fechaFinalInput = document.getElementById("fecha-final");
    const btnModificar = document.getElementById("modificar");
    const btnConfirmar = document.getElementById("confirmar");
    let vacacionId;


    fetchButton.addEventListener("click", function () {
        const dni = document.getElementById("dni").value;
        if (dni === null) {
            alert("Ingrese un dni");
        } else {
            // Realizar una solicitud GET al servidor para obtener las fechas
            axios.get(`http://localhost:5000/api/obtenerFechas?dni=${dni}`)
            .then(response => {
                if (response.data.estado === "aceptado") {
                    // Rellenar los campos "fecha-inicio" y "fecha-final" con las fechas recibidas
                    vacacionId = response.data.id;
                    fechaInicioInput.value = convertirFechaHoraISOaFechaHTML(response.data.FechaI);
                    fechaFinalInput.value = convertirFechaHoraISOaFechaHTML(response.data.FechaF);
                } else {
                    // Manejar el caso en el que no se encuentren fechas para el DNI proporcionado
                    alert("No se encontraron fechas para el DNI proporcionado.");
                }
            })
            .catch(error => {
                console.error("Error al obtener las fechas:", error);
            });
        }

        
    });

    btnModificar.addEventListener("click", function () {
        //e.preventDefault();
        // Habilita los campos de entrada de fecha
        fechaInicioInput.disabled = false;
        fechaFinalInput.disabled = false;
    });

    btnConfirmar.addEventListener("click", function () {
        axios.post(`http://localhost:5000/api/aceptarVacacion?id=${vacacionId}`)
        .then(response => {
            alert("Se confirmo la vacacion de id: " + vacacionId);
        })
        .catch(err => {
            console.error(err);
        })
    });

    btnRechazar.addEventListener("click", function () {
        axios.post(`http://localhost:5000/api/rechazarVacacion?id=${vacacionId}`)
        .then(response => {
            alert("Se rechazo la vacacion de id: " + vacacionId);
        })
        .catch(err => {
            console.error(err);
        })
    });
});

function convertirFechaHoraISOaFechaHTML(fechaHoraISO) {
    // Parsea la fecha y hora ISO 8601
    const fechaHora = new Date(fechaHoraISO);

    // Obtiene el año, mes y día en formato YYYY-MM-DD
    const anio = fechaHora.getFullYear();
    const mes = (fechaHora.getMonth() + 1).toString().padStart(2, '0'); // Suma 1 al mes ya que los meses comienzan en 0
    const dia = fechaHora.getDate().toString().padStart(2, '0');

    // Formatea la fecha en el formato YYYY-MM-DD
    return `${anio}-${mes}-${dia}`;
}