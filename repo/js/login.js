const mysql = require('mysql2');
const config = require('../db/config')
const connection = mysql.createConnection(config);

let formularioRegister = document.getElementById(formularioRegister);

formularioRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById(usuario)
    let contrasena = document.getElementById(contrasena)
    
    if (username.value == "" || password.value == "") {
        alert("Complete todos los campos obligatorios")
      } else {
        if(buscarNombreEmpleado(nombre)) {
            console.log("El nombre se encuentra cargado en la db");
        } else {
            console.log("No se encontro el nombre");
        }
        //buscarEmpleado("pw");
      }
  });

function buscarNombreEmpleado(nom) {
    encotrado = false;
    
    connection.query(
        `SELECT nombre FROM empleados where nombre ${nombre}`,
        function(err, results) {
            if (err) {
                console.log('Error: ', err);
            }
            console.log(results[0].nombre);

            if (results[0].nombre === nom) {
                encontrado = true;
            } else {
                encontrado = false
            }
        }
    );

    return encontrado;
}

// const user = connection.query(
//     'SELECT nombre FROM empleados',
//     function(err, results) {
//         if (err) {
//             console.log('Error: ', err);
//         }
//         console.log(results[0].Nombre);
//     }
//   );

// const contrasena = connection.query(
//     `SELECT * FROM empleados WHERE contrasena = ${inputC}`,
//     function(err, results) {
//         if (err) {
//             console.log('Error: ', err);
//         }
//         console.log(results[0].contrasena);
//     }
//   );