document.addEventListener("DOMContentLoaded", function () {
    const enviarButton = document.getElementById("enviar");
    const fechaInicioInput = document.getElementById("FechaI");
    const fechaFinalInput = document.getElementById("FechaF");
    const id = document.getElementById("input-dni");

    enviarButton.addEventListener("click", function () {
        const fechaInicio = fechaInicioInput.value;
        const fechaFinal = fechaFinalInput.value;

        if (!fechaInicio || !fechaFinal) {
            alert("Por favor, complete ambas fechas.");
            return;
        }

        // Formatea las fechas al formato 'YYYY-MM-DD' para MySQL
        const fechaInicioMySQL = formatearFechaParaMySQL(fechaInicio);
        const fechaFinalMySQL = formatearFechaParaMySQL(fechaFinal);

        // Crea un objeto con los datos que se enviarán al servidor
        const data = {
            FechaI: fechaInicioMySQL,
            FechaF: fechaFinalMySQL,
            Id_Empleado: id.value
            // Puedes agregar más campos aquí si es necesario
        };

        // Realiza una solicitud POST al servidor para insertar la solicitud de vacaciones
        axios.post("http://localhost:5000/api/insertarVacaciones", data)
        .then(response => {
            if (response.data.estado === "insertado") {
                alert("Solicitud de vacaciones enviada con éxito.");
            } else {
                alert("No se pudo enviar la solicitud de vacaciones.");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error al enviar la solicitud de vacaciones.");
        });
    });
});

function formatearFechaParaMySQL(fechaHTML) {
    // Parsea la fecha HTML en un objeto Date
    const fechaObj = new Date(fechaHTML);

    // Obtiene el año, mes y día en formato 'YYYY-MM-DD'
    const anio = fechaObj.getFullYear();
    const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0'); // Suma 1 al mes ya que los meses comienzan en 0
    const dia = fechaObj.getDate().toString().padStart(2, '0');

    // Formatea la fecha en el formato 'YYYY-MM-DD'
    return `${anio}-${mes}-${dia}`;
}
