const fs = require('fs');

const estaOcupado = Array(12).fill().map(() => Array(4).fill(-1));
//console.log(estaOcupado);

fs.readFile('../programaVacaciones/vacaciones/datos_Jefe.json', 'utf8', (err, data) => {
    if (err) console.log(err);

    const datosJefe = JSON.parse(data);
    verificar(datosJefe);

    fs.readFile('../programaVacaciones/vacaciones/datos_SubJefe.json', 'utf8', (err, data) => {
        if (err) console.log(err);

        const datosSubJefe = JSON.parse(data);
        verificar(datosSubJefe);

        fs.readFile('../programaVacaciones/vacaciones/datos_Empleado.json', 'utf8', (err, data) => {
            if (err) console.log(err);
    
            const datosEmpleados = JSON.parse(data);
            verificar(datosEmpleados);

            //console.log(estaOcupado);
            module.exports = estaOcupado;
        })
    })
    
})

function verificar(datos) {
    for (let i = 0; i < datos.length; i++) {
        const semanasOpcion1 = datos[i].SemanaOpción1.split(',').map(Number);
        const semanasOpcion2 = datos[i].SemanaOpción2.split(',').map(Number);
        const semanasOpcion3 = datos[i].SemanaOpción3.split(',').map(Number);

        const opciones = [
            { mes: datos[i].MesOpción1, semanas: semanasOpcion1 },
            { mes: datos[i].MesOpción2, semanas: semanasOpcion2 },
            { mes: datos[i].MesOpción3, semanas: semanasOpcion3 }
        ];

        let opcionEncontrada = false;

        for (const opcion of opciones) {
            const { mes, semanas } = opcion;
            let disponibles = true;

            for (const semana of semanas) {
                if (estaOcupado[mes - 1][semana - 1] !== -1) {
                    disponibles = false;
                    break;
                }
            }

            if (disponibles) {
                opcionEncontrada = true;

                for (const semana of semanas) {
                    estaOcupado[mes - 1][semana - 1] = datos[i].DNI;
                }
                //console.log(`Se guardó la opción en el mes ${mes}, semanas ${semanas.join(', ')}`);
                break;
            }
        }

        if (!opcionEncontrada) {
            //console.log(`Ninguna de las opciones está disponible para ${datos[i].Nombre} ${datos[i].Apellido}`);
        }
    }

}

// function verificar(datos) {
//     for (let i = 0; i < datos.length; i++) {
//         if (estaOcupado[datos[i].opc1Mes][datos[i].opc1Sem] === -1) {
//             console.log("Se guarda la primer opcion");
//             estaOcupado[datos[i].opc1Mes][datos[i].opc1Sem] = datos[i].dni;
//         } else {
//             if (estaOcupado[datos[i].opc2Mes][datos[i].opc2Sem] === -1) {
//                 console.log("Se guarda la segunda opcion");
//                 estaOcupado[datos[i].opc2Mes][datos[i].opc2Sem] = datos[i].dni;
//             } else {
//                 if (estaOcupado[datos[i].opc3Mes][datos[i].opc3Sem] === -1) {
//                     console.log("Se guarda la primer opcion");
//                     estaOcupado[datos[i].opc3Mes][datos[i].opc3Sem] = datos[i].dni;
//                 } else {
//                     console.log("Ninguna de las opciones esta disponible");
//                 }
//             }
//         }
//     }
// }