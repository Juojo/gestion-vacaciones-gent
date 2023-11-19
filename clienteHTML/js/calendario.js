// document.addEventListener("DOMContentLoaded", function () {

//             // En tu script del frontend con Axios

//         axios.get('/api/matrizEstaOcupado')
//             .then(response => {
//             matrizEstaOcupado = response.data
//             console.log(matrizEstaOcupado);

//             // Por ejemplo, podrías mostrarlo en tu página
//             // Supongamos que tienes un div con el id "matrizOcupadoDiv"
//             // const matrizDiv = document.getElementById('matrizOcupadoDiv');
//             // matrizDiv.textContent = JSON.stringify(response.data);
//             })
//             .catch(error => {
//             console.error('There was an error fetching the data:', error);
//         });
//     });
// //});


// Hacer una solicitud GET al servidor para obtener la matriz
axios.get('http://localhost:5000/api/matrizEstaOcupado')
  .then(response => {
    const matrizEstaOcupado = response.data;
    console.log(matrizEstaOcupado);

    const matrizDiv = document.getElementById('matrizOcupadoDiv');

    // Crea una tabla HTML
    const tabla = document.createElement('table');

    // Recorre la matriz y crea filas y celdas
    for (let i = 0; i < matrizEstaOcupado.length; i++) {
    const fila = document.createElement('tr');

    for (let j = 0; j < matrizEstaOcupado[i].length; j++) {
        const celda = document.createElement('td');
        celda.textContent = matrizEstaOcupado[i][j];
        fila.appendChild(celda);
    }

    tabla.appendChild(fila);
    }

    // Agrega la tabla al div
    matrizDiv.appendChild(tabla);
    
  })
  .catch(error => {
    console.error('Hubo un error al obtener la matriz:', error);
  });
