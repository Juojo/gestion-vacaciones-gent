//const mysql = require('mysql2');
const fs = require('fs');

fs.readFile('datos_Jefe.json', 'utf8', (err, data) => {
    if (err) console.log(err);

    const datosJefe = JSON.parse(data);
    verificar(datosJefe);

    fs.readFile('datos_SubJefe.json', 'utf8', (err, data) => {
        if (err) console.log(err);

        const datosSubJefe = JSON.parse(data);
        verificar(datosSubJefe);

        fs.readFile('datos_Empleado.json', 'utf8', (err, data) => {
            if (err) console.log(err);
    
            const datosEmpleados = JSON.parse(data);
            verificar(datosEmpleados);
        })
    })
    
})

function verificar(datos) {
    for (let i = 0; i < datos.length; i++) {
        if (estaOcupado[datos[i].opc1Mes][datos[i].opc1Sem] === -1) {
            console.log("Se guarda la primer opcion");
            estaOcupado[datos[i].opc1Mes][datos[i].opc1Sem] = datos[i].dni;
        } else {
            if (estaOcupado[datos[i].opc2Mes][datos[i].opc2Sem] === -1) {
                console.log("Se guarda la segunda opcion");
                estaOcupado[datos[i].opc2Mes][datos[i].opc2Sem] = datos[i].dni;
            } else {
                if (estaOcupado[datos[i].opc3Mes][datos[i].opc3Sem] === -1) {
                    console.log("Se guarda la primer opcion");
                    estaOcupado[datos[i].opc3Mes][datos[i].opc3Sem] = datos[i].dni;
                } else {
                    console.log("Ninguna de las opciones esta disponible");
                }
            }
        }
    }
}

const vacacionesOcupadas = Array(12).fill().map(() => Array(4).fill(-1));
console.log(vacacionesOcupadas);



// vacacionesOcupadas[12][1] = true;

// query = select * from 
// connection.query(query,
//     function(err, results) {
//         if (err) {
//             console.log('Error: ', err);
//         } else {
//           if (results.length === 0) {
//             console.log("No existe el usuario o la contraseña es incorrecta");
//             res.send({ resultados: results, estado: "denegado" });
//           } else {
//             console.log("Bienvenido " + req.query.dni);
//             res.send({ resultados: results, estado: "aceptado" });
//           }
//         }
//     }
//   );

// const vacaciones = new Map();

// vacaciones.set(
//     id: 1, {
//         semana1: meses[11][3] // diciembre - semana 3
//         semana2: null
//     }
// )